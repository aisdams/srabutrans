import React from 'react';
import Image from 'next/image';
import rentcarImage from '/public/image/Srabu/rc1.jpg';
import rentcarImage2 from '/public/image/Srabu/rcc.png';

export default function RentCar() {
  return (
    <>
      <div className="relative">
        <Image
          src={rentcarImage}
          alt=""
          className="z-0 w-full h-[min(100vh,25.5rem)] bg-cover object-cover bg-fixed bg-no-repeat"
        />
        <div className="bg-greenTwo/10 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0">
          <h1 className="text-white text-6xl font-bold tracking-wider text-center my-36 justify-center items-center">
            RENT CAR
          </h1>
        </div>
      </div>

      <div className="md:text-center text-left lg:px-0 px-8">
        <h1 className="uppercase font-bold text-greenThree text-3xl mb-14 tracking-wider mt-20">RENT CAR</h1>
        <h3 className="text-base text-greytext">
          Merupakan penyewaan berbagai jenis dan tipe mobil yang disesuaikan dengan kebutuhan pelanggan.
        </h3>
        <Image src={rentcarImage2} alt="" className="px-28 my-10" />
      </div>
    </>
  );
}
