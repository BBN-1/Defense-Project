import styles from "./Details.module.css";
import Comment from "./Comment/Comment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRadiation } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import * as quoteService from "../../services/quoteService";
import { useEffect, useState } from "react";
import * as commentService from "../../services/commentService";

const pencil = <FontAwesomeIcon icon={faPencil} />;
const danger = <FontAwesomeIcon icon={faRadiation} />;

const Details = () => {
    const [quote, setQuote] = useState({});
    const { quoteId } = useParams();

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [anonymous, setAnonymous] = useState(false);

    useEffect(() => {
        (async () => {
            const quote = await quoteService.getOne(quoteId);
            setQuote(quote);

            const commentsForQuote = await commentService.getByQuoteId(quoteId);
            setComments(commentsForQuote);
        })();
    }, [quoteId]);

    const commentHandler = (e) => {
        setComment(e.target.value);
    };

    const anonymousHandler = (e) => {
        console.log(e.target.checked);
        setAnonymous(e.target.checked);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await commentService.create(quoteId, comment, anonymous);

        setComment("");
        const commentsForQuote = await commentService.getByQuoteId(quoteId);
        setComments([...commentsForQuote]);
    };

    const enterKey = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            onSubmit(e);
        }
    };

    return (
        <div className={styles["quote-container"]}>
            <div className={styles["text-container"]}>
                <p className={styles["quote-text"]}>“{quote.text}”</p>
                <span className={styles["quote-author"]}>-{quote.author}</span>
            </div>

            <div className={styles["details-buttons-container"]}>
                <Link to={`/quote/edit/${quote._id}`}>
                    <i className={styles.icon}>{pencil}</i>
                    Edit
                </Link>
                <button>
                    <i className={styles.icon}>{danger}</i>
                    Delete!
                </button>
            </div>

            <div className={styles["details-comment-form-container"]}>
                <form
                    onSubmit={onSubmit}
                    onKeyDown={enterKey}
                    className={styles["comment-form"]}
                >
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
                        onChange={commentHandler}
                        value={comment}
                        placeholder="“People ask you for criticism, but they only want praise.”"
                    ></textarea>
                    <div className={styles["anonymous-container"]}>
                        <fieldset>
                            <div>
                                <input
                                    type="checkbox"
                                    id="anonymous"
                                    name="anonymous"
                                    unchecked="true"
                                    value={anonymous}
                                    onChange={anonymousHandler}
                                />
                                <label htmlFor="scales">Hide username!</label>
                            </div>
                        </fieldset>
                    </div>
                    <button type="submit" className={styles["comment-btn"]}>
                        Send comment!
                    </button>
                </form>
            </div>

            <div className={styles["details-comments-container"]}>
                <div
                    className={
                        styles["details-comments-container-inside-wrapper"]
                    }
                >
                    <h1 className={styles["comments-wrapper-title"]}>
                        COMMENTS by MEMBERS
                    </h1>
                    <Comment comments={comments} setComments={setComments} owner={quote._ownerId} />
                </div>
            </div>
        </div>
    );
};

export default Details;
