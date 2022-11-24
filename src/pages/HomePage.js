import React from "react";
import styles from './HomePage.module.css'; 
import Brand from "../components/HomePage/Brand";

const HomePage = () => {
    return <div className={styles.brandingHero}>
        <Brand />
    </div>
};

export default HomePage;
