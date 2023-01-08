import React from "react";
import "../../styles/start.css";
import ILLUSTRATION03  from "../../assets/photos/ILLUSTRATION03.png";
import Group2  from "../../assets/photos/Group2.png";
import Group1  from "../../assets/photos/Group1.png";
import Group  from "../../assets/photos/Group.png";
import Ellipse166  from "../../assets/photos/Ellipse166.png";
import Ellipse7  from "../../assets/photos/Ellipse7.png";
import Ellipse13  from "../../assets/photos/Ellipse13.png";
import Ellipse211  from "../../assets/photos/Ellipse211.png";
import Ellipse199  from "../../assets/photos/Ellipse199.png";
import { FiArrowRight } from 'react-icons/fi';

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <img className="img-icon-start" src={Ellipse166} alt="" />
        <img className="img-icon-start_left" src={Ellipse211} alt="" />
        <div className="start__wrapper">
          <div className="div_left_start"
          >
            <p className="text-learn">Learn the ways in which you can benefit
              from a UAE/Offshore Company. Then get
              started on fulfilling your UAE dream.</p>
              <p className="text_claim_text">Claim a Free Quote</p>
              <div className="card_items_data">
                <img src={ILLUSTRATION03} alt="" />
                <h4>Bank Account Setup</h4>
                <p className="text_many">There are many banks in the United
                    Arab Emirates [UAE]. Both locally
                    owned and branches of
                    multinational ones. Foreign banks
                    adjust according to their parent's
                    strategies and have changed local
                    requirements overnight in the past.
                    But we are here to help you.</p>
                 <span className="more_icon">Learn more <FiArrowRight></FiArrowRight> </span>   
              </div>
              <img className="img-top-card-left" src={Ellipse199} alt="" />
              <div className="card_items_data"
              data-aos="fade-right"
              data-aos-duration="1500"
              >
                <div className="img-place">

                <img src={Group2} alt="" />
                </div>
                <h4>UAE Company Visas</h4>
                <p className="text_many">Your application for visas is critical especially if you intend to move to
                  Dubai. This becomes even more
                  urgent if your family will also move
                  with you. All the paperwork is done
                  on your behalf smoothly so that you
                  may only focus on doing what
                  matters most to you.</p>
                 <span className="more_icon">Learn more <FiArrowRight></FiArrowRight> </span>   
              </div>
            
          </div>

          <div
            className="div_left">
             <div className="card_items_data"
             data-aos="fade-right"
             data-aos-duration="1500"
             >
              <div className="img-place">

                <img src={Group} alt="" />
              </div>
                <h4>Advice & Guidance</h4>
                <p className="text_many">All activities in the UAE are licensed. Whether manufacturing, finance,
                trading, marketing, consultancy or
                restaurants. In some countries only
                manufacturing is licensed. In others
                there is a threshold below which
                business are encouraged. Get our
                insightfull guidance today.</p>
                 <span className="more_icon">Learn more <FiArrowRight></FiArrowRight> </span>   
              </div>
              <img className="img-left-card-middle" src={Ellipse166} alt="" />
              <img className="img-left-card-middle-left" src={Ellipse211} alt="" />
             <div className="card_items_data"
             data-aos="fade-right"
             data-aos-duration="1500"
             >
              <div className="img-place">

                <img  src={Group1} alt="" />
              </div>
                <h4>Registration Document Perparation</h4>
                <p className="text_many">Several documents must be
                  prepared to start the process of
                  registering a new company in the
                  United Arab Emirates. Be it a Dubai
                  local company, a free zone one or an
                  offshore entity. Your registered
                  agent is dedicated to get this done
                  for you for a seamless process.</p>
                    <span className="more_icon">Learn more <FiArrowRight></FiArrowRight> </span>    
              </div>
            
              
              <p className="text-learn_end_text">We have gathered a team of
                professionals to craft adequate
                services you can rely on for a friction
                free setup in UAE.<br/>
                <span className="more_icon">More about our services <FiArrowRight></FiArrowRight> </span>  
                <img className="img-bottom-circle_right" src={Ellipse13} alt="" />
              </p>
              
             
          </div>
        </div>
        <img className="img-bottom-circle" src={Ellipse7} alt="" />
      </div>
    </section>
  );
};

export default Start;
