import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import main_logo_transparent from "../../images/main_logo_transparent.png";

const Header = () => {
    const setHeaderLinks = ({ isActive }) => {
        return isActive ? styles["active-link"] : styles["non-active-link"];
    };

    return (
        <header className={styles["header-box"]}>
            <nav className={styles["main-nav"]}>
                <div className={styles["logo-box"]}>
                    <li className={styles["logo-link"]}>
                        <NavLink to="/">
                            <img src={main_logo_transparent} alt="main logo" />
                        </NavLink>
                    </li>
                </div>
                <ol role="list" className={styles["main-links-box"]}>
                    <li>
                        <NavLink to="/create" className={setHeaderLinks}>
                            CREATE
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalog" className={setHeaderLinks}>
                            GET{" "}
                            <span className={styles["red-exclamation-point"]}>
                                MOTIVATED!
                            </span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/login" className={setHeaderLinks}>
                            LOGIN
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/register" className={setHeaderLinks}>
                            REGISTER
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className={setHeaderLinks}>
                            PROFILE
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout" className={setHeaderLinks}>
                            LOGOUT
                        </NavLink>
                    </li>
                </ol>
            </nav>
        </header>
    );
};

export default Header;
