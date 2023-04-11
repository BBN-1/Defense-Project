import styles from "./CommentItem.module.css";
import { Link } from "react-router-dom";
import * as quoteService from "../../../../services/quoteService";
import { useEffect, useState } from "react";

const CommentItem = ({ comment }) => {
    const [quote, setQuote] = useState({});

    console.log(comment);

    useEffect(() => {
        (async () => {
            const res = await quoteService.getOne(comment.quoteId);

            setQuote(res);
        })();
    }, []);

    const quotePage = `/catalog/${comment.quoteId}`;

   

    return (
        <div className={styles["quote-card"]}>
            <p className={styles["quote-text"]}>“{comment.text}”</p>
            <p className={styles["commentedOn-text"]}>commented on quote -</p>
            <Link className={styles["comment-link"]} to={quotePage}>
                {`${quote?.text?.substring(0, 33) || "Quote was removed"}  ...`}
            </Link>
        </div>
    );
};

export default CommentItem;
