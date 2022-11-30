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
            <button className={styles.btnTertiary}>Shop Now</button>
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
            <button className={styles.btnPrimary}>Explore Now</button>
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
            <hr />
            <h2>What is Lorem Ipsum?</h2>
            <spam>Lorem ipsum dolor sit</spam>
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.row}>
            <h1>What is Lorem Ipsum?</h1>
            <h4>What is Lorem Ipsum?</h4>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.row}>
            <h5>MARKETING STRATEGY</h5>
            <ul>
              <li>Sales</li>
              <li>Income</li>
            </ul>
            <button className={styles.btnFourth}>Contact Us</button>
          </div>
        </div>
        <div className={styles.card5}>
          <div className={styles.col1}></div>
          <div className={styles.col2}>forkpoint.com</div>
          <div className={styles.row}>
            <h1>WE`RE HIRING</h1>
            <hr />
            <h1>Digital Marketing Expert</h1>
            <hr />
            <spam>Send your CV here:</spam>
            <p>forkpoint@mail.com</p>
          </div>
        </div>
        <div className={styles.card6}>
          <div className={styles.col}>
            <h1>WE`RE HIRING</h1>
            <hr />
            <h2>Digital Marketing Expert</h2>
            <ul>
              <li>Sales</li>
              <li>Income</li>
              <li>Ecommerce</li>
              <li>Design</li>
              <li>Quality</li>
            </ul>
            <hr className={styles.line} />
            <h3>Contacts</h3>
            <img src={draw3}></img>
            <ul>
              <li>forkpoint.com</li>
              <li>forkpoint@mail.com</li>
            </ul>
          </div>
          <div className={styles.col}></div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
