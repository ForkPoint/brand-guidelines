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
  topLeftAlign,
  topRightAlign,
  centerAlign,
  bottomLeftAlign,
  bottomRightAlign,
  layoutStructure
} from "../../assets";

const GridLayout = ({}) => {
  return (
    <div className={styles.sectionContainer}>
        <h2>Spacing</h2>
      <div className={styles.layout}>
        <div>
          <img src={topLeftAlign}></img>
          <p>Top Left Padding</p>
        </div>
        <div>
          <img src={topRightAlign}></img>
          <p>Top Right Padding</p>
        </div>
        <div>
          <img src={centerAlign}></img>
          <p>Heading and Paragraph spacing</p>
        </div>
        <div>
          <img src={bottomLeftAlign}></img>
          <p>Bottom Left Padding</p>
        </div>
        <div>
          <img src={bottomRightAlign}></img>
          <p>Bottom Right Padding</p>
        </div>
      </div>
      <h2>Structure</h2>
      <div className={styles.layoutStructure}>
        <img src={layoutStructure}></img>
      </div>
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
