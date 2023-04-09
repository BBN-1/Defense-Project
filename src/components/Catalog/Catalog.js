import styles from "./Catalog.module.css";
import CatalogItem from "./CatalogItem/CatalogItem";
import Spinner from "../Spinner/Spinner";

import * as quoteService from "../../services/quoteService";
import { useEffect, useState } from "react";

const Catalog = () => {
    const [allQuotes, setAllQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        quoteService.getAll().then((res) => {
            setAllQuotes(res);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className={styles["catalog-contianer"]}>
            <h1 className={styles["catalog-title"]}>All Quotes</h1>
            <section className={styles["catalog-cards-container"]}>
                {(isLoading && <Spinner />) ||
                    (allQuotes.length > 0 &&
                        allQuotes.map((quote) => (
                            <CatalogItem key={quote._id} quote={quote} />
                        ))) || (
                        <p className={styles["no-quotes"]}>No quotes yet!</p>
                    )}
            </section>
        </div>
    );
};

export default Catalog;
