import React from "react";
import styles from "./SecondaryColorCard.module.css";

const SecondaryColorCard = ({}) => {
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
              <strong>RGB:</strong> 17 161 224
            </p>
            <p>
              <strong>CMYK:</strong> 92 28 0 12
            </p>
            <p>
              <strong>HEX:</strong> 11a1e0
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
              <strong>RGB:</strong> 255 255 255
            </p>
            <p>
              <strong>CMYK:</strong> 0 0 0 0
            </p>
            <p>
              <strong>HEX:</strong> ffffff
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryColorCard;
