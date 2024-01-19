import React, { useEffect, useState } from 'react';
import HeaderImage from '/public/image/Srabu/header1.jpg';
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
    <div className="relative w-full" style={{ transform: `translateY(${parallaxOffset}px)` }}>
      <div className="z-0 md:min-w-full h-[min(100vh,38rem)] overflow-hidden">
        <Image src={HeaderImage} alt="" className="object-cover w-full h-full" id="home" />
      </div>
      <div className="bg-greenTwo/10 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0 lg:pl-24 pl-10 text-white my-40">
        <h1 className="font-medium text-7xl mb-8">SRABU TRANS</h1>
        <h3 className="text-justify font-medium tracking-wide">
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
