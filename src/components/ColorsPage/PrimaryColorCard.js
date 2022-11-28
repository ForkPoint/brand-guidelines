import React from "react";
import styles from "./PrimaryColorCard.module.css";

const PrimaryColorCard = ({}) => {
  return (
    <div className={styles.colorsSection}>
      <div className={styles.grid}>
        <div className={styles.boxPrimary}>
          <div className={styles.a}>
            <div className={styles.b}>
            <div className={styles.c}></div>
            </div>
          </div>
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
        </div>
        <div className={styles.boxSecondary}>
        <div className={styles.a}>
            <div className={styles.b}>
              <div className={styles.c}></div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default PrimaryColorCard;
