import React from "react";
import styles from "./SecondaryColorCard.module.css";

const SecondaryColorCard = ({}) => {
  return (
    <div className={styles.colorsSection}>
      <div className={styles.grid}>
        <div className={styles.boxPrimary}>
          <div className={styles.main}>
            <p>
              <strong>RGB:</strong> 0 0 0
            </p>
            <p>
              <strong>CMYK:</strong> 0 0 0 100
            </p>
            <p>
              <strong>HEX:</strong> 000000
            </p>
            <p>
              <strong>PANTONE:</strong> Black 6 C
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
