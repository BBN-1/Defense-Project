import styles from "./Catalog.module.css";

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

                <a className={styles["quote-details-link"]} href="">
                    Details
                </a>
            </div>

            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, repudiandae dolorem dolor animi maxime aspernatur nihil consequuntur omnis temporibus ipsam optio magni quidem quod voluptatem perspiciatis impedit, error laboriosam quasi?
                </p>
                <span className={styles["quote-author"]}>-Albert Einstein</span>
                <a className={styles["quote-details-link"]} href="">
                    Details
                </a>
            </div>

            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                </p>
                <span className={styles["quote-author"]}>-Albert Einstein</span>
                <a className={styles["quote-details-link"]} href="">
                    Details
                </a>
            </div>

            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                </p>
                <span className={styles["quote-author"]}>-Albert Einstein</span>
                <a className={styles["quote-details-link"]} href="">
                    Details
                </a>
            </div>

            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                </p>
                <span className={styles["quote-author"]}>-Albert Einstein</span>
                <a className={styles["quote-details-link"]} href="">
                    Details
                </a>
            </div>

            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                </p>
                <span className={styles["quote-author"]}>-Albert Einstein</span>
                <a className={styles["quote-details-link"]} href="">
                    Details
                </a>
            </div>

            <div className={styles["quote-card"]}>
                <p className={styles["quote-text"]}>
                    “Two things are infinite: the universe and human stupidity;
                    and I'm not sure about the universe.” “Two things are
                    infinite: the universe and human stupidity; and I'm not sure
                    about the universe.” “Two things are infinite: the universe
                    and human stupidity; and I'm not sure about the universe.”
                </p>
                <span className={styles["quote-author"]}>-Albert Einstein</span>
                <a className={styles["quote-details-link"]} href="">
                    Details
                </a>
            </div>
        </section>
        </div>
    );
};

export default Catalog;
