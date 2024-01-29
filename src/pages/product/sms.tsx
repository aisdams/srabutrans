import React from 'react';
import Image from 'next/image';
import smsImage from '/public/image/Srabu/sms1.jpg';

export default function Lms() {
  return (
    <>
      <div className="relative">
        <Image
          src={smsImage}
          alt=""
          className="z-0 w-full h-[min(100vh,25.5rem)] bg-cover object-cover bg-fixed bg-no-repeat"
        />
        <div className="bg-greenTwo/10 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0">
          <h1 className="text-white text-6xl font-bold tracking-wider text-center my-36 justify-center items-center">
            SMS
          </h1>
        </div>
      </div>

      <div className="md:text-center text-left mb-32 lg:px-0 px-8">
        <h1 className="uppercase font-bold text-greenThree text-3xl mb-14 tracking-wider mt-20">
          SALES MANAGEMENT SYSTEM
        </h1>
        <h3 className="text-base text-greytext">
          Merupakan sistem operasional perusahaan yang berfokus pada aktivitas sales atau penjualan perusahaan yang
          terintegrasi dan terdigitalisasi dengan sistem <br /> (web-based).
        </h3>
      </div>
    </>
  );
}
