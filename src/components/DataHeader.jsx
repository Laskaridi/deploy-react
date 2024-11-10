import React from 'react';
import styles from './Netflix.module.css';

function DataHeader() {
        const today = new Date();
        
        const formattedDate = today.toLocaleDateString('en-UA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
    return (
        <div className={styles.data}>
             <img className={styles.imgLogo} src="/logo.png" alt="logo-netflix"></img>
             <div className={styles.border}></div>
             <h3>{formattedDate}</h3>
        </div>
    );
}

export default DataHeader;