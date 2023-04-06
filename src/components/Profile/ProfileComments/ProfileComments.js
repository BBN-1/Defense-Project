import styles from "./ProfileComments.module.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { authContext } from "../../../contexts/authContext";
import * as commentService from "../../../services/commentService";
import CommentItem from "./CommentItem/CommentItem";

const ProfileComments = () => {

    const [allCommentsByUser, setAllCommentsByUser] = useState([]);
    const { user } = useContext(authContext);

    useEffect(() => {
        (async () => {
            const quotes = await commentService.getAllCommentsByUser(user._id);
            setAllCommentsByUser(quotes);
        })();
    }, [user._id]);

    console.log(allCommentsByUser);


    
    return (
        <div className={styles["catalog-contianer"]}>
        <h1 className={styles["catalog-title"]}>Your Comments, {user.username}!</h1>
        <section className={styles["catalog-cards-container"]}>
            {allCommentsByUser.map((comment) => (
                <CommentItem key={comment._id} comment={comment} user={user} />
            ))}
        </section>
    </div>
    )
}

export default ProfileComments