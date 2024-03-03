// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Achievement.module.css";
export const Achievement = () => {
    return(
        <section className={styles.container} id="achievement">
            <h2 className={styles.title}>Achievements</h2>
            <div className={styles.content}>
                <img
                src={"../../../assets/about/experience.png"}
                alt="siting image"
                className={styles.aboutImage}/>
                
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={"../../../assets/about/cursorIcon.png"}
                        alt="Cursor icon"/>
                        <div className={styles.aboutItemsText}>
                            <h3>IEEE CIS SBC Start-O-Thon</h3>
                            <p> First Runner up</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={"../../../assets/about/serverIcon.png"}
                        alt="Server icon"/>
                        <div className={styles.aboutItemsText}>
                            <h3>IEEE CIS SBC Hack4Good</h3>
                            <p>Finalist</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={"../../../assets/about/cursorIcon.png"}
                        alt="Cursor icon"/>
                        <div className={styles.aboutItemsText}>
                            <h3>Internal Hackathon for Smart India Hackathon</h3>
                            <p>Round 2</p>
                        </div>
                    </li>
                   
                </ul>
            </div>
        </section>
    )

}