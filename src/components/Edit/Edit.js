import styles from "./Edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as quoteService from "../../services/quoteService";
import { useNavigate } from "react-router-dom";

const pencil = <FontAwesomeIcon icon={faPencil} />;
const astrounat = <FontAwesomeIcon icon={faUserAstronaut} />;

const Edit = () => {
    const { quoteId } = useParams();
    console.log(quoteId);
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        quoteService.getOne(quoteId).then((res) => {
            setText(res.text);
            setAuthor(res.author);
        });
    }, [quoteId]);

    const textHandler = (e) => {
        setText(e.target.value);
    };

    const authorHandler = (e) => {
        setAuthor(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        quoteService.editQuote(quoteId, { text, author });
        navigate(`/catalog/${quoteId}`);
    };

    return (
        <section className={styles["edit-form-container"]}>
            <div className={styles["edit-cta-container"]}>
                <h2 className={styles["edit-cta-title"]}>FINE-TUNE</h2>
                <p className={styles["edit-cta-para"]}>
                    It is never too late to get it right!
                </p>
            </div>

            <form onSubmit={onSubmit} className={styles["edit-form"]}>
                <div className={styles["edit-quote-container"]}>
                    <i className={styles["username-icon"]}>{pencil}</i>
                    <textarea
                        className={styles["quote-input"]}
                        type="text"
                        id="text"
                        onChange={textHandler}
                        value={text}
                        name="quote"
                    />
                </div>

                <div className={styles["edit-author-container"]}>
                    <i className={styles["username-icon"]}>{astrounat}</i>
                    <input
                        type="author"
                        id="author"
                        onChange={authorHandler}
                        value={author}
                        name="author"
                    />
                </div>

                <button type="submit" className={styles["edit-btn"]}>
                    EDIT QUOTE
                </button>
            </form>
        </section>
    );
};

export default Edit;
