import React from "react";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";



const Modal = ({ open, children, onClose }) => {
    if (!open) return null;

    return ReactDom.createPortal(
        <>
        
            <div className={styles["modal-container-overlay"]} />
            <div className={styles["modal-container"]}>
            {children}
                <button onClick={onClose}>close</button>
            </div>
        </>,
        document.getElementById("portal")

    )

}

export default Modal;