import React from 'react';
import Image from 'next/image';
import MissionOne from '/public/image/misi1.png';
import MissionTwo from '/public/image/misi2.png';
import MissionThree from '/public/image/misi3.png';

export default function VisionMission() {
  return (
    <div className="text-center mx-auto grid  w-[min(90%,1280px)]">
      <h1 className="uppercase font-bold text-greenThree text-4xl mb-14" id="vision&mision">
        VISION
      </h1>
      <h3 className="text-greenTwo font-medium text-[16px]">
        Menjadi perusahaan jasa transportasi, logistik, dan gudang, serta sistem operasional perusahaan yang aman dan
        terpercaya di Indonesia dengan mengutamakan layanan berbasis teknologi yang handal dan sumber daya manusia yang
        kompeten.
      </h3>
      <h1 className="uppercase font-bold text-greenThree text-4xl my-14">MISION</h1>
      <div className="grid lg:grid-cols-3">
        <div className="overflow-hidden">
          <Image src={MissionOne} alt="" />
        </div>
        <div className="overflow-hidden">
          <Image src={MissionTwo} alt="" />
        </div>
        <div className="overflow-hidden">
          <Image src={MissionThree} alt="" />
        </div>
      </div>
    </div>
  );
}
