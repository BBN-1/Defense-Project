import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import * as quoteService from "../../services/quoteService";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";
import Modal from "../Modal/Modal";

const Search = () => {
    const [search, setSearch] = useState("");
    const [allQuotes, setAllQuotes] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchResultsLoading, setSearchResultsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     (async () => {
    //         const res = await quoteService.getAll();
    //         setAllQuotes(res);
    //     })();
    // }, []);

    console.log(allQuotes);

    const isOpenHandler = async () => {

        setIsOpen(true);
        const res = await quoteService.getAll();
        setAllQuotes(res);

    };

    const onCloseEvents = () => {
        setIsOpen(false);
        setSearch("");
        setSearchResults([]);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);

        setSearchResults(
            allQuotes.filter((quote) => {
                return quote.author
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()) && e.target.value.toLowerCase().length >= 1;
            })
        );
    };
    

    return (
        <>
            <button onClick={isOpenHandler}>Search</button>

            <Modal open={isOpen} onClose={onCloseEvents}>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search by author"
                        value={search}
                        onChange={handleSearch}
                    />
                    <div className="search-results">
                        {searchResultsLoading ? (
                            <div className="search-results-loading">
                                <Spinner />
                            </div>
                        ) : (
                            searchResults.map((result) => (
                                <Link key={result._id}
                                    onClick={onCloseEvents}
                                    to={`/author/${result.author}`}
                                    className={styles["search-result-link"]}
                                >
                                    Author - {result.author} - said.. {result.text.slice(0, 20)}
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Search;
