import styles from "./Profile.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faUser } from "@fortawesome/free-solid-svg-icons";

const userIcon = <FontAwesomeIcon icon={faUser} />;
const mailIcon = <FontAwesomeIcon icon={faMailBulk} />;

const Profile = () => {
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
                    <h1 className={styles["profile-card-username"]}>Crowly</h1>
                </div>

                <div className={styles["profile-card-email-container"]}>
                    <i className={styles["email-icon"]}>{mailIcon}</i>
                    <p className={styles["profile-card-email"]}>
                        martinneshevsr@gmail.com
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Profile;
