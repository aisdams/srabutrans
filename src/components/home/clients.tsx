import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import CustImg1 from '/public/image/Customer/Flexco.jpg';
import CustImg2 from '/public/image/Customer/gvet.jpg';
import CustImg3 from '/public/image/Customer/han.jpg';
import CustImg4 from '/public/image/Customer/mk.jpg';
import CustImg5 from '/public/image/Customer/pss.jpg';
import CustImg6 from '/public/image/Customer/strider.jpg';
import CustImg7 from '/public/image/Customer/heksaef.jpg';
import CustImg8 from '/public/image/Customer/transnational.jpeg';
import CustImg9 from '/public/image/Customer/pt-global-teknindo-berkatama.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

export default function Clients() {
  const Clients = [
    {
      img: CustImg1,
      alt: 'Flexco',
    },
    {
      img: CustImg2,
      alt: 'gvet',
    },

    {
      img: CustImg3,
      alt: 'han',
    },
    {
      img: CustImg4,
      alt: 'mk',
    },
    {
      img: CustImg5,
      alt: 'pss',
    },
    {
      img: CustImg6,
      alt: 'strider',
    },
    {
      img: CustImg7,
      alt: 'heksaef',
    },
    {
      img: CustImg8,
      alt: 'transnational',
    },
    {
      img: CustImg9,
      alt: 'pt-global-teknindo-berkatama',
    },
  ];
  return (
    <div className="lg:mt-32 my-10 lg:mb-20 w-[min(90%,1280px)] mx-auto lg:px-0 px-10">
      <Swiper
        slidesPerView={8}
        spaceBetween={40}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 8,
          },
          1500: {
            slidesPerView: 8,
          },
        }}
        className="mySwiper"
      >
        {Clients.map((client, idx) => (
          <SwiperSlide key={idx}>
            <Image src={client.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
