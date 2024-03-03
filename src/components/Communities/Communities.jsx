// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Communities.module.css";
import history from "../../data/history.json";

export const Communities = () => {
    return(
        <section className={styles.container} id="communities">
            <h2 className={styles.title}>Communities</h2>
            <div className={styles.content}>
                
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return <li key={id} className={styles.historyItem}>
                                <img src={(historyItem.imageSrc)} 
                                alt={`${historyItem.organization}Logo`}/>
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return(
                                                <li key={id}>
                                                    {experience}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        })
                    }
                </ul>
               
            </div>
        </section>

    );
};
