import React from 'react';
import Image from 'next/image';
import lmsImage from '/public/image/Srabu/lms1.jpg';
import lmsImage2 from '/public/image/Srabu/lmss.png';

export default function Lms() {
  return (
    <>
      <div className="relative">
        <Image src={lmsImage} alt="" className="z-0 w-full h-[min(100vh,25.5rem)] object-cover" />
        <div className="bg-greenTwo/10 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0">
          <h1 className="text-white text-6xl font-bold tracking-wider text-center my-36 justify-center items-center">
            LMS
          </h1>
        </div>
      </div>

      <div className="text-center">
        <h1 className="uppercase font-bold text-greenThree text-3xl mb-14 tracking-wider mt-20">
          LOGISTIC MANAGEMENT SYSTEM
        </h1>
        <h3 className="text-base text-greytext">
          Merupakan sistem operasional yang berfokus pada aktivitas gudang perusahaan yang terintegrasi dan
          terdigitalisasi dengan sistem <br />
          (web-based).
        </h3>
        <Image src={lmsImage2} alt="" className="px-20 my-10" />
      </div>
    </>
  );
}
