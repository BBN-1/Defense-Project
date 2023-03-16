import styles from './LatestQuote.module.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShuffle } from "@fortawesome/free-solid-svg-icons";

const shuffle = <FontAwesomeIcon icon={faShuffle} />;
const clock = <FontAwesomeIcon icon={faClock} />;

const LatestQuote = () => {
    return (
        <section className={styles["home-container"]}>
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

                <div className={styles["home-buttons-container"]}>
                    <Link>
                        <i className={styles.icon}>{shuffle}</i>
                        Random
                    </Link>

                    <Link to="/catalog">
                        <i className={styles.icon}>{clock}</i>
                        Show all!
                    </Link>
                </div>
            </div>
        </section>
    );

}

export default LatestQuote;