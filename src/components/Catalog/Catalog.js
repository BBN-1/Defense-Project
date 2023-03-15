import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";

const Catalog = () => {
    return (
        <div className={styles["catalog-contianer"]}> 
        <h1 className={styles["catalog-title"]}>MOTIVATIONS</h1>
        <section className={styles["catalog-cards-container"]}>
            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                </p>
                <span className={styles["quote-author"]}>- Albert Einstein</span>

                <Link className={styles["quote-details-link"]} to="/details">
                    Details
                </Link>
            </div>

            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                </p>
                <span className={styles["quote-author"]}>- Albert Einstein</span>

                <Link className={styles["quote-details-link"]} to="/details">
                    Details
                </Link>
            </div>

            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                </p>
                <span className={styles["quote-author"]}>- Albert Einstein</span>

                <Link className={styles["quote-details-link"]} to="/details">
                    Details
                </Link>
            </div>

            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                </p>
                <span className={styles["quote-author"]}>- Albert Einstein</span>

                <Link className={styles["quote-details-link"]} to="/details">
                    Details
                </Link>
            </div>

            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                </p>
                <span className={styles["quote-author"]}>- Albert Einstein</span>

                <Link className={styles["quote-details-link"]} to="/details">
                    Details
                </Link>
            </div>

            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                </p>
                <span className={styles["quote-author"]}>- Albert Einstein</span>

                <Link className={styles["quote-details-link"]} to="/details">
                    Details
                </Link>
            </div>

            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                </p>
                <span className={styles["quote-author"]}>- Albert Einstein</span>

                <Link className={styles["quote-details-link"]} to="/details">
                   <span className={styles["catalog-details-link-txt"]}>Details</span> 
                </Link>
            </div>

  
        </section>
        </div>
    );
};

export default Catalog;
