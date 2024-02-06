import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Inter } from 'next/font/google';
import { IoIosArrowDown, IoIosArrowUp, IoIosMenu } from 'react-icons/io';
import About from '@/components/home/about';
import Header from '@/components/home/header';
import SecOne from '@/components/home/SecOne';
import Logo from '/public/image/logoputih.png';
import Clients from '@/components/home/clients';
import Navbar from '@/components/layouts/navbar';
import React, { useEffect, useState } from 'react';
import ImageVal from '../../public/image/nilai.png';
import OurCommit from '@/components/home/our-commit';
import Advantages from '@/components/home/advantages';
import WantToSee from '@/components/home/want-to-see';
import OurProduct from '@/components/home/our-product';
import NavbarData from '@/components/data/navbardata';
import VisionMission from '@/components/home/vision&mission';
import ScrollToTopButton from '../components/ScrollToTopButton';
import enableSmoothScroll from '@/components/data/enableSmoothScroll';

interface NavbarItem {
  title: string;
  link: string;
  scrollId?: string;
  children?: NavbarItem[];
}

export default function Home() {
  const [isTop, setIsTop] = useState(true);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsTop(scrollPosition === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    enableSmoothScroll();

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChildrenClick = (children: NavbarItem[] | undefined) => {
    if (children) {
      children.forEach((child) => {
        if (child.scrollId) {
          scrollToElement(child.scrollId);
        }
        if (child.children) {
          handleChildrenClick(child.children);
        }
      });
    }
  };

  const handleAboutMouseEnter = () => {
    setIsAboutHovered(true);
  };

  const handleAboutMouseLeave = () => {
    setIsAboutHovered(false);
  };

  const handleMouseEnter: React.MouseEventHandler<HTMLLIElement> = (event) => {
    if (event.currentTarget.textContent === 'About Us') {
      handleAboutMouseEnter();
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as Element | null;

    if (!relatedTarget?.closest('.about-submenu')) {
      setIsAboutHovered(false);
    }
  };
  return (
    <main className="relative">
      <div className="">
        <div
          className={`w-full fixed top-0 py-2 lg:px-24 px-10 z-20 ${
            isTop ? 'bg-transparent py-5' : 'bg-greenThree'
          } transition-all`}
        >
          <nav className="flex justify-between z-20">
            <div className="Logo">
              <Image src={Logo} alt="" className="w-[150px] h-[30px]" />
            </div>
            {isMobileView ? (
              <div className="flex items-center">
                <Sheet>
                  <SheetTrigger>
                    <IoIosMenu className="text-2xl text-white" />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetDescription className="grid my-20 text-left gap-7">
                        {NavbarData.map((navbar: NavbarItem, idx: number) => (
                          <ul key={idx}>
                            <li>
                              <Link
                                href={navbar.link}
                                scroll={false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveNavItem(activeNavItem === idx ? null : idx);
                                  scrollToElement(navbar.scrollId || '');
                                }}
                                className="uppercase font-medium text-sm tracking-wide flex items-center gap-3"
                              >
                                {navbar.title}
                                {navbar.children &&
                                  (activeNavItem === idx ? (
                                    <IoIosArrowUp className="arrow" />
                                  ) : (
                                    <IoIosArrowDown className="arrow" />
                                  ))}
                              </Link>
                            </li>

                            {navbar.children && activeNavItem === idx && (
                              <div className={`about-submenu bg-white mt-3`}>
                                {navbar.children.map((child, childIdx) => (
                                  <ul key={childIdx}>
                                    <li>
                                      <Link
                                        href={child.link}
                                        className="uppercase text-base font-light tracking-wide text-black"
                                        onClick={() => {
                                          setIsAboutHovered(false);
                                          setActiveNavItem(null);
                                        }}
                                      >
                                        {child.title}
                                      </Link>
                                    </li>
                                  </ul>
                                ))}
                              </div>
                            )}
                          </ul>
                        ))}
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            ) : (
              <div className="flex gap-8 items-center">
                {NavbarData.map((navbar: NavbarItem, idx: number) => (
                  <ul key={idx}>
                    <li onMouseEnter={handleMouseEnter}>
                      <Link
                        href={navbar.link}
                        scroll={false}
                        onClick={() => scrollToElement(navbar.scrollId || '')}
                        className="uppercase font-medium text-sm text-[#b7e6bd] tracking-widest flex items-center gap-3"
                      >
                        {navbar.title}
                      </Link>
                    </li>

                    {navbar.children && navbar.title === 'About Us' && (
                      <div
                        onMouseLeave={handleMouseLeave}
                        className={`${
                          isAboutHovered ? 'block' : 'hidden'
                        } about-submenu bg-greenThree absolute mt-2 pr-8 pl-5 py-3 space-y-2`}
                      >
                        {navbar.children.map((child, childIdx) => (
                          <ul key={childIdx}>
                            <li>
                              <Link href={child.link} className="uppercase text-xs tracking-wide text-white">
                                {child.title}
                              </Link>
                            </li>
                          </ul>
                        ))}
                      </div>
                    )}
                  </ul>
                ))}
              </div>
            )}
          </nav>
        </div>
      </div>
      <Header />

      <SecOne />
      <About />
      <div id="vision&mision">
        <VisionMission />
      </div>
      <WantToSee />
      <OurCommit />
      <div className="mx-auto w-[min(90%,1280px)] my-20" id="value">
        <h1 className="uppercase font-bold text-greenThree text-4xl mb-14 text-center">Our Value</h1>
        <Image src={ImageVal} alt="" />
      </div>
      <OurProduct />
      <Advantages />
      <Clients />
      <ScrollToTopButton />
    </main>
  );
}
