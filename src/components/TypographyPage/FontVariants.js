import React from "react";
import styles from "./FontVariants.module.css";

const FontVariants = ({}) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.row}>
        <div className={styles.variant}>
          <div className={styles.light}>
            <p>
              abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              !@#$%^&*()
            </p>
          </div>
          <h3>Open Sans Light</h3>
        </div>
        <div className={styles.variant}>
          <div className={styles.regular}>
            <span>
              abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              !@#$%^&*()
            </span>
          </div>
          <h3>Open Sans Regular</h3>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.variant}>
          <div className={styles.semibold}>
            <span>
              abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              !@#$%^&*()
            </span>
          </div>
          <h3>Open Sans Semibold</h3>
        </div>
        <div className={styles.variant}>
          <div className={styles.bold}>
            <span>
              abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              !@#$%^&*()
            </span>
          </div>
          <h3>Open Sans Bold</h3>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.variant}>
          <div className={styles.extrabold}>
            <span>
              abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              !@#$%^&*()
            </span>
          </div>
          <h3>Open Sans Extrabold</h3>
        </div>
      </div>
    </div>
  );
};

export default FontVariants;
