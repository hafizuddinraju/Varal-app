import React from "react";
import "../../styles/exercises.css";
import dungeon from "../../assets/photos/dungeon.png";
import Vector2 from "../../assets/photos/Vector2.png";
import Vector1 from "../../assets/photos/Vector1.png";
import Group100 from "../../assets/photos/Group100.png";
import Ellipse122 from "../../assets/photos/Ellipse122.png";


const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise__top">
          <img className="img_top_position" src={Ellipse122} alt="" />
          <img className="img_position" src={Group100} alt="" />
          <h2 className="section__title">
          Dedicated
          <hr />
          to our mission we are
          

          
          
          </h2>
          
          <p className="exercise_p">
          Our services include Company Formation & Renewals,
          Trust & Fiduciary, Tax Residency Setup With Family, Bank
          Accounts, Remote Management, Stock Trading
          Platforms, Ownership Solutions.
          </p>
        </div>

        {/* ========== exercise list ======== */}
        <div className="exercise__wrapper">
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={dungeon} alt="" />
            </span>

            <div className="exercise__content">
              <h4>UAE Free Zone Company</h4>
              <p>Your registration agent, will answer all
                of your questions and help you to reach
                a conclusion that meets your objectives
                of investing in the UAE.</p>
            </div>
            
              <div className="get-started">Get Started</div>
            
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={Vector2} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Dubai Local Companies</h4>
              <p>The Dubai LLC formation documents
                are actually articles of organization or a
                certificate of organization. You can get
                yours today.</p>
            </div>
            <div className="get-started">Get Started</div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={Vector1} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Offshore Compamies</h4>
              <p>You can register an offshore company
              and open its bank account in Dubai.
              Your agent will help you along all the
              process.</p>
            </div>
            <div className="get-started">Get Started</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
