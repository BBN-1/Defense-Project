import styles from "./Home.module.css";

import CatalogItem from "../Catalog/CatalogItem/CatalogItem";
// import LatestQuote from "./LatestQuote/LatestQuotes";

import * as gameService from "../../services/gameService";
import { useEffect, useState } from "react";


const Home = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        gameService.getLastThree().then( res => {
            setQuotes(res);
        });
    }, []);

 


    return (
        <div className={styles["home-contianer"]}>
            <h1 className={styles["home-title"]}>
                Latest Motivations
            </h1>
            <section className={styles["home-cards-container"]}>
                { quotes.map(quote => <CatalogItem key={quote._id } quote={quote}/>)}

        
            </section>
        </div>
    );
};

export default Home;