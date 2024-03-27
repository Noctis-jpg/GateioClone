import React from 'react'
import SwiperCards from './SwiperCards'

const Startup = () => {
  return (
<section className='Startup'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <div className='BoxesCapsul'>
                  <h2>Startup</h2>
                  <p>Yeni kripto projeleri için launchpad.Gate Startup aracılığıyla kripto airdrop'larını en erken alan siz olun</p>
                  <div className='CartOther'>
                    <span>ATH Yatırım Getirisi</span>
                    <div className='GreenArea'>
                        <div className='Number_Text'>
                        <span className='Number'>8883.3%</span>
                        <span className='Text'>PixeVerse(PIXEL)</span>
                        </div>
                        <div className='Number_Text'>
                        <span className='Number'>8883.3%</span>
                        <span className='Text'>PixeVerse(PIXEL)</span>
                        </div>
                        <div className='Number_Text'>
                        <span className='Number'>8883.3%</span>
                        <span className='Text'>PixeVerse(PIXEL)</span>
                        </div>
                    </div>
                  </div>
                  <div class="Btns"><a href="#" class="btn btn-primary">Ücretsiz Airdrop Alın</a></div>

                </div>
            </div>
            <div className='col-md-8'>
                <SwiperCards />
            </div>
        </div>
    </div>
</section>
  )
}

export default Startup