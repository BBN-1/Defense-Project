import styles from "./Profile.module.css";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faUser } from "@fortawesome/free-solid-svg-icons";

const userIcon = <FontAwesomeIcon icon={faUser} />;
const mailIcon = <FontAwesomeIcon icon={faMailBulk} />;

const Profile = () => {

    const {user} = useContext(authContext)
    console.log(user);

    return (
        <section className={styles["profile-form-container"]}>
            <div className={styles["profile-header"]}>
                <h2 className={styles["profile-title"]}>Profile</h2>
                <p className={styles["profile-para"]}>
                    Your personal information
                </p>
            </div>

            <div className={styles["profile-card"]}>
                <div className={styles["profile-card-username-container"]}>
                    <i className={styles["username-icon"]}>{userIcon}</i>
                    <h1 className={styles["profile-card-username"]}>{user._id}</h1>
                </div>

                <div className={styles["profile-card-email-container"]}>
                    <i className={styles["email-icon"]}>{mailIcon}</i>
                    <p className={styles["profile-card-email"]}>
                        {user.email}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Profile;
