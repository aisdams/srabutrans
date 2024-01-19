import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 p-3 cursor-pointer bg-green-500 rounded-full ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
      <MdKeyboardDoubleArrowUp className="text-white" />
    </div>
  );
};

export default ScrollToTopButton;
