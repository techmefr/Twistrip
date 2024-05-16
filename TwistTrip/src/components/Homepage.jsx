import React from "react";
import HeroVideo from "../assets/Images/Hero_video.mp4";
import logo from "../assets/logo/logoTwistTrip.png";

export default function HomePage() {
  return (
    <>
      <div className="hero-container">
        <img src={logo} className="siteLogo" alt="siteLogo" />
        <video className="heroVideo" src={HeroVideo} autoPlay muted loop />
        <div className="nav-container">
          <h1 className="title">Hello</h1>
          <h2 className="subtitle">good day</h2>
          <p className="paragraphe">text</p>
        </div>
      </div>
    </>
  );
}
