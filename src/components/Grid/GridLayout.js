import React from "react";
import styles from "./GridLayout.module.css";
import {
  forkpointCard,
  forkpointFlags,
  logoSVG,
  cover1,
  cover2,
  cover3,
  cover4,
  drawPrimary,
  drawSecondary,
  draw3,
  draw4,
  draw5,
  draw6,
  location,
  salesforceCover,
  cartoonCover,
  grandpaForkpoint,
  cartoonLogo,
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
} from "../../assets";

const GridLayout = ({}) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.grid}>
        <div className={styles.card1}>
            <img src={hero2}></img>
        </div>
        <div className={styles.card1}>
        <img src={hero3}></img>
        </div>
        <div className={styles.card1}>
        <img src={hero4}></img>
        </div>
        <div className={styles.card1}>
        <img src={hero5}></img>
        </div>
        <div className={styles.card1}>
        <img src={hero6}></img>
        </div>
        <div className={styles.card1}>
        <img src={hero2}></img>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
