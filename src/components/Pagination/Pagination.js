import styles from "./Pagination.module.css";

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
      <nav className={styles['pagination-container']}>
        <ul className={styles["pagination"]}>
            {pageNumbers.map((page, index) => (
                <li onClick={() =>setCurrentPage(page) } key={index} className={styles["page-item"]}>
                    <button  className={styles["page-link"]}>
                        {page}
                    </button>
                </li>
            ))}
        </ul>

      </nav>
    );
}

export default Pagination;