import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

export default function SwiperCards() {
  return (
    <>
      <Swiper
        modules={[EffectCards, Navigation]}
        effect={'cards'}
        grabCursor={true}
        pagination={{
          type: 'fraction',
          clickable: true,
        }}
        navigation={true}
        className="SwiperCars"
      >
        <SwiperSlide>
          <div className='MainCardsCapsul'>
            <div className='TopArea'>
              <img src='cards1.jpeg' className='img-fluid ymCardsSlide' />
              <div className='BottomAlert'>
                <span>Bitiş için kalan zaman:0 Day 00:29:01</span>
              </div>
            </div>
            <div className='BottomArea'>
              <div className='Buttons'>
                <a className="btn btn-primary" href="#">Airdrop</a>
                <a className="btn btn-primary" href="#">İLK</a>
              </div>
              <div className='CardsHeading'>
                <h3>Brightpool Finance</h3>
                <div className='CardsFooter'>
                  <span className='numberSupp'>11,668 <span className='TextSupp'>Destekleyenler</span></span>
                  <div className='ProgressBar'>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>75%</div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='MainCardsCapsul'>
            <div className='TopArea'>
            <img src='cards2.jpg' className='img-fluid ymCardsSlide' />
              <div className='BottomAlert'>
                <span>Bitiş için kalan zaman:0 Day 00:29:01</span>
              </div>
            </div>
            <div className='BottomArea'>
              <div className='Buttons'>
                <a className="btn btn-primary" href="#">Airdrop</a>
                <a className="btn btn-primary" href="#">İLK</a>
              </div>
              <div className='CardsHeading'>
                <h3>Brightpool Finance</h3>
                <div className='CardsFooter'>
                  <span className='numberSupp'>11,668 <span className='TextSupp'>Destekleyenler</span></span>
                  <div className='ProgressBar'>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>75%</div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='MainCardsCapsul'>
            <div className='TopArea'>
            <img src='cars3.png' className='img-fluid ymCardsSlide' />
              <div className='BottomAlert'>
                <span>Bitiş için kalan zaman:0 Day 00:29:01</span>
              </div>
            </div>
            <div className='BottomArea'>
              <div className='Buttons'>
                <a className="btn btn-primary" href="#">Airdrop</a>
                <a className="btn btn-primary" href="#">İLK</a>
              </div>
              <div className='CardsHeading'>
                <h3>Brightpool Finance</h3>
                <div className='CardsFooter'>
                  <span className='numberSupp'>11,668 <span className='TextSupp'>Destekleyenler</span></span>
                  <div className='ProgressBar'>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>75%</div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
