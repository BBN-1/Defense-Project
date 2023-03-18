import styles from "./Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShuffle } from "@fortawesome/free-solid-svg-icons";
import LatestQuote from "./LatestQuote/LatestQuote";

import * as gameService from "../../services/gameService";
import { useEffect, useState } from "react";


const Home = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        gameService.getLastThree().then((res) => {
            setQuotes(res);
        });
    }, []);

    console.log(quotes);

    return (
        <div className={styles["catalog-contianer"]}>
            <h1 className={styles["catalog-title"]}>
                Latest Motivations
            </h1>
            <section className={styles["catalog-cards-container"]}>
                { quotes.map(quote => <LatestQuote key={quote._id }quote={quote}/>)}

        
            </section>
        </div>
    );
};

export default Home;
