import React from 'react';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faCompass, faUserClock, faDownload, faSearch, faBars } from '../../node_modules/@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <header>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8 pad-0 d-flex ym_gap'>
            <div className='Logo'>
              <img width="120" height="auto" src="/logogate.png" alt="" />
            </div>
            <div className='Buttons'>
              <a href='#' className='ActiveBtn'>Alım Satım</a>
              <a href='#'>Web3</a>
            </div>
            <div className='SVGicons MegamenuAfter'>
            <FontAwesomeIcon icon={faCompass} />
            <div className="sub-menu large-sub-menu">
                            <div className="container pad-r0">
                                <div className="row">
                                    <div className="col-md-4">
                                      <span className='littleHead'>Alım-Satım</span>
                                        <ul className="sub-menu-list">
                                        <li>
                                          <div className='IconSubMenu'>
                                          <FontAwesomeIcon icon={faUserClock} />
                                         
                                          <a href="#">Ortaklık Programı
                                              <p>Gate.io'yu hedef kitlenizle paylaşarak komisyon kazanın</p>
                                            </a>
                                            </div>
                                            </li>
                                            
                                            <li>
                                          <div className='IconSubMenu'>
                                          <FontAwesomeIcon icon={faUserClock} />
                                         
                                          <a href="#">Ortaklık Programı
                                              <p>Gate.io'yu hedef kitlenizle paylaşarak komisyon kazanın</p>
                                            </a>
                                            </div>
                                            </li>
                                            <li>
                                          <div className='IconSubMenu'>
                                          <FontAwesomeIcon icon={faUserClock} />
                                         
                                          <a href="#">Ortaklık Programı
                                              <p>Gate.io'yu hedef kitlenizle paylaşarak komisyon kazanın</p>
                                            </a>
                                            </div>
                                            </li>
                                            <li>
                                          <div className='IconSubMenu'>
                                          <FontAwesomeIcon icon={faUserClock} />
                                         
                                          <a href="#">Ortaklık Programı
                                              <p>Gate.io'yu hedef kitlenizle paylaşarak komisyon kazanın</p>
                                            </a>
                                            </div>
                                            </li>
                                            <li>
                                          <div className='IconSubMenu'>
                                          <FontAwesomeIcon icon={faUserClock} />
                                         
                                          <a href="#">Ortaklık Programı
                                              <p>Gate.io'yu hedef kitlenizle paylaşarak komisyon kazanın</p>
                                            </a>
                                            </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                    <span className='littleHead'>Promosyonlar</span>
                                        <ul className="sub-menu-list">
                                        <li><a href="#">Startup Listeleme
                                              <p>Token lansman ve airdrop platformu</p>
                                            </a></li>
                                            <li><a href="#">Startup Listeleme
                                              <p>Token lansman ve airdrop platformu</p>
                                            </a></li>
                                            <li><a href="#">Startup Listeleme
                                              <p>Token lansman ve airdrop platformu</p>
                                            </a></li>
                                            <li><a href="#">Startup Listeleme
                                              <p>Token lansman ve airdrop platformu</p>
                                            </a></li>
                                            <li><a href="#">Startup Listeleme
                                              <p>Token lansman ve airdrop platformu</p>
                                            </a></li>
                                            <li><a href="#">Startup Listeleme
                                              <p>Token lansman ve airdrop platformu</p>
                                            </a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                    <span className='littleHead'>Öğren & Keşfet</span>
                                        <ul className="sub-menu-list">
                                            <li><a href="#">Alım-Satım
                                              <p>1.700'den fazla kripto para birimi alıp satın</p>
                                            </a></li>
                                            <li><a href="#">Alım-Satım
                                              <p>1.700'den fazla kripto para birimi alıp satın</p>
                                            </a></li>
                                            <li><a href="#">Alım-Satım
                                              <p>1.700'den fazla kripto para birimi alıp satın</p>
                                            </a></li>
                                            <li><a href="#">Alım-Satım
                                              <p>1.700'den fazla kripto para birimi alıp satın</p>
                                            </a></li>
                                            <li><a href="#">Alım-Satım
                                              <p>1.700'den fazla kripto para birimi alıp satın</p>
                                            </a></li>
                                            <li><a href="#">Alım-Satım
                                              <p>1.700'den fazla kripto para birimi alıp satın</p>
                                            </a></li>
                                        </ul>
                                    </div>
                  
                                </div>
                            </div>
                         </div>
            </div>

          <div className='HeadMenu'>
            <ul id='ListMenu'>
                <li><a href='#'>Kripto Al</a></li>
                <li><a href='#'>Piyasa</a></li>
                <li><a href='#'>Al-Sat</a></li>
                <li><a href='#'>Türev Ürün</a></li>
                <li><a href='#'>Finans</a></li>
                <li><a href='#'>Botlar</a></li>
                <li><a href='#'>Kopyala</a></li>
                <li><a href='#'>Kurumsal</a></li>

            </ul>
          </div>


          </div>
          <div className='col-md-4 rightFlex'>
    <div className='RightMenu'>
      <a href='#' className='Login'>Giriş Yap</a>
      <button type="button" className='btn btn-primary'>Hesap Oluştur</button>
      <FontAwesomeIcon className='Download' icon={faDownload} />
      
      <FontAwesomeIcon className='Search' icon={faSearch} />

      <FontAwesomeIcon className='Bars' icon={faBars} />

    </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
