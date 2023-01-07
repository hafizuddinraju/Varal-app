import React from "react";
import ILLUSTRATION from "../../assets/photos/ILLUSTRATION.png";
import Ellipse199 from "../../assets/photos/Ellipse199.png";
import Ellipse166 from "../../assets/photos/Ellipse166.png";
import Ellipse211 from "../../assets/photos/Ellipse211.png";
import "../../styles/hero.css";
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsPlayCircle } from 'react-icons/bs';
const Hero = () => {
  return (
    <section id="home">
      <div className="hero-top-content">
        <div>
          <img src={Ellipse166} alt="" />
        </div>
        <div className="input-search">
          <BiSearchAlt2></BiSearchAlt2>
          <input   type="text" placeholder="Search a Term | Topic"/>
        </div>
      </div>
      <div className="container">
        <div className="hero__wrapper">
          {/* ========== hero content ========== */}
          <div className="hero__content">
          <div className="claim-img">
          <img src={Ellipse211} alt="" />
        </div>
          <p className="text-content-claim" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1800">
              Claim a Free Quote 
            </p>
            <h2
              className="section__title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Get started  on fulfilling
              <hr className="hr_line"/>
              <span className="highlights"> your Dubai or UAE</span><br/>dream.
            </h2>
            <p className="text-content-claim" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1800">
              UAE & Offshore Company
            </p>
            <p className="provide-text" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
            We provide you with information about UAE or
            Offshore Company Registration & help you
            setup your company with a bank account and
            visas. <br />
             
            </p>

            <div
              className="hero__btns"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              <div className="register__btn_start">Start a Company</div>
              <div className="register__btn_start_end">Renew a Company</div>
              
            </div>
          </div>

          {/* ========= hero img ============= */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={ILLUSTRATION} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              

              

             

              <div
                className="dumble__icon"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <img src={Ellipse199} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-header-end">
        <div className="text-header-end-flex">

      Watch the video about UAE or Offshore Company Registration
      <BsPlayCircle className="icon-bs"></BsPlayCircle>
        </div>
      </div>
    </section>
  );
};

export default Hero;
