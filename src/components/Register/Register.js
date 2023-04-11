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
import Input from "../Input/Input";

const userIcon = <FontAwesomeIcon icon={faUser} />;
const emailIcon = <FontAwesomeIcon icon={faAt} />;
const passwordIcon = <FontAwesomeIcon icon={faLock} />;
const confirmPassIcon = <FontAwesomeIcon icon={faUnlockKeyhole} />;

const Register = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        passConfirm: "",
    });

    const { userLogin } = useContext(authContext);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        if (values.password !== values.passConfirm) {
            alert("Password and confirm password must match!");
            return;
        }

        try {
            const res = await authService.register(
                values.email,
                values.password,
                values.username
            );
            console.log(res);
            userLogin(res);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const onChangeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
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
                        <Input
                            value={values["username"]}
                            onChange={onChangeHandler}
                            name={"username"}
                            placeholder={"Username"}
                            type={"username"}
                            setStyles={"error-msg"}
                            errorMsg={
                                "Username must be between 3 and 12 characters long and can contain only letters, numbers and underscore!"
                            }
                            required={true}
                            pattern={"^[a-zA-Z0-9_]{3,12}$"}
                        />
                    </div>

                    <div className={styles["register-email-container"]}>
                        <i className={styles["username-icon"]}>{emailIcon}</i>

                        <Input
                            value={values["email"]}
                            onChange={onChangeHandler}
                            name={"email"}
                            placeholder={"Yourmail@here.com"}
                            type={"email"}
                            setStyles={"error-msg"}
                            errorMsg={"Email must be valid!"}
                            required={true}
                            pattern={
                                "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
                            }
                        />
                    </div>
                </section>

                <section className={styles["input-lower-section"]}>
                    <div className={styles["register-password-container"]}>
                        <i className={styles["username-icon"]}>
                            {passwordIcon}
                        </i>
                        <Input
                            value={values["password"]}
                            onChange={onChangeHandler}
                            name={"password"}
                            placeholder={"Password"}
                            type={"password"}
                            setStyles={"error-msg"}
                            errorMsg={
                                "The password must contain at least 6 characters!"
                            }
                            required={true}
                            pattern={"^.{6,}$"}
                        />
                    </div>

                    <div className={styles["register-passconfirm-container"]}>
                        <i className={styles["username-icon"]}>
                            {confirmPassIcon}
                        </i>
                        <Input
                            value={values["Passconfirm"]}
                            onChange={onChangeHandler}
                            name={"passConfirm"}
                            placeholder={"Repeat your password"}
                            type={"password"}
                            setStyles={"error-msg"}
                            errorMsg={
                                "Passwords must match!"
                            }
                            required={true}
                            pattern={values.password}
                            
                        />
                    </div>
                </section>

                <button type="submit" className={styles["register-btn"]}>
                    REGISTER
                </button>
            </form>

            <div className={styles["register-notlogged-container"]}>
                <p>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </section>
    );
};

export default Register;
