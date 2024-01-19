import React from 'react';
import { BiUser } from 'react-icons/bi';
import { IoWalletOutline } from 'react-icons/io5';
import { CiShoppingBasket } from 'react-icons/ci';
import { MdLightbulbOutline } from 'react-icons/md';
import { MdOutlineSettingsSuggest } from 'react-icons/md';
import Imageadv from '/public/image/Srabu/advantages.png';
import Image from 'next/image';

export default function Advantages() {
  const Advantages = [
    {
      title: 'HARGA KOMPETITIF',
      paragraph:
        'Memberikan harga kompetitif kepada pelanggan sesuai dengan layanan berkualitas tinggi yang diberikan.',
      icon: <IoWalletOutline />,
    },
    {
      title: 'SDM PROFESIONAL DAN KOMPETEN',
      paragraph:
        'Memiliki SDM yang profesional dan kompeten terhadap produk dan layanan yang diberikan demi kepuasan pelanggan kami.',
      icon: <BiUser />,
    },
    {
      title: 'VARIATIF PRODUK DAN LAYANAN',
      paragraph: 'Menyediakan berbagai macam produk dan layanan untuk memenuhi kebutuhan pelanggan.',
      icon: <CiShoppingBasket />,
    },
  ];
  const AdvantagesTwo = [
    {
      title: 'UP-TO-DATE DAN INOVATIF',
      paragraph:
        'Mengikuti perkembangan zaman untuk membantu pelanggan agar tetap bertahan dalam persaingan di dunia bisnis.        ',
      icon: <MdLightbulbOutline />,
    },
    {
      title: 'CUSTOMIZABLE',
      paragraph: 'Menawarkan produk dan layanan yang dapat di custom sesuai keinginan pelanggan atau by request.',
      icon: <MdOutlineSettingsSuggest />,
    },
  ];
  return (
    <div className="grid justify-center mx-auto w-full lg:px-20 px-5 items-center">
      <h1 className="uppercase font-bold text-greenThree text-4xl mb-20 text-center">advantages</h1>
      <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-5">
        <div className="px-3">
          {Advantages.map((advantage, idx) => (
            <div className="flex items-start gap-5 mb-5" key={idx}>
              <span className="text-3xl text-gray-700">{advantage.icon}</span>
              <div>
                <h3 className="text-greenTwo font-semibold mb-5 tracking-wider">{advantage.title}</h3>
                <p className="text-greytext">{advantage.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Image src={Imageadv} alt="" />
        </div>
        <div className="">
          {AdvantagesTwo.map((advantagetwo, idx) => (
            <div className="flex items-start gap-5 mb-5 lg:mt-0 mt-10" key={idx}>
              <span className="text-3xl text-gray-700">{advantagetwo.icon}</span>
              <div>
                <h3 className="text-greenTwo font-semibold mb-5 tracking-wider">{advantagetwo.title}</h3>
                <p className="text-greytext">{advantagetwo.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
