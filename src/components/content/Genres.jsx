import React from 'react';
import styles from './Content.module.css';

function Genres(props) {
    let genres = ['Drama', 'Thriller', 'Supernatural'];
    return (
        <div>
            <ul className ={styles.genres}>
              {genres.map((genre, index) => (
              <li className={styles.genreItem} key={index}>{genre}</li>
              ))}
           </ul>
        </div>
    );
}

export default Genres;