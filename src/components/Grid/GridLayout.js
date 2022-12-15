import React from "react";
import styles from "./GridLayout.module.css";
import {
  gridLayout1,
  gridLayout2,
  gridLayout3,
  gridLayout4,
  squareLayout,
  portraitLayout,
  landscapeLayout,
  structure1,
  structure2,
  structure3,
  structure4,
  structure5,
  structure6,
  gridLayout5,
  gridLayout6,
} from "../../assets";
import Heading from "../Layout/Heading";

const GridLayout = ({}) => {
  return (
    <div className={styles.sectionContainer}>
      <h1>Post Image</h1>
      <div className={styles.layout}>
        <div className={styles.square}>
          <img src={squareLayout}></img>
          <h3>SQUARE</h3>
          <p>Recommended: 1200 X 1200 Pixels.</p>
          <p>Aspect Ratio 1:1</p>
        </div>
        <div className={styles.portrait}>
          <img src={portraitLayout}></img>
          <h3>PORTRAIT</h3>
          <p>Recommended: 1080 X 1350 Pixels.</p>
          <p>Aspect Ratio 4:1</p>
        </div>
        <div className={styles.landscape}>
          <img src={landscapeLayout}></img>
          <h3>LANDSCAPE</h3>
          <p>Recommended: 1200 X 627 Pixels.</p>
          <p>Aspect Ratio 1:91</p>
        </div>
      </div>
      <h1>Structures</h1>
      <div className={styles.structures}>
        <div>
          <img src={structure1}></img>
        </div>
        <div>
          <img src={structure2}></img>
        </div>
        <div>
          <img src={structure3}></img>
        </div>
        <div>
          <img src={structure4}></img>
        </div>
        <div>
          <img src={structure5}></img>
        </div>
        <div>
          <img src={structure6}></img>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.card1}>
          <Heading text="1. Top Future Trends" />
          <img src={gridLayout1}></img>
        </div>
        <div className={styles.card1}>
          <Heading text="2. Black Friday in your eCommerce" />
          <img src={gridLayout2}></img>
        </div>
        <div className={styles.card1}>
          <Heading text="3. Implementation of SFCC" />
          <img src={gridLayout3}></img>
        </div>
        <div className={styles.card1}>
          <Heading text="4. Hiring and Marketing" />
          <img src={gridLayout4}></img>
        </div>
        <div className={styles.card1}>
          <Heading text="5. Headless Commerce" />
          <img src={gridLayout5}></img>
        </div>
        <div className={styles.card1}>
          <Heading text="6. Development" />
          <img src={gridLayout6}></img>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
