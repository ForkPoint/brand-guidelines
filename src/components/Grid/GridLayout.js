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
} from "../../assets";

const GridLayout = ({}) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.grid}>
        <div className={styles.card1}>
          <div className={styles.col}>
          <img src={draw5} width="100" height="100"></img>
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Shop Now</button>
          </div>
          <div className={styles.col}></div>
        </div>
        <div className={styles.card2}>
          <div className={styles.row}>
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.row}>
            <button>Shop Now</button>
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.col}></div>
          <div className={styles.col}>
            <img src={cartoonLogo} width="100" height="100"></img>
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.row}></div>
          <div className={styles.row}></div>
        </div>
        <div className={styles.card5}>
          <div className={styles.col1}></div>
          <div className={styles.col2}></div>
          <div className={styles.row}></div>
        </div>
        <div className={styles.card6}>
          <div className={styles.col}></div>
          <div className={styles.col}></div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
