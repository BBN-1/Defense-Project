import styles from "./ProfilePosts.module.css";
import { useContext } from "react";
import { authContext } from "../../../contexts/authContext";
import { useState, useEffect } from "react";
import * as quoteService from "../../../services/quoteService";
import CatalogItem from "../../Catalog/CatalogItem/CatalogItem";
import Spinner from "../../Spinner/Spinner";

const ProfilePosts = () => {
    const [allQuotesByAuthor, setAllQuotesByAuthor] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(authContext);

    useEffect(() => {
        (async () => {
            const quotes = await quoteService.getAllQuotesByAuthor(user._id);
            setAllQuotesByAuthor(quotes);
            setIsLoading(false);
        })();
    }, [user._id]);

    return (
        <div className={styles["catalog-container"]}>
            <h1 className={styles["catalog-title"]}>
                Your Quotes, {user.username || 'Default User'}!
            </h1>
            <section className={styles["catalog-cards-container"]}>
                {(isLoading && <Spinner />) ||
                    (allQuotesByAuthor.length > 0 &&
                        allQuotesByAuthor.map((quote) => (
                            <CatalogItem key={quote._id} quote={quote} />
                        ))) || (
                        <p className={styles["no-quotes"]}>
                            You have no quotes yet!
                        </p>
                    )}
            </section>
        </div>
    );
};

export default ProfilePosts;
