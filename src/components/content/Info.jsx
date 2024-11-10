import React from 'react';
import styles from './Content.module.css';
import PropTypes from 'prop-types';

Info.propTypes ={
    title:PropTypes.string,
    text:PropTypes.string
}
Info.defaultProps ={
    title:'No info about title',
    text:'No info about video'
}

function Info(props) {
    const infoData = { year: 2019, director: 'Shawn Levy', season: '3 (5 Episodes)' };
        
    return (
        <div>
            <h1 className={styles.contentTitle}>
                {props.title}
            </h1>
            <div className={styles.infoData}>
            <div className={styles.infoKey}>{infoData.year}</div>
            <div className={styles.infoKey}>DIRECTOR:</div> {infoData.director}
            <div className={styles.infoKey}>Seasons:</div> {infoData.season}
            </div>
            <p className={styles.paragInfo}>
                {props.text}
            </p>
        </div>
    );
}

export default Info;