import HeroVideo from "../assets/images/Hero_video.mp4";
import logo from "../assets/logo/logoTwistTrip.png";
import FlashAnimation from "./FlashAnimation";

export default function HomePage() {
  return (
    <>
      <div className="hero-container">
        <img src={logo} className="siteLogo" alt="siteLogo" />
        <video className="heroVideo" src={HeroVideo} autoPlay muted loop />
        <h1 className="paragraphe">Transformez vos vacances en aventure !</h1>
        <p className="heroParagraph">Payez, partez, regrettez...</p>
        <FlashAnimation className="flash" />
      </div>
    </>
  );
}
