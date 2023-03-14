import styles from './Create.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPencil, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";


const pencil = <FontAwesomeIcon icon={faPencil} />;
const astrounat = <FontAwesomeIcon icon={faUserAstronaut} />;

const Create = () => {
    return (
        <section className={styles["create-form-container"]}>
        <div className={styles["create-cta-container"]}>
            <h2 className={styles["create-cta-title"]}>MOTIVATE OTHERS</h2>
            <p className={styles["create-cta-para"]}>
            There is no joy in possession without sharing.
            </p>
        </div>

        <form className={styles["create-form"]}>
            <div className={styles["create-quote-container"]}>
            <i className={styles["username-icon"]} >{pencil}</i>
                <textarea className={styles["quote-input"]}
                    type="text"
                    id="email"
                    
                    name="quote"
                    placeholder="Quote text"
                />
            </div>

            <div className={styles["create-author-container"]}>
            <i className={styles["username-icon"]} >{astrounat}</i>
                <input 
                    type="author"
                    id="form2Example2"
                    
                    placeholder="Quote author"
                    name="author"
                />
            </div>

            <button type="submit" className={styles["create-btn"]}>
                CREATE!
            </button>
        </form>

    
    </section>
    );
}

export default Create;