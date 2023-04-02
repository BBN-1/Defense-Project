import styles from "./Create.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import * as quoteService from "../../services/quoteService";
import { useNavigate } from "react-router-dom";

const pencil = <FontAwesomeIcon icon={faPencil} />;
const astrounat = <FontAwesomeIcon icon={faUserAstronaut} />;

const Create = () => {
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState({
        text: "",
        author: "",
    });

    const navigate = useNavigate();

    const textHandler = (e) => {
        setText(e.target.value);
    };

    const authorHandler = (e) => {
        setAuthor(e.target.value);
    };

    const validateText = (e) => {
        const text = e.target.value;
        let errorMsg = "";

        if (text.trim().length < 5) {
            errorMsg = "msg must be longer than 5 symbols";
        } else if (text.trim().length > 15)
            errorMsg = "msg must be shorter than 10 symbols";

        setError((state) => ({
            ...state,
            text: errorMsg,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        quoteService.createQuote({ text, author });
        navigate("/");

        console.log(text + " " + author);
    };

    return (
        <section className={styles["create-form-container"]}>
            <div className={styles["create-cta-container"]}>
                <h2 className={styles["create-cta-title"]}>MOTIVATE OTHERS</h2>
                <p className={styles["create-cta-para"]}>
                    There is no joy in possession without sharing.
                </p>
            </div>

            <form onSubmit={onSubmit} className={styles["create-form"]}>
                <div className={styles["create-quote-container"]}>
                    <i className={styles["text-icon"]}>{pencil}</i>
                    <textarea
                        className={styles["quote-input"]}
                        type="text"
                        id="text"
                        onBlur={validateText}
                        onChange={textHandler}
                        value={text}
                        name="quote"
                        placeholder="Quote text"
                    />
                </div>

                <div className={styles["create-author-container"]}>
                    <i className={styles["author-icon"]}>{astrounat}</i>
                    <input
                        type="author"
                        id="author"
                        onChange={authorHandler}
                        value={author}
                        placeholder="Quote author"
                        name="author"
                    />
                </div>
                {error && <p> {error.text}</p>}

                <button type="submit" className={styles["create-btn"]}>
                    CREATE!
                </button>
            </form>
        </section>
    );
};

export default Create;
