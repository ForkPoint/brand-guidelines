import React from "react";
import styles from "./PrimaryColorCard.module.css";

const PrimaryColorCard = ({}) => {
  return (
    <div className={styles.colorsSection}>
      <div className={styles.grid}>
        <div className={styles.boxPrimary}>
          <div className={styles.main}>
            <p>
              <strong>RGB:</strong> 138 207 490
            </p>
            <p>
              <strong>CMYK:</strong> 60 0 100 0
            </p>
            <p>
              <strong>HEX:</strong> 8acf31
            </p>
          </div>
          <div className={styles.light}>
            <span>90%</span>
          </div>
          <div className={styles.high}>
            <span>80%</span>
          </div>
          <div className={styles.medium}>
            <span>70%</span>
          </div>
          <div className={styles.low}>
            <span>60%</span>
          </div>
          <div className={styles.lower}>
            <span>50%</span>
          </div>
        </div>
        <div className={styles.boxSecondary}>
          <div className={styles.main}>
            <p>
              <strong>RGB:</strong> 87 87 87
            </p>
            <p>
              <strong>CMYK:</strong> 0 0 0 80
            </p>
            <p>
              <strong>HEX:</strong> 575757
            </p>
          </div>
          <div className={styles.light}>
            <span>90%</span>
          </div>
          <div className={styles.high}>
            <span>80%</span>
          </div>
          <div className={styles.medium}>
            <span>70%</span>
          </div>
          <div className={styles.low}>
            <span>60%</span>
          </div>
          <div className={styles.lower}>
            <span>50%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryColorCard;
