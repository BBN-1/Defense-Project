import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCableCar,
    faClock,
    faCoffee,
    faHatWizard,
    faShuffle,
} from "@fortawesome/free-solid-svg-icons";

const shuffle = <FontAwesomeIcon icon={faShuffle} />;
const clock = <FontAwesomeIcon icon={faClock} />;

const Home = () => {
    return (
        <section className={styles.home_container}>
            <div className={styles.quote_container}>
                <div className={styles.text_container}>
                    <p className={styles.quote_text}>
                        “Two things are infinite: the universe and human
                        stupidity; and I'm not sure about the universe.” “Two
                        things are infinite: the universe and human stupidity;
                        and I'm not sure about the universe.” “Two things are
                        infinite: the universe and human stupidity; and I'm not
                        sure about the universe.”
                    </p>
                    <span className={styles.quote_author}>
                        -Albert Einstein
                    </span>
                </div>

                <div className={styles.home_buttons_container}>
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
        </section>
    );
};

export default Home;
