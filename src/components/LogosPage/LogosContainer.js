import React from "react";
import styles from "./LogosContainer.module.css";
import { fullNegativeLogo, fullPositiveLogo, MonoNegativeLogo, MonoPositiveLogo } from "../../assets";

const LogosContainer = ({}) => {
  return (
    <div className={styles.logosSection}>
      <div className={styles.row}>
        <div className={styles.col}>
          <p>Full color positive version</p>
          <img src={fullNegativeLogo} width="350" height="150"/>
        </div>
        <div className={styles.col}>
          <p>Full color negative version</p>
          <img src={fullPositiveLogo} width="350" height="150" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <p>Mono color positive version</p>
          <img src={MonoNegativeLogo} width="350" height="150" />
        </div>
        <div className={styles.col}>
          <p>Mono color negative version</p>
          <img src={MonoPositiveLogo} width="350" height="150" />
        </div>
      </div>
    </div>
  );
};

export default LogosContainer;
