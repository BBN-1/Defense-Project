import styles from "./Catalog.module.css";
import CatalogItem from "./CatalogItem/CatalogItem";
import Spinner from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";

import * as quoteService from "../../services/quoteService";
import { useEffect, useState } from "react";

const Catalog = () => {
    const [allQuotes, setAllQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [quotesPerPage, setQuotesPerPage] = useState(3);

    useEffect(() => {
        quoteService.getAll().then((res) => {
            setAllQuotes(res.reverse());
            setIsLoading(false);
        });
    }, []);

    // pagination needed values

    const indexOfLastQuote = currentPage * quotesPerPage;
    const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
    const currentQuotes = allQuotes.slice(indexOfFirstQuote, indexOfLastQuote);


    return (
        <>
            <div className={styles["catalog-contianer"]}>
                <h1 className={styles["catalog-title"]}>All Quotes</h1>

                <section data-cy="quote-list" className={styles["catalog-cards-container"]}>
                    {(isLoading && <Spinner />) ||
                        (allQuotes.length > 0 &&
                            currentQuotes.map((quote) => (
                                <CatalogItem key={quote._id} quote={quote} />
                            ))) || (
                            <p className={styles["no-quotes"]}>
                                No quotes yet!
                            </p>
                        )}
                </section>
                <Pagination totalPosts={allQuotes.length} postsPerPage={quotesPerPage} setCurrentPage={setCurrentPage}/>

                
            </div>
        </>
    );
};

export default Catalog;


