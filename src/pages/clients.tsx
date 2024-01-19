import Image from 'next/image';
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageClient from '/public/image/Srabu/client1.jpg';
import ImageClient1 from '/public/image/Customer/axia.jpg';
import ImageClient2 from '/public/image/Customer/neosys.jpg';
import ImageClient3 from '/public/image/Customer/strider.jpg';
import ImageClient4 from '/public/image/Customer/parami.jpg';
import ImageClient5 from '/public/image/Customer/mk.jpg';
import ImageClient6 from '/public/image/Customer/han.jpg';
import ImageClient7 from '/public/image/Customer/Flexco.jpg';
import ImageClient8 from '/public/image/Customer/global.jpg';
import ImageClient9 from '/public/image/Customer/pss.jpg';
import ImageClient10 from '/public/image/Customer/pt-global-teknindo-berkatama.jpg';
import ImageClient11 from '/public/image/Customer/transnational.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function Clients() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (index: number) => {
    setCurrentImage(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const imageArray = [
    {
      img: ImageClient1,
      alt: 'Flexco',
    },
    {
      img: ImageClient2,
      alt: 'gvet',
    },

    {
      img: ImageClient3,
      alt: 'han',
    },
    {
      img: ImageClient4,
      alt: 'mk',
    },
    {
      img: ImageClient5,
      alt: 'pss',
    },
    {
      img: ImageClient6,
      alt: 'strider',
    },
    {
      img: ImageClient7,
      alt: 'heksaef',
    },
    {
      img: ImageClient8,
      alt: 'transnational',
    },
    {
      img: ImageClient9,
      alt: 'pt-global-teknindo-berkatama',
    },
    {
      img: ImageClient10,
      alt: 'pt-global-teknindo-berkatama',
    },
    {
      img: ImageClient11,
      alt: 'pt-global-teknindo-berkatama',
    },
  ];

  return (
    <>
      <div className="relative">
        <Image
          src={ImageClient}
          alt=""
          className="z-0 min-w-full h-[min(100vh,32rem)] object-cover lg:ob lg:object-cover pt-5 grid"
        />
        <div className="bg-greenTwo/10 w-full h-[min(100vh,26rem)] z-10 absolute top-0">
          <h1 className="text-white text-6xl font-bold tracking-wider text-start lg:px-40 px-20 my-40 justify-center items-center">
            OUR <br /> <div className="mt-5">CLIENT</div>
          </h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mx-auto justify-center lg:px-40 my-20">
        {imageArray.map((image, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="relative group cursor-pointer transition-all ease-in-out duration-300"
          >
            <Image
              src={image.img}
              alt={image.alt}
              className="group-hover:opacity-80 transition-opacity duration-300 relative h-[10rem]"
            />

            <div className="w-full h-full group-hover:bg-black/50 bg-transparent absolute top-0 left-0 text-center justify-center my-auto mx-auto items-center grid">
              <IoSearch className="text-center text-5xl hidden group-hover:grid group-hover:text-white group-hover:bg-white/20 rounded-full p-2" />
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-70 z-50 cursor-zoom-in">
          <div className="relative max-w-screen-md max-h-screen overflow-hidden pt-14">
            <Swiper
              zoom
              spaceBetween={10}
              slidesPerView={1}
              initialSlide={currentImage}
              navigation={true}
              modules={[Navigation]}
            >
              {imageArray.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image src={image.img} alt={image.alt} className="w-[40rem] h-[22rem] grid justify-center mx-auto" />
                </SwiperSlide>
              ))}
            </Swiper>
            <button onClick={closeModal} className="absolute top-0 right-[4rem] text-white text-2xl cursor-pointer">
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
