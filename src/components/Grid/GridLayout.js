import React from "react";
import styles from "./GridLayout.module.css";
import { forkpointCard, forkpointFlags, logoSVG, cover1, cover2, cover3, cover4, drawPrimary,
   drawSecondary , location, salesforceCover, cartoonCover, grandpaForkpoint} from "../../assets";

const GridLayout = ({}) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.cardVertical}>
        <div className={styles.leftVertical}>
          <img src={location}></img>
        </div>
        <div className={styles.rightVertical}>
          <img src={forkpointCard}></img>
        </div>
      </div>
      <div className={styles.cardHorizontal}>
        <div className={styles.topHorizontal}>
          <img src={cartoonCover}></img>
        </div>
        <div className={styles.bottomHorizontal}>
        <img src={cover1}></img>
        </div>
      </div>
      <div className={styles.cardGridPrimary}>
        <div className={styles.block}>
        <img src={drawPrimary}></img>
        </div>
        <div className={styles.block1}>

        </div>
        <div className={styles.block2}>
          <h4>Helo askdo worod slelsa</h4>
        </div>
        <div className={styles.block3}>
        <img src={cover2}></img>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
