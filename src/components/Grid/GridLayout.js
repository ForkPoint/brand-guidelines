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
  cartoonLogo
} from "../../assets";

const GridLayout = ({}) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.container}>
        <div className={styles.cardVertical}>
          <div className={styles.leftVertical}>
            <img src={draw5}></img>
            <h1>All sorts of content. All to help you grow.</h1>
          </div>
          <div className={styles.rightVertical}>
          <h1>Choose to do it your way!</h1>
            <img src={cartoonLogo}></img>
          </div>
        </div>
        <div className={styles.cardHorizontal}>
          <div className={styles.topHorizontal}>
            <img src={forkpointCard}></img>
          </div>
          <div className={styles.bottomHorizontal}>
            <img src={cover1}></img>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.cardGridPrimary}>
          <div className={styles.block}>
            <img src={drawPrimary}></img>
          </div>
          <div className={styles.block1}>
            <h3>We build teams to cover your needs!</h3>
               <p>Ensuring
               prompt delivery and project dedication.</p>
          </div>
          <div className={styles.block2}>
          <img src={draw4}></img>
          </div>
          <div className={styles.block3}>
            <img src={cover2}></img>
          </div>
        </div>
        <div className={styles.cardGridSecondary}>
          <div className={styles.block}>
            <h1>BE FOCUSED, SMART, AND PROGRESSIVE</h1>
            <p>Find the perfect solution for you</p>
          </div>
          <div className={styles.block1}></div>
          <div className={styles.block4}>
            <img src={drawSecondary}></img>
          </div>
          <div className={styles.block4}>
            <img src={cover3}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
