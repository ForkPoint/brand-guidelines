import React from "react";
import styles from "./List.module.css";

const List = ({item1, item2, heading}) => {
  return (
    <div className={styles.containerLarge}>
      <h2>{heading}</h2>
      <ul className={styles.list}>
        <li>{item1}</li>
        <li>{item2}</li>
      </ul>
    </div>
  );
};

export default List;
