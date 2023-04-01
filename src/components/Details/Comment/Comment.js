import styles from "./Comment.module.css";
import * as commentService from "../../../services/commentService";
import { deleteComment } from "../../../services/commentService";
import { useContext } from "react";
import { authContext } from "../../../contexts/authContext";
import { useParams } from "react-router-dom";

const Comment = (props) => {
    const commentsArray = props.comments;
    const hideMyUsername = "Anonymous";
    const defaultUsers = "Default User";
    const { quoteId } = useParams();
    const { user } = useContext(authContext);

    const onDelete = (commentId) => {
        return async () => {
            await deleteComment(commentId);
            const commentsForQuote = await commentService.getByGameId(quoteId);
            props.setComments([...commentsForQuote]);
        };
    };

    return (
        <ul className={styles["details-comments-container-single-comment"]}>
            {commentsArray.length > 0 ? (
                commentsArray?.map((comment) => {
                    return (
                        <li key={comment._id}>
                            {comment.hide ? (
                                <p>{hideMyUsername}</p>
                            ) : (
                                <p>{comment.user.username || defaultUsers}</p>
                            )}

                            <p>{comment.text}</p>
                            {comment._ownerId === user._id && (
                                <button onClick={onDelete(comment._id)}>
                                    delete
                                </button>
                            )}
                        </li>
                    );
                })
            ) : (
                <p>No comments yet</p>
            )}
        </ul>
    );
};

export default Comment;
