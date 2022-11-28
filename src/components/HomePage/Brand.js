import React from "react";
import styles from "./Brand.module.css";
import { homePageHero, css, pencilArt, webArt, penArt, logoArt } from "../../assets";

const Brand = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.heroesLayout}>
        <div className={styles.blob}>
        </div>
        <div className={styles.content}>
          <p>It all starts here. Use this guide as a high-level overview
            of how the ForkPoint brand comes to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
