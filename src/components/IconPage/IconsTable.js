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
import { FiCheck, FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronUp, FiCheckCircle, FiSearch,
   FiRefreshCw, FiDownload, FiHelpCircle, FiLayout, FiVolume2, FiTrash2, FiUser, FiThumbsUp, FiXCircle } from "react-icons/fi";

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
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiCheck />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiChevronDown />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiChevronRight />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiChevronUp />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiChevronLeft />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiCheckCircle />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiSearch />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiThumbsUp />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiRefreshCw />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiXCircle />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiDownload />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiUser />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiVolume2 />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiLayout />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiHelpCircle />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiTrash2 />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiTrash2 />
          </div>
          <span>icon</span>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.icon}>
            <FiTrash2 />
          </div>
          <span>icon</span>
        </div>
      </div>
    </div>
  );
};

export default IconsTable;
