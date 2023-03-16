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

            <div className={styles["details-comment-form-container"]}>
                <form className={styles["comment-form"]}>
                    <label
                        className={styles["comment-label"]}
                        htmlFor="comment"
                    >
                        Leave a comment
                    </label>
                    <textarea
                        className={styles["comment-textarea"]}
                        name="comment"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="“People ask you for criticism, but they only want praise.”"
                    ></textarea>
                    <button className={styles["comment-btn"]}>
                        Criticize Anyway
                    </button>
                </form>
            </div>

            <div className={styles["details-comments-container"]}>
                <div
                    className={
                        styles["details-comments-container-inside-wrapper"]
                    }
                >
                    {" "}
                    <h1 className={styles["comments-wrapper-title"]}>COMMENTS by MEMBERS</h1>
                    <p
                        className={
                            styles["details-comments-container-single-comment"]
                        }
                    >
                        This is crazy good - posted by Someone Smart
                    </p>
                    <p
                        className={
                            styles["details-comments-container-single-comment"]
                        }
                    >
                        I thought he meant smth else - posted by BigBrained
                    </p>
                    <p
                        className={
                            styles["details-comments-container-single-comment"]
                        }
                    >
                        {" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Natus neque magni vel ipsam consequatur
                        accusantium, saepe et ratione? Tenetur nulla unde quasi
                        tempore quidem hic nihil doloremque accusamus ut
                        voluptatum. - posted by LoremGuy{" "}
                    </p>
                    <p
                        className={
                            styles["details-comments-container-single-comment"]
                        }
                    >
                        {" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Natus neque magni vel ipsam consequatur
                        accusantium, saepe et ratione? Tenetur nulla unde quasi
                        tempore quidem hic nihil doloremque accusamus ut
                        voluptatum. - posted by LoremGuy{" "}
                    </p>
                    <p
                        className={
                            styles["details-comments-container-single-comment"]
                        }
                    >
                        {" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Natus neque magni vel ipsam consequatur
                        accusantium, saepe et ratione? Tenetur nulla unde quasi
                        tempore quidem hic nihil doloremque accusamus ut
                        voluptatum. - posted by LoremGuy{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details;
