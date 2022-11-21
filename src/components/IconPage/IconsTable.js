import React from "react";
import styles from "./IconsTable.module.css";

import {
  AiTwotoneBuild,
  AiOutlineBgColors,
  AiOutlineFontColors,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { IoLogoSlack } from "react-icons/io";
import { BiConfused } from "react-icons/bi";
import {
  BsFillMenuButtonWideFill,
  BsCardText,
  BsGrid1X2Fill,
} from "react-icons/bs";

const IconsTable = ({}) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.iconsGrid}>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <AiTwotoneBuild />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <AiOutlineBgColors />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <AiOutlineFontColors />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <AiOutlineLeft />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <AiOutlineSearch />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <AiOutlineSetting />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <IoLogoSlack />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <BiConfused />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <AiOutlineBgColors />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <BsFillMenuButtonWideFill />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <BsGrid1X2Fill />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <BsCardText />
          </div>
          <span>icon</span>
        </div>
      </div>
    </div>
  );
};

export default IconsTable;
