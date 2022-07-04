import React from 'react';
import { ReactNode } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Autoplay]);

interface CustomizedSwiperProps {
    children?: ReactNode;
    slidesPerView?: number;
}

export const CustomizedSwiper = ({ children, slidesPerView }: CustomizedSwiperProps) => {
    return (
        <Swiper
            slidesPerView={slidesPerView}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {children}
        </Swiper>
    );
};
