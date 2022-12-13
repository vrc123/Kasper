import InputTagText from "../atoms/InputTagText";
import styles from "./ProfileChangePasswordForm.module.css";
import ButtonTag from "../atoms/ButtonTag";
import HideAndShowPassword from "../others/HideAndShowPassword";
import DisabledButton from "../others/DisabledButton";
import { useState } from "react";

export default function ProfileChangePasswordForm() {

    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const profileId = localStorage.getItem("profileId");

    function passwordProp(e) {
        setPassword(e.target.value);
    }

    function changePassword(e) {
        e.preventDefault();

        setIsLoading(true);

        const profile = {  
            password,
        }

        console.log(profile)

    }

    return (
        <form className={styles.profileChangePasswordFormDefault} onSubmit={changePassword}>
            <HideAndShowPassword password={password} passwordProp={passwordProp} inputPlaceholder="New password" />
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />
            <DisabledButton disabledButtonText="Saving changes" />
        </form>
    );
}