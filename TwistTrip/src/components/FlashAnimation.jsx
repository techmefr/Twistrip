import React from 'react';
import Lottie from 'lottie-react';
import flash from '../assets/logo/flash.json';
import '../App.css';

const FlashAnimation = ({ className }) => {
  return (
    <>
      <Lottie animationData={flash} loop={true} className={className} />;
    </>
  )
}

export default FlashAnimation;
