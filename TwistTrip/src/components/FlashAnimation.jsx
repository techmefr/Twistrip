import React from 'react';
import Lottie from 'lottie-react';
import flash from '../assets/logo/flash.json';

const FlashAnimation = () => {
  return (
    <>
      <Lottie animationData={flash} loop={true} />;
    </>
  )
}

export default FlashAnimation;
