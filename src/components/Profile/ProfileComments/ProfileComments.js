import styles from "./ProfileComments.module.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { authContext } from "../../../contexts/authContext";
import * as commentService from "../../../services/commentService";
import CommentItem from "./CommentItem/CommentItem";
import Spinner from "../../Spinner/Spinner";

const ProfileComments = () => {
    const [allCommentsByUser, setAllCommentsByUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(authContext);

    useEffect(() => {
        (async () => {
            const quotes = await commentService.getAllCommentsByUser(user._id);
            setAllCommentsByUser(quotes);
            setIsLoading(false);
        })();
    }, [user._id]);

    

    return (
        <div className={styles["catalog-container"]}>
            <h1 className={styles["catalog-title"]}>
                Your Comments, {user.username || 'Default User'}!
            </h1>
            <section className={styles["catalog-cards-container"]}>
                {(isLoading && <Spinner />) ||
                    (allCommentsByUser.length > 0 &&
                        allCommentsByUser.map((comment) => (
                            <CommentItem
                                key={comment._id}
                                comment={comment}
                                user={user}
                            />
                        ))) || (
                        <p className={styles["no-comments"]}>
                            You have no comments yet!
                        </p>
                    )}
            </section>
        </div>
    );
};

export default ProfileComments;
