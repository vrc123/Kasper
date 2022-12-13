import { useState } from "react";
import ButtonTag from "../atoms/ButtonTag";
import InputTagText from "../atoms/InputTagText";
import LabelTag from "../atoms/LabelTag";
import SelectTag from "../atoms/SelectTag";
import TextareaTag from "../atoms/TextareaTag";
import Chips from "../others/Chips";
import DisabledButton from "../others/DisabledButton";
import styles from "./EditEnsemblePostForm.module.css";

export default function EditEnsemblePostForm() {
    const [instruments, setInstruments] = useState(["Violone", "Violin", "Viola", "Viol", "Vihuela", "Trumpet", "Theorbo", "Slide trumpet", "Serpent", "Sackbut", "Natural trumpet", "Natural horn"]);
    const [minimumskillLevel, setMinimumSkillLevel] = useState(["1 - Beginner", "2 - Intermediate", "3 - Advanced", "4 - Expert"]);
    const [selectedMinimumSkillLevel, setSelectedMinimumSkillLevel] = useState("");
    const [genres, setGenres] = useState(["Baroque", "Folk music", "Chamber music", "Romantic", "Late modern", "Late Romantic", "Symphonic"]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    function selectGenre(e) {
        let selectedGenre = e.target.value;

        if(!selectedGenre == "") {
            if (selectedGenres.indexOf(selectedGenre) == -1) {
                setSelectedGenres((selectedGenres) => [...selectedGenres, selectedGenre]);
            }
        }
    }

    function selectMinimumSkillLevel(e) {
        let selectedMinimumLevel = e.target.value;

        if (selectedMinimumLevel == "1 - Beginner") {
            setSelectedMinimumSkillLevel("1");
        } else if (selectedMinimumLevel == "2 - Intermediate") {
            setSelectedMinimumSkillLevel("2");
        } else if (selectedMinimumLevel == "3 - Advanced") {
            setSelectedMinimumSkillLevel("3");
        } else if (selectedMinimumLevel == "4 - Expert") {
            setSelectedMinimumSkillLevel("4");
        }
    }

    return (
        <form className={styles.editEnsemblePostFormDefault}>
            <InputTagText inputText="Title" />
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            <TextareaTag textAreatText="Write a short description of what you are looking for..." />
            <LabelTag labelType="normal" labelColor="blue" labelText="Instrument" />
            <SelectTag selectPlaceholder="Select instrument" selectOptions={instruments} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Minimum skill level" />
            <SelectTag selectPlaceholder="Select minimum skill level" selectOptions={minimumskillLevel} selectFunction={selectMinimumSkillLevel} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Genres" />
            <SelectTag selectPlaceholder="Genres" selectOptions={genres} selectFunction={selectGenre} />
            <Chips selected={selectedGenres} setSelectedGenres={setSelectedGenres} />
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />
            <DisabledButton disabledButtonText="Saving changes" />
        </form>
    );
}