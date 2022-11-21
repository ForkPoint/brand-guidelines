import React from "react";
import styles from './HomePage.module.css'; 
import Heading from "../components/Layout/Heading";

const HomePage = () => {
    return <div className={styles.brandingHero}>
        <Heading text="Home page"/>
    </div>
};

export default HomePage;
