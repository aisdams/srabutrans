import React from 'react';
import Image from 'next/image';
import WmsImage from '/public/image/Srabu/wms1.jpg';
import WmsImage2 from '/public/image/Srabu/wmss.png';

export default function Wms() {
  return (
    <>
      <div className="relative">
        <Image src={WmsImage} alt="" className="z-0 w-full h-[min(100vh,25.5rem)] object-cover" />
        <div className="bg-greenTwo/10 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0">
          <h1 className="text-white text-6xl font-bold tracking-wider text-center my-36 justify-center items-center">
            WMS
          </h1>
        </div>
      </div>

      <div className="text-center">
        <h1 className="uppercase font-bold text-greenThree text-3xl mb-14 tracking-wider mt-20">
          WAREHOUSE MANAGEMENT SYSTEM
        </h1>
        <h3 className="text-base text-greytext">
          Merupakan sistem operasional yang berfokus pada aktivitas gudang perusahaan yang terintegrasi dan
          terdigitalisasi dengan sistem <br /> (web-based).
        </h3>
        <Image src={WmsImage2} alt="" className="px-20 my-20" />
      </div>
    </>
  );
}
