// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Experience.module.css";
export const Experience = () => {
    return(
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
            <img
                src={"../../../assets/about/education.png"}
                alt="siting image"
                className={styles.aboutImage}/>
                
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img src={"../../../assets/about/jobBag.png"}
                        alt="Cursor icon"
                        className={styles.aboutImg}/>
                        <div className={styles.aboutItemsText}>
                            <h3>Synergim </h3>
                            <li>June 2023-Present</li>
                            <h1>Intern</h1>
                        
                        
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img src={"../../../assets/about/jobBag.png"}
                        alt="Cursor icon"
                        className={styles.aboutImg}/>
                        <div className={styles.aboutItemsText}>
                            <h3> Remostart</h3>
                            <li>November 2022-January 2023</li>
                            <h1>Frotend Developer</h1>
                        </div>
                    </li>
                    
                   
                </ul>
            </div>
        </section>
    )

}