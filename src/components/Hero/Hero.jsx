// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Hero.module.css";
export const Hero = () => {
    return(
     <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Shambhavi</h1>
            <p className={styles.description}>Driven by a passion for learning and problem-solving, eager to contribute my enthusiasm and collaborative spirit to a workplace that values growth and innovation.Looking opportunity to deliver exceptional software projects through my dedication and willingness to learn and work hard.</p>
            <a href="mailto:shambhavi05gupta@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={"../../../../assets/hero/herophoto.png"} 
        alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.BottomBlur}/>
     </section>
    );
};
