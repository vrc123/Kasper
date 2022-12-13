import LabelTag from "../atoms/LabelTag";
import styles from "./ProfileChangeNewsletterSettingsForm.module.css";
import ButtonTag from "../atoms/ButtonTag";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import PTag from "../atoms/PTag";
import DisabledButton from "../others/DisabledButton";
import { useState } from "react";

export default function ProfileChangeNewsletterSettingsForm() {

    const [newsletter, setNewsletter] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const profileId = localStorage.getItem("profileId");

    function newsletterProp(e) {
        setNewsletter(e.target.checked);
    }

    function changeNewsletterSettings(e) {
        e.preventDefault();

        setIsLoading(true);

        const profile = {  
            newsletter,
        }

        console.log(profile)

    }

    return (
        <form className={styles.profileChangeNewsletterSettingsFormDefault} onSubmit={changeNewsletterSettings}>
            <div>
                <InputTagCheckbox inputCheckboxFunction={newsletterProp} />
                <PTag pType="small" pColor="grey" pText="Sign up for the DAOS newsletter" />
            </div>
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />
            <DisabledButton disabledButtonText="Saving changes" />
        </form>
    );
}