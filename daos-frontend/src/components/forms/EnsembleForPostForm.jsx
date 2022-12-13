import { Link } from "react-router-dom";
import LabelTag from "../atoms/LabelTag";
import PTag from "../atoms/PTag";
import SelectTag from "../atoms/SelectTag";
import ButtonTag from "../atoms/ButtonTag";
import styles from "./EnsembleForPostForm.module.css";

export default function EnsembleForPostForm() {

    const ensembles = ["Hans Jensens band","Claus olsen orkester"]

    return (
        <form className={styles.ensembleForPostFormDefault}>
            <PTag pType="small" pColor="grey" pText="Select the ensemble on whose behalf the posting is to be created. If you are about to start a new ensemble, you can create it." />
            <LabelTag labelType="normal" labelColor="blue" labelText="My ensambles" />
            <SelectTag selectPlaceholder="Select ensemble" selectOptions={ensembles} />
            <Link to="/profile/ensemble">
                <ButtonTag buttonType="normal" buttonColor="white" buttonText="Create ensemble" />
            </Link>
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Next" />
        </form>
    );
}