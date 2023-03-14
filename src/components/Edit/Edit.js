import styles from './Edit.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPencil, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

const pencil = <FontAwesomeIcon icon={faPencil} />;
const astrounat = <FontAwesomeIcon icon={faUserAstronaut} />;

const Edit = () => {
    return (
        <section className={styles["edit-form-container"]}>
        <div className={styles["edit-cta-container"]}>
            <h2 className={styles["edit-cta-title"]}>FINE-TUNE</h2>
            <p className={styles["edit-cta-para"]}>
                It is never too late to get it right!
            </p>
        </div>

        <form className={styles["edit-form"]}>
            <div className={styles["edit-quote-container"]}>
            <i className={styles["username-icon"]} >{pencil}</i>
                <textarea className={styles["quote-input"]}
                    type="text"
                    id="email"
                    
                    name="quote"
                    placeholder="Quote text"
                />
            </div>

            <div className={styles["edit-author-container"]}>
            <i className={styles["username-icon"]} >{astrounat}</i>
                <input 
                    type="author"
                    id="form2Example2"
                    
                    placeholder="Quote author"
                    name="author"
                />
            </div>

            <button type="submit" className={styles["edit-btn"]}>
                EDIT QUOTE
            </button>
        </form>

    
    </section>
    );
}

export default Edit;