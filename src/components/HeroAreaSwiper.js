import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Pagination, Navigation} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const images = [
    'img1.png',
    'img2.png',
    'img3.png',
    'img4.png',
    'img1.png',
    'img2.png',
    'img3.png',
    'img4.png',
];

const HeroAreaSwiper = () => {
    SwiperCore.use([Autoplay]);

    const [swiperHeight, setSwiperHeight] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            const slider = document.querySelector(".HeroAreaSwipers");
            const currentSlide = slider.querySelector(".swiper-slide-active");
            if (currentSlide) {
                const currentSlideItem = currentSlide.querySelector("img");
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
        <div className="swiper-container HeroAreaSwipers" style={{ height: swiperHeight }}>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 100, disableOnInteraction: true }}
                direction={'vertical'}
                pagination={{
                    type: 'fraction',
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  navigation={true}
                className="swiper-wrapper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <img className='img-fluid ym_SwiperClass' src={image} alt={`Slide ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroAreaSwiper;
