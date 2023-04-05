import styles from "./Home.module.css";

import CatalogItem from "../Catalog/CatalogItem/CatalogItem";


import * as quoteService from "../../services/quoteService";
import { useEffect, useState } from "react";


const Home = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        quoteService.getLastThree().then( res => {
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