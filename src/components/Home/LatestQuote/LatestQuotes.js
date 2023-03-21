import styles from './LatestQuotes.module.css'
import { Link } from 'react-router-dom';





const LatestQuotes = ({quote}) => {
    return (
       

            <div className={styles["quote-card"]}>
            <p className={styles["quote-text"]}>
               {quote.text}
            </p>
            
            <div className={styles["quote-bottom-wrapper"]}>
            <span className={styles["quote-author"]}>- {quote.author}</span>
            <Link className={styles["quote-details-link"]} to={`/catalog/${quote._id}`} >
            
                Details
            </Link>
            </div>
          
        </div>
        
    );

}

export default LatestQuotes;