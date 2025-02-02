import { useState } from "react";
import arrow_btn from "../assets/arrow_btn.png";
import pause_icon from "../assets/pause.png";
import play_icon from "../assets/play.png";
import "./Hero.css";

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

     
      <div className="hero-explore" onClick={() => setShowPopup(true)}>
        <p>Explore the Features</p>
        <img src={arrow_btn} alt="" style={{ width: "50px", height: "50px" }} />
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot-play orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot-play orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot-play orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
          <p style={{ color: "white" }}>See the video</p>
        </div>
      </div>

      {showPopup && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Feature Description</h2>
            <p>This feature allows you to explore various functionalities of our platform, making navigation easy and intuitive.</p>
            <button className="close-btn" onClick={() => setShowPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
