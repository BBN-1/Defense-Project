import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <>
            <h1 className={styles["neon"]}>
                GO
                <span className={styles["flicker-slow"]}>
                    T <br />
                </span>
                L<span className={styles["flicker-fast"]}>O</span>ST <span className={styles["flicker-middle"]}>?</span>
            </h1>
        </>
    );
};

export default NotFound;
