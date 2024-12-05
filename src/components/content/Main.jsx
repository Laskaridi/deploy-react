import React from 'react';
import Genres from './Genres';
import styles from './Content.module.css';
import Info from './Info';
import Slider from './Slider';
import './Slider.css';
import Rating from './Rating';
import Controls from './Controls';

function Main() {
    let titleValue ='Stranger Things';
    let textValue = 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.';
    return (
        <>
        <main className={styles.content}>
            <Genres></Genres>
            <Info
            title={titleValue}
            text={textValue}></Info>
            <Rating maxRating={5}></Rating>
            <Controls></Controls>
            <Slider className='swiper'></Slider>
        </main>
        </>
    );
}

export default Main;