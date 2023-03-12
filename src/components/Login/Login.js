import styles from "./Login.module.css";

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
                    <input  
                        type="email"
                        id="email"
                        
                        name="email"
                        placeholder="Email"
                    />
                </div>

                <div className={styles["login-password-container"]}>
                    <input 
                        type="password"
                        id="form2Example2"
                        
                        placeholder="Password"
                        name="password"
                    />
                </div>

                <button type="submit" className={styles["login-login-btn"]}>
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
