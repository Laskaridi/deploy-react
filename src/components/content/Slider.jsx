import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
import styles from './Content.module.css';
import { Pagination, Navigation } from 'swiper/modules';

function Slider() {
    return (
        <div>
            <h3 className={styles.titleSlider}>POPULAR THIS WEEK</h3>
             <Swiper
                 slidesPerView={5}
                 pagination={{
                  type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
      >
        <SwiperSlide>
        <a href="https://www.netflix.com/ua-ru/title/80192098">
        <img src='/video1.png' alt='la casa de papel'/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.netflix.com/ua/title/81616256">
        <img src="/video2.png" alt="terrible neighbor"/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.netflix.com/ua/title/80993029">
        <img src="/video3.png" alt="halloween"/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.netflix.com/ua/title/81624008">
        <img src="/video5.png" alt="the shadow strays"/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.netflix.com/ua/title/80150243">
        <img src="/video6.png" alt="afterburner"/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.netflix.com/ua-ru/title/80192098">
        <img src='/video1.png' alt='la casa de papel'/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.netflix.com/ua/title/80993029">
        <img src="/video3.png" alt="halloween"/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.netflix.com/ua/title/81624008">
        <img src="/video5.png" alt="the shadow strays"/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.netflix.com/ua/title/80150243">
        <img src="/video6.png" alt="afterburner"/></a>
        </SwiperSlide>
      </Swiper>
        </div>
    );
}

export default Slider;