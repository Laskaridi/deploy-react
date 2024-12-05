import React from 'react';
import styles from './Content.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Controls(props) {
    return (
        <div>
            <button className={styles.streamButton}><a href='https://www.netflix.com/ua-ru/title/80057281'>STREAM NOW</a>
                <FontAwesomeIcon className={styles.iconPlay} icon="fa-solid fa-circle-play" />
                </button>
            <button className={styles.episodesButton}><a href='https://www.netflix.com/ua-ru/title/80057281'>ALL EPISODES</a></button>
        </div>
    );
}

export default Controls;