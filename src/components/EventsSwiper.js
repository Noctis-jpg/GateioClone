import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';



const images = [
  'event1.png',
  'event2.jpg',
  'event3.jpg',
  'event4.jpg',
  'event5.jpg',
  'event6.png',
  'event7.jpg',
  'event8.png',
];

const texts = [
  { title: '', description: 'Gate.io to Attend Istanbul Fintech Week 2024' },
  { title: 'Başlık 2', description: 'Açıklama 2' },
  { title: 'Başlık 3', description: 'Açıklama 3' },
  { title: 'Başlık 4', description: 'Açıklama 4' },
  { title: 'Başlık 5', description: 'Açıklama 5' },
  { title: 'Başlık 6', description: 'Açıklama 6' },
  { title: 'Başlık 7', description: 'Açıklama 7' },
  { title: 'Başlık 8', description: 'Açıklama 8' },
];

const EventSwiper = () => {
  return (
<Swiper
  spaceBetween={30}
  slidesPerView={4}
  pagination={{
    type: 'fraction',
    clickable: true,
  }}
  modules={[Navigation]}
  navigation={true}
  mousewheel 
  className='EventSwiperArea'
  breakpoints={{
    0: {
      slidesPerView: 1.5,
    },
    720: {
      slidesPerView: 4,
    },
  }}
>

      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="image-container">
            <img className='img-fluid' src={image} alt={`Image ${index + 1}`} />
            <div className="text-box">
              {/* <h3>{texts[index].title}</h3> */}
              <p>{texts[index].description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventSwiper;
