import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faBars } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const textContents = [
    { left: 'Left Text 1', right: 'Right Text 1' },
    { left: 'Left Text 2', right: 'Right Text 2' },
    { left: 'Left Text 3', right: 'Right Text 3' },
    { left: 'Left Text 4', right: 'Right Text 4' },
    { left: 'Left Text 5', right: 'Right Text 5' },
    { left: 'Left Text 6', right: 'Right Text 6' },
    { left: 'Left Text 7', right: 'Right Text 7' },
    { left: 'Left Text 8', right: 'Right Text 8' },
];

const CommentsSwiper = () => {
    SwiperCore.use([Autoplay]);

    const [swiperHeight, setSwiperHeight] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            const slider = document.querySelector(".CommentsSwiper");
            const currentSlide = slider.querySelector(".swiper-slide-active");
            if (currentSlide) {
                const currentSlideItem = currentSlide.querySelector(".slide-content");
                setSwiperHeight(currentSlideItem.clientHeight);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="swiper-container CommentsSwiper" style={{ height: swiperHeight }}>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: true }} // Örneğin 3000ms (3 saniye) olarak ayarladık
                direction={'vertical'}
                pagination={{
                    type: 'fraction',
                    clickable: true,
                }}
       
                className="swiper-wrapper"
            >
                {textContents.map((content, index) => (
                    <SwiperSlide data-swiper-autoplay="3000" key={index} className="swiper-slide">
                        <div className="slide-content">
                            <div className="left-content">
                                <FontAwesomeIcon icon={faMessage} className="arrow-icon" />
                                <span>{content.left}</span>
                            </div>
                            <div className="right-content">
                                <span>{content.right}</span>
                                <FontAwesomeIcon icon={faBars} className="arrow-icon" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
           
        </div>
    );
};

export default CommentsSwiper;
