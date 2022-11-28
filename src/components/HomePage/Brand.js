import React from "react";
import styles from "./Brand.module.css";
import { penArt } from "../../assets";

const Brand = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.heroesLayout}>
        <div className={styles.blob}></div>
        <div className={styles.content}>
          <h1>Brand Manual</h1>
          <p>It all starts here. Use this guide as a high-level overview
            of how the ForkPoint brand comes to life.
          </p>
          <img src={penArt} width="100%"></img>
        </div>
      </div>
    </div>
  );
};

export default Brand;
