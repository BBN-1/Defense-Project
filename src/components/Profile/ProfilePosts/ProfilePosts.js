import styles from "./ProfilePosts.module.css";
import { useContext } from "react";
import { authContext } from "../../../contexts/authContext";
import { useState, useEffect } from "react";
import * as quoteService from "../../../services/quoteService";
import CatalogItem from "../../Catalog/CatalogItem/CatalogItem";

const ProfilePosts = () => {
    const [allQuotesByAuthor, setAllQuotesByAuthor] = useState([]);
    const { user } = useContext(authContext);

    useEffect(() => {
        (async () => {
            const quotes = await quoteService.getAllQuotesByAuthor(user._id);
            setAllQuotesByAuthor(quotes);
        })();
    }, [user._id]);

    

    return (
        <div className={styles["catalog-contianer"]}>
            <h1 className={styles["catalog-title"]}>Your Quotes, {user.username}!</h1>
            <section className={styles["catalog-cards-container"]}>
                {allQuotesByAuthor.map((quote) => (
                    <CatalogItem key={quote._id} quote={quote} />
                ))}
            </section>
        </div>
    );
};

export default ProfilePosts;
