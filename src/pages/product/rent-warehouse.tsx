import React from 'react';
import Image from 'next/image';
import rentwarehouseImage from '/public/image/Srabu/rw.jpg';
import rentwarehouseImage2 from '/public/image/Srabu/rww.png';

export default function RentWarehouse() {
  return (
    <>
      <div className="relative">
        <Image
          src={rentwarehouseImage}
          alt=""
          className="z-0 w-full h-[min(100vh,25.5rem)]  object-cover lg:object-cover pt-5 grid bg-fixed bg-cover bg-center bg-no-repeat"
        />
        <div className="bg-greenTwo/10 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0">
          <h1 className="text-white text-6xl font-bold tracking-wider text-center my-36 justify-center items-center">
            RENT <br />
            <div className="mt-5">WAREHOUSE</div>
          </h1>
        </div>
      </div>

      <div className="text-center">
        <h1 className="uppercase font-bold text-greenThree text-3xl mb-14 tracking-wider mt-20">RENT WAREHOUSE</h1>
        <h3 className="text-base text-greytext">
          Merupakan sistem operasional yang berfokus pada aktivitas gudang perusahaan yang terintegrasi dan
          terdigitalisasi dengan sistem <br /> (web-based).
        </h3>
        <Image src={rentwarehouseImage2} alt="" className="px-28 my-10" />
      </div>
    </>
  );
}
