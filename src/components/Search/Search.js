import { useState } from "react";
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

    const isOpenHandler = async () => {
        setIsOpen(true);
        const res = await quoteService.getAll();
        setAllQuotes(res);
    };

    const onCloseOrClickOutside = () => {
        setIsOpen(false);
        setSearch("");
        setSearchResults([]);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);

        setSearchResults(
            allQuotes.filter(
                (quote) =>
                    quote.author
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) &&
                    e.target.value.toLowerCase().length >= 1
            )
        );
    };

    return (
        <>
            <button className={styles['header-searchBtn']} onClick={isOpenHandler}>Search</button>

            <Modal
                open={isOpen}
                onClose={onCloseOrClickOutside}
                outerLayerClick={onCloseOrClickOutside}
            >
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
                                <Link
                                    key={result._id}
                                    onClick={onCloseOrClickOutside}
                                    to={`/author/${result.author}`}
                                    className={styles["search-result-link"]}
                                >
                                    Author - {result.author} - said..{" "}
                                    {result.text.slice(0, 20)}
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
