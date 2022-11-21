import React from "react";
import styles from './HomePage.module.css'; 
import Heading from "../components/Layout/Heading";
import Brand from "../components/HomePage/Brand";

const HomePage = () => {
    return <div className={styles.brandingHero}>
        <Heading text="Home page"/>
        <Brand />
    </div>
};

export default HomePage;
