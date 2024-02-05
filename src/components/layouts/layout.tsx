'use client';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import ProgressBarProvider from '../providers/progress-bar-provider';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center center',
          end: '+=100%',
          scrub: true,
          pin: true,
          markers: true,
          scroller: '.smooth-scroll-gsap',
        },
      });

      tl.from(cardRef.current, {
        yPercent: 100,
        top: '100%',
      }).to(cardRef.current, {
        yPercent: -50,
        top: '50%',
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <ProgressBarProvider>
      <div className="h-screen relative">
        {!isHomePage && <Navbar />}
        <div>{children}</div>
        <Footer />
      </div>
    </ProgressBarProvider>
  );
};

export default Layout;
