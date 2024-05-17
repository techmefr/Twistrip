import PropTypes from "prop-types";
import Lottie from "lottie-react";
import flash from "../assets/logo/flash.json";
import "../App.css";

const FlashAnimation = ({ className }) => {
  return (
    <>
      <Lottie animationData={flash} loop={true} className={className} />;
    </>
  );
};

FlashAnimation.propTypes = {
  className: PropTypes.string,
};

export default FlashAnimation;
