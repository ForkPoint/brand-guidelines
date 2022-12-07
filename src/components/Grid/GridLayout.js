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
  gridLayout1,
  gridLayout2,
  gridLayout3,
  gridLayout4,
} from "../../assets";


const GridLayout = ({}) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.grid}>
        <div className={styles.card1}>
            <img src={gridLayout1}></img>
        </div>
        <div className={styles.card1}>
        <img src={gridLayout2}></img>
        </div>
        <div className={styles.card1}>
        <img src={gridLayout3}></img>
        </div>
        <div className={styles.card1}>
        <img src={gridLayout4}></img>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
