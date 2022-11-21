import React from "react";
import styles from "./InputShowCase.module.css";

const InputShowCase = ({}) => {
  return (
    <div className={styles.sectionContainer}>
        <div className={styles.showcase}>
            <div className={styles.grid}>
                <div className={styles.col}>
                    <input className={styles.input} placeholder="Field without label"/>
                </div>
                <div className={styles.col}>
                    <input className={styles.input} placeholder="Disabled field"/>
                </div>
                <div className={styles.col}>
                    <input className={styles.input} placeholder="Optional placeholder text"/>
                </div>
            </div>
            <div className={styles.grid}>
                <div className={styles.col}>
                    <input className={styles.input} placeholder="Type number"/>
                </div>
                <div className={styles.col}>
                    <input className={styles.input} type="text" placeholder="Field without label"/>
                </div>
                <div className={styles.col}>
                    <input className={styles.input} placeholder="Field without label"/>
                </div>
            </div>
            <div className={styles.grid}>
                <div className={styles.col}>
                    <input className={styles.input} placeholder="Type number"/>
                </div>
                <div className={styles.col}>
                    <textarea className={styles.input} type="text" placeholder="Field without label"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default InputShowCase;
