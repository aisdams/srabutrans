import Image from 'next/image';
import seaImage from '/public/image/sea-01.png';
import mapImage from '/public/image/map_icon.png';
import React, { useEffect, useState } from 'react';
import planeImage from '/public/image/plane-01.png';

export default function SecOne() {
  const secOne = [
    {
      title: 'INTERNATIONAL & DOMESTIC SHIPPING',
      img: mapImage,
    },
    {
      title: 'AIR FREIGHT',
      img: planeImage,
    },
    {
      title: 'SEA FREIGHT',
      img: seaImage,
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 gap-8 lg:my-40 my-10 px-20 mx-auto max-w-screen-xl mt-32">
      {secOne.map((section, idx) => (
        <div key={idx} className="mx-auto grid items-center justify-center text-center">
          {section.img && <Image src={section.img} alt="" className="mx-auto" />}
          <h3 className="text-greenTwo font-medium mt-5 tracking-wider">{section.title}</h3>
        </div>
      ))}
    </div>
  );
}
