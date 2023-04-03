import styles from "./Comment.module.css";
import * as commentService from "../../../services/commentService";

import { useContext } from "react";
import { authContext } from "../../../contexts/authContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../../Modal/Modal";
import { useState } from "react";

const Comment = (props) => {
    const { quoteId } = useParams();
    const { user } = useContext(authContext);
    const [isOpen, setIsOpen] = useState(false);

    const commentsArray = props.comments;

    const hideMyUsername = "Anonymous";
    const defaultUsers = "Default User";

    const onDelete = async () => {
        setIsOpen(true);
    };

   

    const onConfirmDelete = (commentId) => {
        return async () => {
            await commentService.deleteComment(commentId);
            const commentsForQuote = await commentService.getByQuoteId(quoteId);
            setIsOpen(false);
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
                                <div>
                                    <button onClick={onDelete}>
                                        delete
                                    </button>

                                    <Modal
                                        open={isOpen}
                                        onClose={() => setIsOpen(false)}
                                    >
                                        <p>
                                            Are you sure you want to delete this
                                            comment?
                                        </p>
                                        <button onClick={onConfirmDelete(comment._id)}>
                                            Yes
                                        </button>
                                    </Modal>

                                    <Link to={`/comment/edit/${comment._id}`}>
                                        Edit
                                    </Link>
                                </div>
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
