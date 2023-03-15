import styles from "./Details.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRadiation } from "@fortawesome/free-solid-svg-icons";

const pencil = <FontAwesomeIcon icon={faPencil} />;
const danger = <FontAwesomeIcon icon={faRadiation} />;

const Details = () => {
    return (
        <div className={styles["quote-container"]}>
            <div className={styles["text-container"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                    things are infinite: the universe and human stupidity;
                </p>
                <span className={styles["quote-author"]}>-Albert Einstein</span>
            </div>

            <div className={styles["details-buttons-container"]}>
                <button>
                    <i className={styles.icon}>{pencil}</i>
                    Edit
                </button>
                <button>
                    <i className={styles.icon}>{danger}</i>
                    Delete!
                </button>
            </div>
        </div>
    );
};

export default Details;
