import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import NavbarData from '@/components/data/navbardata';
import Logo from '/public/image/logoputih.png';
import Link from 'next/link';
import enableSmoothScroll from '../data/enableSmoothScroll';

interface NavbarItem {
  title: string;
  link: string;
  scrollId?: string;
  children?: NavbarItem[];
}

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    enableSmoothScroll();
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

  const [isAboutHovered, setIsAboutHovered] = useState(false);

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
    <div className={`${scrolled ? 'top-8' : ''} w-full top-0 bg-greenThree py-2 px-20 !z-20 fixed`}>
      <nav className="flex justify-between z-20">
        <div className="Logo">
          <Image src={Logo} alt="" className="w-[150px] h-[30px]" />
        </div>
        <div className="flex gap-8">
          {NavbarData.map((navbar: NavbarItem, idx: number) => (
            <ul key={idx}>
              <li onMouseEnter={handleMouseEnter}>
                <Link
                  href={navbar.link}
                  scroll={false}
                  onClick={() => scrollToElement(navbar.scrollId || '')}
                  className="uppercase font-medium text-sm tracking-wide text-white"
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
                </div>
              )}
            </ul>
          ))}
        </div>
      </nav>
    </div>
  );
}
