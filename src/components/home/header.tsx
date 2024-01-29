import React, { useEffect, useState } from 'react';
import HeaderImage from '../../../public/image/Srabu/header1.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffset = scrollPosition * 0.1;

  return (
    <div
      className="relative bg-fixed bg-cover lg:bg-center bg-right-top bg-no-repeat bg-headernya z-0 min-w-full h-[100vh] overflow-hidden "
      style={{
        transform: `translateY(${parallaxOffset}px)`,
        backgroundImage: `url('/image/Srabu/header1.jpg')`,
      }}
    >
      <div className="absolute top-1/3 text-left text-white z-10 w-full lg:pl-24 pl-8">
        <h1 className="font-medium lg:text-7xl text-6xl mb-8">SRABU TRANS</h1>
        <h3 className="font-medium tracking-wide">
          TRANSPORTATION, LOGISTIC, WAREHOUSE SERVICES, <br /> AND COMPANY OPERATIONS MANAGEMENT SYSTEM
        </h3>
        <button className="uppercase px-8 bg-greenOne border border-white hover:bg-greenTwo mt-10 rounded-full text-xs py-2 cursor-pointer">
          <Link href="#aboutus" className="cursor-pointer">
            Learn More
          </Link>
        </button>
      </div>
    </div>
  );
}
