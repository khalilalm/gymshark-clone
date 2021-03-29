import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slider.css";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.porcelaingres.com%2Fprodotto.php%3Fcoll%3DJUST-GREY%26linea%3Dlight-grey&psig=AOvVaw308fiXWPt8MY4flpqGOe-P&ust=1611767354105000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjI27eLuu4CFQAAAAAdAAAAABAI",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.porcelaingres.com%2Fprodotto.php%3Fcoll%3DJUST-GREY%26linea%3Dlight-grey&psig=AOvVaw308fiXWPt8MY4flpqGOe-P&ust=1611767354105000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjI27eLuu4CFQAAAAAdAAAAABAI",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.porcelaingres.com%2Fprodotto.php%3Fcoll%3DJUST-GREY%26linea%3Dlight-grey&psig=AOvVaw308fiXWPt8MY4flpqGOe-P&ust=1611767354105000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjI27eLuu4CFQAAAAAdAAAAABAI",
];
const slider = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div
            className="slide-img"
            style={{ backgroundImage: `url(${slideImages[0]})` }}
          >
            <span>
              GOOD NEWS! WE ARE DISPATCHING AS NORMAL AND ENSURING CONTACTLESS
              DELIVERY
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div
            className="slide-img"
            style={{ backgroundImage: `url(${slideImages[1]})` }}
          >
            <span>FREE RETURNS NOW FOR 90 DAYS*</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            className="slide-img"
            style={{ backgroundImage: `url(${slideImages[2]})` }}
          >
            <span>
              SHOP GYMSHARK WITH KLARNA, PAY IN 4 INTEREST-FREE INSTALMENTS
            </span>
          </div>
          <div className="each-slide">
            <div
              className="slide-img"
              style={{ backgroundImage: `url(${slideImages[1]})` }}
            >
              <span>FREE STANDARD SHIPPING WHEN YOU SPEND $75</span>
            </div>
          </div>
        </div>
      </Slide>
      <div className="hero">
        <div className="hero-content">
            <div className="hero-text">
               <h1>STEP INTO CARDIO</h1>
            <p>With the latest Speed collection.</p> 
            </div>
            
            <div className="h-buttons">
                <div className="hero-button">
                   <a>SHOP WOMENS</a> 
                </div>
                <div className="hero-button">
                   <a>SHOP MENS</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default slider;
