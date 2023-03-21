import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const emailIcon = <FontAwesomeIcon icon={faAt} />;
const passwordIcon = <FontAwesomeIcon icon={faLock} />;

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(email + " " + password);
    };

    return (
        <section className={styles["login-form-container"]}>
            <div className={styles["login-cta-container"]}>
                <h2 className={styles["login-cta-title"]}>LOGIN</h2>
                <p className={styles["login-cta-para"]}>
                    Please enter you login and password!
                </p>
            </div>

            <form className={styles["login-form"]} onSubmit={onSubmit}>
                <div className={styles["login-email-container"]}>
                    <i className={styles["username-icon"]}>{emailIcon}</i>
                    <input
                        type="email"
                        id="email"
                        onChange={handleEmail}
                        value={email}
                        name="email"
                        placeholder="Youremail@here.com"
                    />
                </div>

                <div className={styles["login-password-container"]}>
                    <i className={styles["username-icon"]}>{passwordIcon}</i>
                    <input
                        type="password"
                        id="password"
                        onChange={handlePassword}
                        value={password}
                        placeholder="Password"
                        name="password"
                    />
                </div>

                <button type="submit" className={styles["login-btn"]}>
                    LOGIN
                </button>
            </form>

            <div className={styles["login-notlogged-container"]}>
            <p>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </section>
    );
};

export default Login;
