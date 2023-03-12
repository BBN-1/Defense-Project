import styles from "./Header.module.css";
import main_logo_transparent from "../../images/main_logo_transparent.png"

const Header = () => {
    return (
        <header className={styles["header-box"]}>
            <nav className={styles["main-nav"]}>
                <div className={styles["logo-box"]}>
                    <li className={styles["logo-link"]}>
                    <img
                            src={main_logo_transparent}
                            alt="main logo"
                        />
                    </li>
                   
                    
                </div>
                <ol role="list" className={styles["main-links-box"]}>
                    <li>MOTIVATE</li>
                    <li>GET <span className={styles["red-exclamation-point"]}>MOTIVATED!</span></li>
                    <li>LOGOUT</li>
                    <li>LOGIN</li>
                    <li>PROFILE</li>
                    <li>REGISTER</li>
                </ol>
            </nav>
        </header>
    );
};

export default Header;
