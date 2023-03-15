import styles from './LatestQuote.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShuffle } from "@fortawesome/free-solid-svg-icons";

const shuffle = <FontAwesomeIcon icon={faShuffle} />;
const clock = <FontAwesomeIcon icon={faClock} />;

const LatestQuote = () => {
    return (
        <div className={styles["quote-container"]}>
        <div className={styles["text-container"]}>
            <p className={styles["quote-text"]}>
                “Two things are infinite: the universe and human
                stupidity; and I'm not sure about the universe.” “Two
                things are infinite: the universe and human stupidity;
                and I'm not sure about the universe.” “Two things are
                infinite: the universe and human stupidity; and I'm not
                sure about the universe.”
            </p>
            <span className={styles["quote-author"]}>
                -Albert Einstein
            </span>
        </div>

        <div className={styles["latest-buttons-container"]}>
            <button>
                <i className={styles.icon}>{shuffle}</i>
                Random
            </button>
            <button>
                <i className={styles.icon}>{clock}</i>
                Show all!
            </button>
        </div>
    </div>
    );

}

export default LatestQuote;