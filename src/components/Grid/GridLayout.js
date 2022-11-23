import React from "react";
import styles from "./GridLayout.module.css";

const GridLayout = ({}) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.flex}>
        <div className={styles.vertical}>
          <div className={styles.one}>Content 1#</div>
          <div className={styles.two}>Content 2#</div>
        </div>
        <div className={styles.horizontal}>
          <div className={styles.one}>Content 1#</div>
          <div className={styles.two}>Content 2#</div>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.blocks}>
          <div className={styles.one}>Content 1#</div>
          <div className={styles.two}>Content 2#</div>
          <div className={styles.three}>Content 3#</div>
        </div>
        <div className={styles.blocksSecondary}>
          <div className={styles.one}>Content 1#</div>
          <div className={styles.two}>Content 2#</div>
          <div className={styles.test}>Content 3#</div>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.blocks}>
          <div className={styles.one}>Content 1#</div>
          <div className={styles.two}>Content 2#</div>
        </div>
        <div className={styles.side}>
          <div className={styles.one}>Content 1#</div>
          <div className={styles.two}>Content 2#</div>
          <div className={styles.test}>Content 3#</div>
          <div className={styles.test}>Content 4#</div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
