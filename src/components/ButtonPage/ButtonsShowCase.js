import React from "react";
import styles from "./ButtonsShowCase.module.css";

const ButtonsShowCase = ({}) => {
  return (
    <div className={styles.sectionButtons}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p>
            The size of buttons depends on the base font size used which can be
            adapted to the viewport width.
          </p>
          <ul>
            <li>
              Small button at a base font size of 16 px, e.g. in a smartphone
              app.
            </li>
            <li>
              Medium sized button at a base font size of 18 px, e.g. in a tablet
              app.
            </li>
            <li>
              Large button at a base font size of 20 px, e.g. on a website which
              is rendered in a wide viewport.
            </li>
          </ul>
          <p>
            The minimum width of primary and secondary buttons is defined as
            nine times the base font size. Thus, with a base font size of 16 px,
            the minimum button width is 9 × 16 px = 144 px.
          </p>
          <p>
            For small viewports, the font size and padding for the label can be
            adjusted on the left and right.
          </p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.small}>
            <p>S</p>
            <button className={styles.btnSmall}>Button</button>
          </div>
          <div className={styles.medium}>
            <p>M</p>
            <button className={styles.btnMedium}>Button</button>
          </div>
          <div className={styles.large}>
            <p>L</p>
            <button className={styles.btnLarge}>Button</button>
          </div>
        </div>
      </div>
      <div className={styles.showcase}>
        <div className={styles.primary}>
          <h5>Primary Buttons</h5>
          <h6>S</h6>
          <button className={styles.btnSmall}>#8acf31</button>
          <h6>M</h6>
          <button className={styles.btnMedium}>RGB: 138 207 490</button>
          <h6>L</h6>
          <button className={styles.btnLarge}>CMYK: 60 0 100 0</button>
        </div>
        <div className={styles.secondary}>
          <h5>Secondary Buttons</h5>
          <h6>S</h6>
          <button className={styles.btnSmall}>#575757</button>
          <h6>M</h6>
          <button className={styles.btnMedium}>RGB: 87 87 87</button>
          <h6>L</h6>
          <button className={styles.btnLarge}>CMYK: 0 0 0 80</button>
        </div>
        <div className={styles.tertiary}>
          <h5>Tertiary Buttons</h5>
          <h6>S</h6>
          <button className={styles.btnSmall}>#11a1e0</button>
          <h6>M</h6>
          <button className={styles.btnMedium}>RGB: 17 161 224</button>
          <h6>L</h6>
          <button className={styles.btnLarge}>CMYK: 92 28 0 12</button>
        </div>
      </div>
    </div>
  );
};

export default ButtonsShowCase;
