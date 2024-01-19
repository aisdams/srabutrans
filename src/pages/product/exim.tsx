import React from 'react';
import Image from 'next/image';
import EximFlow from '/public/image/Srabu/eximm.png';
import EximImage from '/public/image/Srabu/exim1.jpg';

export default function Exim() {
  return (
    <>
      <div className="relative">
        <Image src={EximImage} alt="" className="z-0 h-[min(100vh,26rem)] pt-5" />
        <div className="bg-greenTwo/10 w-full h-[min(100vh,26rem)] z-10 absolute mx-auto justify-center items-center my-auto top-0">
          <h1 className="text-white text-6xl font-bold tracking-wider text-center my-36 justify-center items-center">
            EXPORT IMPORT
          </h1>
        </div>
      </div>

      <div className="text-center lg:mt-40 mt-10">
        <h1 className="text-greenThree text-4xl mb-14 font-semibold tracking-wide">EXPORT - IMPORT (EXIM)</h1>
        <p className="text-base text-greytext lg:px-56 px-10">
          Merupakan layanan jasa logistik dan pengiriman barang ekspor maupun impor ke seluruh destinasi global. Kami
          menyediakan air freight maupun sea freight, sekaligus membantu dalam proses customs clearance untuk barang
          pelanggan kami
        </p>
      </div>

      <Image src={EximFlow} alt="" className="w-full px-32 my-10" />
    </>
  );
}
