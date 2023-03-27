import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAt,
    faLock,
    faUnlockKeyhole,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";
import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const userIcon = <FontAwesomeIcon icon={faUser} />;
const emailIcon = <FontAwesomeIcon icon={faAt} />;
const passwordIcon = <FontAwesomeIcon icon={faLock} />;
const confirmPassIcon = <FontAwesomeIcon icon={faUnlockKeyhole} />;

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passConfirm, setPassConfirm] = useState("");

    const { userLogin } = useContext(authContext);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await authService.register(email, password, username);
            console.log(res);
            userLogin(res);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handlePassConfirm = (e) => {
        setPassConfirm(e.target.value);
    };

    return (
        <section className={styles["register-form-container"]}>
            <div className={styles["register-cta-container"]}>
                <h2 className={styles["register-cta-title"]}>REGISTER</h2>
                <p className={styles["register-cta-para"]}>
                    Please fill in the form!
                </p>
            </div>

            <form onSubmit={onSubmit} className={styles["register-form"]}>
                <section className={styles["input-upper-section"]}>
                    <div className={styles["register-username-container"]}>
                        <i className={styles["username-icon"]}>{userIcon}</i>
                        <input
                            type="username"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={handleUsername}
                        />
                    </div>

                    <div className={styles["register-email-container"]}>
                        <i className={styles["username-icon"]}>{emailIcon}</i>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                </section>

                <section className={styles["input-lower-section"]}>
                    <div className={styles["register-password-container"]}>
                        <i className={styles["username-icon"]}>
                            {passwordIcon}
                        </i>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                        />
                    </div>

                    <div className={styles["register-passconfirm-container"]}>
                        <i className={styles["username-icon"]}>
                            {confirmPassIcon}
                        </i>
                        <input
                            type="password"
                            id="passconfirm"
                            placeholder="Repeat your password"
                            name="passconfirm"
                            value={passConfirm}
                            onChange={handlePassConfirm}
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
