import styles from './LatestQuote.module.css'





const LatestQuote = ({quote}) => {
    return (
       

            <div className={styles["quote-card"]}>
            <p className={styles["quote-text"]}>
               {quote.text}
            </p>
            
            <div className={styles["quote-bottom-wrapper"]}>
            <span className={styles["quote-author"]}>- {quote.author}</span>
            <a className={styles["quote-details-link"]} href="">
            
                Details
            </a>
            </div>
          
        </div>
        
    );

}

export default LatestQuote;