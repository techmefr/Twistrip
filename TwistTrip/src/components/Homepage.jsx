import HeroVideo from "../assets/Images/Hero_video.mp4";
import logo from "../assets/logo/logoTwistTrip.png";

export default function HomePage() {
  return (
    <>
      <div className="hero-container">
        <img src={logo} className="siteLogo" alt="siteLogo" />
        <video className="heroVideo" src={HeroVideo} autoPlay muted loop />
        <h1 className="paragraphe">Transformez vos vacances en aventure !</h1>
        <h2>Payez, partez, regrettez...</h2>
      </div>
    </>
  );
}
