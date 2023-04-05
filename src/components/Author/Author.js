import styles from './Author.module.css';
import { useParams } from 'react-router-dom';

import * as quoteService from '../../services/quoteService';
import { useEffect, useState } from 'react';
import CatalogItem from '../Catalog/CatalogItem/CatalogItem';

const Author = () => {

    const [authorQuotes, setAuthorQuotes] = useState([]);

    const { authorId } = useParams();
    console.log(authorId);

    useEffect(() => {
        ( async () => {
        const res = await quoteService.getByAuthorName(authorId);
        setAuthorQuotes(res);
        })();
    },[authorId]);



    return (
        <div className={styles["catalog-contianer"]}> 
        <h1 className={styles["catalog-title"]}>{`All Motivations from ${authorId} `}</h1>
        <section className={styles["catalog-cards-container"]}>
        
        {authorQuotes.map(quote => <CatalogItem  key={quote._id} quote={quote} />)}

  
        </section>
        </div>
    );
}

export default Author;