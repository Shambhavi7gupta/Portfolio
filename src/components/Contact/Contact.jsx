// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
    return(
        <footer className={styles.container}>
            <div className={styles.text}>
                <h2>
                    Contact
                </h2>
                <p >Feel free to reach out!</p>
            </div>
           
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={"../../../assets/contact/emailIcon.png"} alt="Email icon"/>
                    <a href = "mailto:shambhavi05gupta@gmail.com"></a>
                </li>
                <li className={styles.link}>
                    <img src={"../../../assets/contact/linkedinIcon.png"} alt="Linkedin icon"/>
                    <a href = "https://www.linkedin.com/in/shambhavi-gupta-b3726b209/"></a>
                </li>
                <li className={styles.link}>
                    <img src={"../../../assets/contact/githubIcon.png"} alt="Github icon"/>
                    <a href = "https://github.com/Shambhavi7gupta"></a>
                </li>
            </ul>
           
        </footer>
    )
}