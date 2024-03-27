import React from 'react'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faUser, faUserClock, faDownload } from '../../node_modules/@fortawesome/free-solid-svg-icons';
const StartedArea = () => {
  return (
    <section className='StartedArea'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
            <div className='HeadStarted'>
                <div className='LeftHead'>
                    <h2>Nasıl Başlanır</h2>
                </div>
            </div>
            </div>
            <div className='col-md-4'>
             <div className='Boxes'>
             <FontAwesomeIcon icon={faUser} />
             <h3>01. Hesap Oluştur</h3>
             <p>Kaydolun ve başlangıç görevlerini tamamlayın, $6666 kadar kazanın.</p>
             <div className='Btns'>
             <a href='#' className='btn btn-primary'>Hesap Oluştur</a>
             </div>
             </div>
            </div>
            <div className='col-md-4'>
             <div className='Boxes'>
             <FontAwesomeIcon icon={faUser} />
             <h3>02. Hesabınıza Para Yatırın</h3>
             <p>Kaydolun ve başlangıç görevlerini tamamlayın, $6666 kadar kazanın.</p>
             <div className='Btns d-flex'>
             <a href='#' className='btn btn-primary'>Kripto Para Yatır</a>
             <a href='#' className='btn btn-primary'>Kripto Al</a>
             </div>
             </div>
            </div>
            <div className='col-md-4'>
             <div className='Boxes'>
             <FontAwesomeIcon icon={faUser} />
             <h3>03. Alım Satıma Başlayın</h3>
             <p>Kaydolun ve başlangıç görevlerini tamamlayın, $6666 kadar kazanın.</p>
             <div className='Btns'>
             <a href='#' className='btn btn-primary'>Al-Sat</a>
             </div>
             </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default StartedArea