import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative bg-blue-300" id="about-us">
      <div className="relative h-80 overflow-hidden bg-blue-200 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692"
          alt="Team working"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">About Us</p>
          <p className="mt-6 text-base leading-7">
            We, at Some Tech Company, believe in the transformative power of technology. With a focus on designing products that combat everyday challenges, we strive to enhance user efficiency and productivity. Our team is fueled by an unwavering commitment to client satisfaction and continuous learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;