import styles from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt,  faLock, faUnlockKeyhole, faUser } from "@fortawesome/free-solid-svg-icons";


const emailIcon = <FontAwesomeIcon icon={faAt} />;
const passwordIcon = <FontAwesomeIcon icon={faLock} />;


const Login = () => {
    return (
        <section className={styles["login-form-container"]}>
            <div className={styles["login-cta-container"]}>
                <h2 className={styles["login-cta-title"]}>LOGIN</h2>
                <p className={styles["login-cta-para"]}>
                    Please enter you login and password!
                </p>
            </div>

            <form className={styles["login-form"]}>
                <div className={styles["login-email-container"]}>
                <i className={styles["username-icon"]} >{emailIcon}</i>
                    <input  
                        type="email"
                        id="email"
                        
                        name="email"
                        placeholder="Email"
                    />
                </div>

                <div className={styles["login-password-container"]}>
                <i className={styles["username-icon"]} >{passwordIcon}</i>
                    <input 
                        type="password"
                        id="form2Example2"
                        
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
                    Don't have an account? <a href="#!">Register</a>
                </p>
            </div>
        </section>
    );
};

export default Login;
