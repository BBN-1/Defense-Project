import styles from "./Home.module.css";
import RandomQuote from "./RandomQuote/RandomQuote";
import Spinner from "../Spinner/Spinner";
import html2canvas from "html2canvas";

import * as quoteService from "../../services/quoteService";
import { useEffect, useState, useRef } from "react";

const Home = () => {
    const [randomQuote, setRandomQuote] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const printRef = useRef();

    useEffect(() => {
        quoteService.getRandomeQuote().then((res) => {
            setRandomQuote(res);
            setIsLoading(false);
        });
    }, []);



    const OnRandomClick = () => {
        quoteService.getRandomeQuote().then((res) => {
            setRandomQuote(res);
        });
    };

    const onSaveHandler = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);

        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement("a");

        if (typeof link.download === "string") {
            link.href = imgData;
            link.download = "quote.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(imgData);
        }
    };

    return (
        <div ref={printRef} className={styles["home-container"]}>
            <section className={styles["home-card-container"]}>
                {(isLoading && <Spinner />) ||
                    (randomQuote.text && (
                        <RandomQuote
                            quote={randomQuote}
                            setRandomQuote={OnRandomClick}
                            onSaveHandler={onSaveHandler}
                        />
                    )) || (
                        <p className={styles["no-quotes"]}>
                            Not a single quote has been posted!
                        </p>
                    )}
            </section>
        </div>
    );
};

export default Home;
