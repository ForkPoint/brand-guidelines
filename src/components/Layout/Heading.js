import React from "react";
import styles from "./Heading.module.css";


const Heading = ({text, label, heading}) => {

  return (
    <div className={styles.containerLarge}>
        <h1>{text}</h1>
        <p>{label}</p>
    </div>
  );
};

export default Heading;