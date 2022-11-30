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
              <strong>RGB:</strong> 88 114 54
            </p>
            <p>
              <strong>CMYK:</strong> 0.23 0 0.53 0.55
            </p>
            <p>
              <strong>HEX:</strong> 587236
            </p>
          </div>
        </div>
        <div className={styles.boxTertiary}>
        <div className={styles.a}>
            <div className={styles.b}>
            <div className={styles.c}></div>
            </div>
          </div>
          <div className={styles.main}>
            <p>
              <strong>RGB:</strong> 253 253 150
            </p>
            <p>
              <strong>CMYK:</strong> 0 0 0.41 0.01
            </p>
            <p>
              <strong>HEX:</strong> FDFD96
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryColorCard;
