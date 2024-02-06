import React, { useState } from 'react';
import { BiMoviePlay } from 'react-icons/bi';
import ImageCommit from '/public/image/Srabu/komit.png';
import Image from 'next/image';

export default function OurCommit() {
  const [isOpen, setIsOpen] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/0wybm4HFvd4';
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block w-[min(90%,1280px)] mx-auto lg:mb-52 mb-10" id="commitment">
      <div className="lg:flex grid flex-1 items-center">
        <div className="text-justify text-greytext font-medium">
          <h1 className="uppercase font-bold text-greenThree text-4xl mb-12">Our Commitment</h1>
          <button
            className="uppercase bg-greenThree w-max text-xs flex h-max mb-8 text-white px-7 py-1 items-center gap-3"
            onClick={togglePopup}
          >
            <BiMoviePlay className="text-xl" /> Watch Our Video
          </button>
          <h1>
            Produk dan layanan kami bukan hanya sekedar memberikan barang dan jasa kepada pelanggan kami, melainkan kami
            memastikan kenyamanan, kemudahan, dan rasa aman selama proses pelayanan berlangsung. Kami juga memastikan
            layanan yang Anda dapat telah sesuai dan kepuasan Anda adalah prioritas kami.
          </h1>
          <h1>
            Kami berkomitmen tinggi untuk memberikan kualitas pelayanan yang terbaik dengan selalu mengembangkan dan
            mengikuti perkembangan era. Melalui SDM yang profesional, kami membuktikan akan memberikan kinerja yang
            optimal kepada seluruh pelanggan kami. Dengan memprioritaskan pelanggan kami, maka kami akan menjadi pilihan
            utama yang dapat dipercaya.
          </h1>
        </div>
        <Image src={ImageCommit} alt="" className="w-[40rem]" />
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
