import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt,  faLock, faUnlockKeyhole, faUser } from "@fortawesome/free-solid-svg-icons";

const userIcon = <FontAwesomeIcon icon={faUser} />;
const emailIcon = <FontAwesomeIcon icon={faAt} />;
const passwordIcon = <FontAwesomeIcon icon={faLock} />;
const confirmPassIcon = <FontAwesomeIcon icon={faUnlockKeyhole} />;

const Register = () => {
    return (
        <section className={styles["register-form-container"]}>
            <div className={styles["register-cta-container"]}>
                <h2 className={styles["register-cta-title"]}>REGISTER</h2>
                <p className={styles["register-cta-para"]}>
                    Please fill in the form in order to register!
                </p>
            </div>

            <form className={styles["register-form"]}>
                <section className={styles["input-upper-section"]}>
                    <div className={styles["register-username-container"]}>
                        <i className={styles["username-icon"]} >{userIcon}</i>
                        <input
                            
                            type="username"
                            id="username"
                            name="username"
                            placeholder="Username"
                        />
                    </div>

                    <div className={styles["register-email-container"]}>
                    <i className={styles["username-icon"]} >{emailIcon}</i>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                </section>

                <section className={styles["input-lower-section"]}>
                    <div className={styles["register-password-container"]}>
                    <i className={styles["username-icon"]} >{passwordIcon}</i>
                        <input
                            type="password"
                            id="form2Example2"
                            placeholder="Password"
                            name="password"
                        />
                    </div>

                    <div className={styles["register-passconfirm-container"]}>
                    <i className={styles["username-icon"]} >{confirmPassIcon}</i>
                        <input
                            type="password"
                            id="form2Example2"
                            placeholder="Repeat your password"
                            name="confirm-password"
                        />
                    </div>
                </section>

                <button type="submit" className={styles["register-btn"]}>
                    REGISTER
                </button>
            </form>

            <div className={styles["register-notlogged-container"]}>
                <p>
                    Already have account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </section>
    );
};

export default Register;
