import styles from "./Catalog.module.css";
import CatalogItem from "./CatalogItem/CatalogItem";

import * as quoteService from '../../services/quoteService'
import { useEffect, useState } from "react";

const Catalog = () => {

    const [allQuotes, setAllQuotes] = useState([]);

    useEffect(() => {
        quoteService.getAll().then( res => {
            setAllQuotes(res);
        })
    },[])

    



    return (
        <div className={styles["catalog-contianer"]}> 
        <h1 className={styles["catalog-title"]} >All Quotes</h1>
        <section className={styles["catalog-cards-container"]}>
        
        {allQuotes.map(quote => <CatalogItem  key={quote._id} quote={quote} />)}

  
        </section>
        </div>
    );
};

export default Catalog;
