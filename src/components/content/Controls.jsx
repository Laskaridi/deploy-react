import React from 'react';
import styles from './Content.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Controls(props) {
    return (
        <div>
            <button className={styles.streamButton}>STREAM NOW
                <FontAwesomeIcon className={styles.iconPlay} icon="fa-solid fa-circle-play" />
                </button>
            <button className={styles.episodesButton}>ALL EPISODES</button>
        </div>
    );
}

export default Controls;