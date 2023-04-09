import styles from "./CommentItem.module.css";
import { Link } from "react-router-dom";
import * as quoteService from "../../../../services/quoteService";
import { useEffect, useState } from "react";

const CommentItem = ({ comment }) => {
    const [quote, setQuote] = useState({});

    useEffect(() => {
        (async () => {
            const res = await quoteService.getOne(comment.quoteId);
            setQuote(res);
        })();
    }, [comment.quoteId]);

    console.log(quote);

    return (
        <div className={styles["quote-card"]}>
            <p className={styles["quote-text"]}>“{comment.text}”</p>
            <p className={styles["commentedOn-text"]}>commented on -</p>
            <Link
                className={styles["comment-link"]}
                to={`/catalog/${quote._id}`}
            >
                {`${quote.text?.substring(0, 22)} ...`}
            </Link>
        </div>
    );
};

export default CommentItem;
