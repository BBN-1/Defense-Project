import styles from "./Edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService";
import { useNavigate } from "react-router-dom";

const pencil = <FontAwesomeIcon icon={faPencil} />;
const astrounat = <FontAwesomeIcon icon={faUserAstronaut} />;

const Edit = () => {
    const [quote, setQuote] = useState({});
    const { quoteId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        gameService.getOne(quoteId).then((res) => {
            setQuote(res);
        });
    }, [quoteId]);

    const textHandler = (e) => {
        setQuote({
            ...quote,
            text: e.target.value,
        });
    };

    const authorHandler = (e) => {
        setQuote({
            ...quote,
            author: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        gameService.editQuote(quoteId, quote);
        navigate(`/catalog/${quote._id}`);
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
                        value={quote.text}
                        name="quote"
                    />
                </div>

                <div className={styles["edit-author-container"]}>
                    <i className={styles["username-icon"]}>{astrounat}</i>
                    <input
                        type="author"
                        id="author"
                        onChange={authorHandler}
                        value={quote.author}
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
