/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import g1 from "../../assets/images/G0060068 (1).png";
import g2 from "../../assets/images/GOPR0007.png";
import g3 from "../../assets/images/GOPR0012.png";
import g4 from "../../assets/images/GOPR0146.png";
import g5 from "../../assets/images/GOPR0164.png";
import g6 from "../../assets/images/GOPR0194.png";
import g7 from "../../assets/images/GOPR0212.png";
import g8 from "../../assets/images/GOPR0234.png";
import g9 from "../../assets/images/GOPR0280 (1).png";
import g10 from "../../assets/images/GOPR0349 (1).png";
import g11 from "../../assets/images/GOPR0350 (2).png";
import g12 from "../../assets/images/GOPR0357 (1).png";
import g13 from "../../assets/images/GOPR0369 (1).png";
import g14 from "../../assets/images/GOPR0404 (1).png";
import g15 from "../../assets/images/GOPR0490 (2).png";
import g16 from "../../assets/images/GOPR0494.png";
import g17 from "../../assets/images/GOPR0525.png";
import g18 from "../../assets/images/GOPR0544.png";
import g19 from "../../assets/images/GOPR0545.png";
import g20 from "../../assets/images/GOPR0584.png";
import g21 from "../../assets/images/GOPR0586 (1).png";
import g22 from "../../assets/images/GOPR0587 (1).png";
import g23 from "../../assets/images/GOPR0588.png";
import g24 from "../../assets/images/GOPR0603.png";

export default function Carousel() {

  return (
    <div className="carousel-wrapper">
      <AliceCarousel
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={false}
      >
        <div>
          <img src={g1} className="sliderimg" />
        </div>
        <div>
          <img src={g2} className="sliderimg" />
        </div>
        <div>
          <img src={g3} className="sliderimg" />
        </div>
        <div>
          <img src={g4} className="sliderimg" />
        </div>
        <div>
          <img src={g5} className="sliderimg" />
        </div>
        <div>
          <img src={g6} className="sliderimg" />
        </div>
        <div>
          <img src={g7} className="sliderimg" />
        </div>
        <div>
          <img src={g8} className="sliderimg" />
        </div>
        <div>
          <img src={g9} className="sliderimg" />
        </div>
        <div>
          <img src={g10} className="sliderimg" />
        </div>
        <div>
          <img src={g11} className="sliderimg" />
        </div>
        <div>
          <img src={g12} className="sliderimg" />
        </div>
        <div>
          <img src={g13} className="sliderimg" />
        </div>
        <div>
          <img src={g14} className="sliderimg" />
        </div>
        <div>
          <img src={g15} className="sliderimg" />
        </div>
        <div>
          <img src={g16} className="sliderimg" />
        </div>
        <div>
          <img src={g17} className="sliderimg" />
        </div>
        <div>
          <img src={g18} className="sliderimg" />
        </div>
        <div>
          <img src={g19} className="sliderimg" />
        </div>
        <div>
          <img src={g20} className="sliderimg" />
        </div>
        <div>
          <img src={g21} className="sliderimg" />
        </div>
        <div>
          <img src={g22} className="sliderimg" />
        </div>
        <div>
          <img src={g23} className="sliderimg" />
        </div>
        <div>
          <img src={g24} className="sliderimg" />
        </div>
      </AliceCarousel>
    </div>
  );
}