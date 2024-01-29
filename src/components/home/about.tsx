import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BiMoviePlay } from 'react-icons/bi';
import AboutImage from '/public/image/Srabu/aboutus.png';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/0wybm4HFvd4';
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="w-full grid lg:grid-cols-2 flex-col-reverse mt-20 gap-20 lg:pr-14 px-10 lg:px-3 lg:mb-36 mb-14"
      id="aboutus"
    >
      <div className="hidden lg:grid">
        <Image src={AboutImage} alt="" className="w-full scale-105 mt-10" />
      </div>
      <div>
        <h1 className="uppercase font-semibold tracking-widest text-greenThree text-4xl mb-10">ABOUT US</h1>
        <h3 className="font-bold text-base tracking-wider my-6">
          Sarana Buana Trans berdiri sejak tahun 2022 yang berpusat di Kota <br />
          Bekasi, Indonesia.
        </h3>
        <button
          className="uppercase bg-greenThree w-max text-xs flex h-max mb-6 text-white px-7 py-1 items-center gap-3"
          onClick={togglePopup}
        >
          <BiMoviePlay className="text-xl" /> Watch Our Video
        </button>
        <p className="text-justify text-greytext font-medium text-base tracking-wide mb-5">
          Sarana Buana Trans merupakan perusahaan yang menawarkan jasa transportasi, logistik, dan gudang, serta sistem
          operasional perusahaan yang dapat disesuaikan dengan kebutuhan pelanggan.
        </p>
        <p className="text-justify text-greytext font-medium text-base tracking-wide">
          Perkembangan era yang semakin cepat, mendorong setiap perusahaan untuk terus maju dan berkembang. Sarana Buana
          Trans hadir untuk membantu pelanggan kami dalam mewujudkan kegiatan operasional perusahaan yang aman dan
          lancar. Sehingga harapan kami, seluruh pelanggan kami mampu beradaptasi dan bertahan dalam persaingan bisnis
          yang semakin ketat bahkan sengit ini. Sarana Buana Trans akan selalu membantu dalam memberikan upaya maksimal
          kepada pelanggan kami dalam memenuhi kebutuhan jasa transportasi, logistik, dan gudang. Serta mengembangkan
          sistem operasional perusahaan yang terdigitalisasi.
        </p>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ overflow: 'hidden' }}>
          <div className="absolute inset-0 bg-black opacity-75" onClick={togglePopup}></div>
          <div className="z-10 bg-white p-4 rounded-lg shadow-lg w-2/3 relative">
            <button onClick={togglePopup} className="absolute -top-9 right-0 text-white">
              <h1 className="text-xl">X</h1>
            </button>
            <iframe
              src={videoUrl}
              style={{ width: '100%' }}
              height="500"
              frameBorder="0"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
