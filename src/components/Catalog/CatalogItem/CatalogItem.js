import styles from './CatalogItem.module.css'

const CatalogItem = () => {
    return (

        <div className={styles["quote-card"]}>
        <p className={styles["quote-text"]}>
            “Two things are infinite: the universe and human stupidity;
            and I'm not sure about the universe.” “Two things are
            infinite: the universe and human stupidity; and I'm not sure
            about the universe.” “Two things are infinite: the universe
            and human stupidity; and I'm not sure about the universe.”
        </p>
        <span className={styles["quote-author"]}>- Albert Einstein</span>

        <a className={styles["quote-details-link"]} href="">
            Details
        </a>
    </div>
    );
}

export default CatalogItem;
