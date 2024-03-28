import React from "react";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import {
  faGift,
  faAppleAlt,
  fa,
} from "../../node_modules/@fortawesome/free-solid-svg-icons";
import HeroAreaSwiper from "./HeroAreaSwiper";
import CommentsSwiper from "./CommentsSwiper";
const HeroArea = () => {
    return (
      <section className="HeroArea">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 middleArea">
              <div className="LeftHeroCapsul">
                <h1>Kriptoya Açılan Kapı</h1>
                <p>
                  Güvenli, hızlı ve kolay bir şekilde 1.700’den fazla kripto
                  paraya yatırım yapın.
                </p>
                <span>
                  <FontAwesomeIcon icon={faGift} />
                  Kaydolun ve 6666$'a varan hoş geldin ödülleri kazanın
                </span>
  
                <form className="d-flex align-items-center space-x-4">
                  <input
                    type="email"
                    placeholder="E-posta adresinizi girin"
                    className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
                  />
                  <button
                    type="submit"
                    className=" hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline"
                  >
                    Hesap Oluştur
                  </button>
                  <div className="HerosIcons DesktopIcons">
                    <div className="icons v">
                      <FontAwesomeIcon icon={faAppleAlt} />
                    </div>
                    <div className="icons py-3">
                      <FontAwesomeIcon icon={faAppleAlt} />
                    </div>
                    <div className="icons py-3">
                      <FontAwesomeIcon icon={faAppleAlt} />
                    </div>
                  </div>
                  </form>
                  <div className="HerosIcons MobileIcons">
                    <div className="icons v">
                      <FontAwesomeIcon icon={faAppleAlt} />
                    </div>
                    <div className="icons py-3">
                      <FontAwesomeIcon icon={faAppleAlt} />
                    </div>
                    <div className="icons py-3">
                      <FontAwesomeIcon icon={faAppleAlt} />
                    </div>
                  </div>
            
                <div class="row MobileMt">
                  <div class="col-md-3 col-6">
                    <div class="counter-container">
                      <h3 class="counter">
                        <span className="Dollar"></span>9.37
                        <span className="smallCountertEXT">B</span>
                      </h3>
                      <p class="counter-text">24S İşlem Hacmi</p>
                    </div>
                  </div>
                  <div class="col-md-3 col-6">
                    <div class="counter-container">
                      <h3 class="counter">1700+</h3>
                      <p class="counter-text">Listelenmiş kripto para birimi</p>
                    </div>
                  </div>
                  <div class="col-md-3 col-6">
                    <div class="counter-container">
                      <h3 class="counter">
                        14+<span className="smallCountertEXT">M</span>
                      </h3>
                      <p class="counter-text">Kayıtlı Kullanıcı</p>
                    </div>
                  </div>
                  <div class="col-md-3 col-6">
                    <div class="counter-container">
                      <h3 class="counter">
                        498<span className="smallCountertEXT">%</span>
                      </h3>
                      <p class="counter-text">Simple Earn APR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <HeroAreaSwiper />
            </div>
            <div className="col-md-12 col-12">
<CommentsSwiper />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroArea;
