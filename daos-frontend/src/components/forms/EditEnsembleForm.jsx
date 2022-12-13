import { useState } from "react";
import ButtonTag from "../atoms/ButtonTag";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import InputTagText from "../atoms/InputTagText";
import LabelTag from "../atoms/LabelTag";
import PTag from "../atoms/PTag";
import SelectTag from "../atoms/SelectTag";
import TextareaTag from "../atoms/TextareaTag";
import Chips from "../others/Chips";
import DisabledButton from "../others/DisabledButton";
import TerritoryInputs from "../others/TerritoryInputs";
import styles from "./EditEnsembleForm.module.css";

export default function EditEnsembleForm() {

    const [activeMusicians, setActiveMusicians] = useState(["1 - 4 musicians", "5 - 9 musicians", "10 - 24 musicians", "25 - 49 musicians", "More than 50 musicians"]);
    const [frequency, setFrequency] = useState(["Several times a week", "1 time per week", "1 time every two weeks", "1 time per month", "1 time per month", "1 time every two months or"]);
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

    return (
        <form className={styles.editEnsembleFormDefault}>
            <InputTagText inputText="Ensemble name" />
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            <TextareaTag textAreaText="Write a short description of your ensemble or orchestra..." />
            <LabelTag labelType="normal" labelColor="blue" labelText="Website" />
            <InputTagText inputText="Insert link" />
            <LabelTag labelType="normal" labelColor="blue" labelText="Territory" />
            <TerritoryInputs />
            <LabelTag labelType="normal" labelColor="blue" labelText="Number of active musicians" />
            <SelectTag selectPlaceholder="Select number" selectOptions={activeMusicians} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Practice frequency" />
            <SelectTag selectPlaceholder="Select frequency" selectOptions={frequency} />
            <LabelTag labelType="normal" labelColor="blue" labelText="The ensemble plays…" />
            <div>
                <InputTagCheckbox />
                <PTag pType="small" pColor="grey" pText="Continuously" />
            </div>
            <div>
                <InputTagCheckbox />
                <PTag pType="small" pColor="grey" pText="Project-based" />
            </div>
            <LabelTag labelType="normal" labelColor="blue" labelText="Genres" />
            <SelectTag selectPlaceholder="Genres" selectOptions={genres} selectFunction={selectGenre} />
            <Chips selected={selectedGenres} setSelectedGenres={setSelectedGenres} />
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />
            <DisabledButton disabledButtonText="Saving changes" />
        </form>
    );
}