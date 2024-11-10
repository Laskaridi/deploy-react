import React from 'react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
import styles from './Content.module.css';

function Slider(props) {
    return (
        <div>
            <h3 className={styles.titleSlider}>POPULAR THIS WEEK</h3>
             <Swiper
                 slidesPerView={5}
                 spaceBetween={0}
                 pagination={{
                 clickable: true,
                 }}
                 modules={[Pagination]}
                 className="mySwiper"
      >
        <SwiperSlide><img src='/video1.png' alt='la casa de papel'/></SwiperSlide>
        <SwiperSlide><img src='/video2.png' alt='terrible neighbor'/></SwiperSlide>
        <SwiperSlide><img src='/video3.png' alt='halloween'/></SwiperSlide>
        <SwiperSlide><img src='/video4.png' alt='war of the worlds'/></SwiperSlide>
        <SwiperSlide><img src='/video5.png' alt='the shadow strays'/></SwiperSlide>
        <SwiperSlide><img src='/video6.png' alt='afterburner'/></SwiperSlide>
        <SwiperSlide><img src='/video1.png' alt='la casa de papel'/></SwiperSlide>
        <SwiperSlide><img src='/video2.png' alt='terrible neighbor'/></SwiperSlide>
        <SwiperSlide><img src='/video3.png' alt='halloween'/></SwiperSlide>
      </Swiper>
        </div>
    );
}

export default Slider;