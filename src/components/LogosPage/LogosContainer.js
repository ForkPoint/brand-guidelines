import React from "react";
import styles from "./LogosContainer.module.css";
import { fullNegativeLogo, fullPositiveLogo, MonoNegativeLogo, MonoPositiveLogo, constructionLogo } from "../../assets";

const LogosContainer = ({}) => {
  return (
    <div className={styles.logosSection}>
      <div className={styles.row}>
        <div className={styles.col}>
          <p>Full color positive version</p>
          <img src={fullNegativeLogo} width="auto" height="150"/>
        </div>
        <div className={styles.col}>
          <p>Full color negative version</p>
          <img src={fullPositiveLogo} width="auto" height="150" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <p>Mono color positive version</p>
          <img src={MonoNegativeLogo} width="auto" height="150" />
        </div>
        <div className={styles.col}>
          <p>Mono color negative version</p>
          <img src={MonoPositiveLogo} width="auto" height="150" />
        </div>
      </div>
      {/* <div className={styles.constructionLogo}>
        <h1>Logotype Construction</h1>
        <img src={constructionLogo} width="100%" height="350" ></img>
      </div> */}
    </div>
  );
};

export default LogosContainer;
