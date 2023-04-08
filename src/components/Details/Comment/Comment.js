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

    const onCloseOrClickOutside = () => {
        setIsOpen(false);
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
        <ul
            role="list"
            className={styles["details-comments-container-single-comment"]}
        >
            {commentsArray.length > 0 ? (
                commentsArray?.map((comment) => {
                    return (
                        <li
                            className={
                                styles["details-comments-single-comment"]
                            }
                            key={comment._id}
                        >
                              <p className={styles["single-comment-text"]}>
                                {comment.text}
                            </p>
                            {comment.hide ? (
                                <p
                                    className={
                                        styles["single-comment-authorHidden"]
                                    }
                                >
                                   by - {hideMyUsername}
                                </p>
                            ) : (
                                <p className={styles["single-comment-author"]}>
                                   by - {comment.user.username || defaultUsers}
                                </p>
                            )}

                          

                            {comment._ownerId === user._id && (
                                <div
                                    className={
                                        styles["details-comments-btn-container"]
                                    }
                                >
                                    <button
                                        className={
                                            styles[
                                                "details-comments-container-deleteBtn"
                                            ]
                                        }
                                        onClick={onDelete}
                                    >
                                        delete
                                    </button>

                                    <Modal
                                        open={isOpen}
                                        onClose={() => setIsOpen(false)}
                                        outerLayerClick={onCloseOrClickOutside}
                                    >
                                        <p>
                                            Are you sure you want to delete this
                                            comment?
                                        </p>
                                        <button
                                            onClick={onConfirmDelete(
                                                comment._id
                                            )}
                                        >
                                            Yes
                                        </button>
                                    </Modal>

                                    <Link
                                        className={
                                            styles[
                                                "details-comments-container-editLink"
                                            ]
                                        }
                                        to={`/comment/edit/${comment._id}`}
                                    >
                                        edit
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
