import React from 'react'
import EventSwiper from './EventsSwiper'
const Events = () => {
  return (
  <section className='EventsArea'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
            <div className='HeadEvents'>
                <div className='LeftHead'>
                    <h2>Etkinlikler</h2>
                </div>
                <div className='RightHead'>
                    <a href="#" className='btn btn-secondary'>Daha Fazla Etkinlik</a>
                </div>
            </div>
            </div>
            <div className='col-md-12'>
            <EventSwiper />
            </div>
        </div>
    </div>
  </section>
  )
}

export default Events