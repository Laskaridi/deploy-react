import React from 'react';
import styles from './Netflix.module.css';

function Sticker(props) {
    return (
        <div className={styles.sticker}>
            <div className={styles.stkLeft}></div>
               <div className={styles.stkRight}>
                <span className={styles.count}>
                16+
               </span>
            </div>
        </div>
    );
}

export default Sticker;