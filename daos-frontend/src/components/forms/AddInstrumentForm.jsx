import { useState } from "react";
import ButtonTag from "../atoms/ButtonTag";
import LabelTag from "../atoms/LabelTag";
import SelectTag from "../atoms/SelectTag";
import Chips from "../others/Chips";
import DisabledButton from "../others/DisabledButton";
import styles from "./AddInstrumentForm.module.css";

export default function AddInstrumentForm() {

    const [instruments, setInstruments] = useState(["Violone", "Violin", "Viola", "Viol", "Vihuela", "Trumpet", "Theorbo", "Slide trumpet", "Serpent", "Sackbut", "Natural trumpet", "Natural horn"]);
    const [skillLevel, setSkillLevel] = useState(["1 - Beginner", "2 - Intermediate", "3 - Advanced", "4 - Expert"]);
    const [selectedSkillLevel, setSelectedSkillLevel] = useState("");
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

    function selectSkillLevel(e) {
        let selectedLevel = e.target.value;

        if (selectedLevel == "1 - Beginner") {
            setSelectedSkillLevel("1");
        } else if (selectedLevel == "2 - Intermediate") {
            setSelectedSkillLevel("2");
        } else if (selectedLevel == "3 - Advanced") {
            setSelectedSkillLevel("3");
        } else if (selectedLevel == "4 - Expert") {
            setSelectedSkillLevel("4");
        }
    }
    
    return (
        <form className={styles.addInstrumentFormDefault}>
            <SelectTag selectPlaceholder="Select instrument" selectOptions={instruments} />
            <LabelTag labelType="normal" labelColor="blue" labelText="What is your skill level?" />
            <SelectTag selectPlaceholder="Select your skill level" selectOptions={skillLevel} selectFunction={selectSkillLevel} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Genres" />
            <SelectTag selectPlaceholder="Genres" selectOptions={genres} selectFunction={selectGenre} />
            <Chips selected={selectedGenres} setSelectedGenres={setSelectedGenres} />
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Add instrument" />
            <DisabledButton disabledButtonText="Adding instrument" />
        </form>
    );
}