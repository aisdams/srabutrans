import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const socialmedia = [
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/srabutrans/',
      icon: <FaInstagram />,
    },
    {
      title: 'Tiktok',
      link: '/#',
      icon: <FaTiktok />,
    },
    {
      title: 'Youtube',
      link: '/#',
      icon: <FaYoutube />,
    },
  ];
  const contacts = [
    {
      title: 'Location',
      paragraph: 'Citra Grand Cibubur CBD Jl. Citra Grand II Blok AR 19 Kota Bekasi, Jawa Barat 17435',
      icon: <FiMapPin />,
    },
    {
      title: 'Email',
      paragraph: 'info@srabutrans.com',
      icon: <MdOutlineMail />,
    },
    {
      title: 'Phone',
      paragraph: '+62 878 8007 0051',
      icon: <BsTelephone />,
    },
  ];
  return (
    <div className="w-full bg-greenTwo">
      <div className="lg:px-20 px-10 lg:grid grid-cols-4 text-white pt-14 gap-5 items-start">
        <div className="grid">
          <h1 className="mb-3 font-bold">ABOUT SRABUTRANS</h1>
          <hr className="w-full mb-5 border border-dotted border-white" />
          <h3 className="tracking-wide">
            Sarana Buana Trans merupakan perusahaan yang menawarkan jasa transportasi, logistik, dan gudang, serta
            sistem operasional perusahaan.
          </h3>
        </div>
        <div className="grid lg:mt-0 mt-5">
          <h1 className="mb-3 font-bold">OFFICE HOURS</h1>
          <hr className="w-full mb-5 border border-dotted border-white" />
          <h3 className="mb-3">Senin - Jum{`'`}at : 09:00 - 17:00</h3>
          <h3 className="mb-3">Sabtu : 09:00 - 14:00</h3>
          <h3 className="mb-3">Minggu : Tutup</h3>
        </div>
        <div className="grid lg:mt-0 mt-5">
          <h1 className="mb-3 font-bold">SOCIAL MEDIA</h1>
          <hr className="w-full mb-5 border border-dotted border-white" />
          {socialmedia.map((ssc, idx) => (
            <div className="flex items-center gap-3 mt-5" key={idx}>
              <span>{ssc.icon}</span>
              <p>{ssc.title}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:mt-0 mt-5">
          <h1 className="mb-3 font-bold">CONTACT</h1>
          <hr className="w-full mb-5 border border-dotted border-white" />
          {contacts.map((contact, idx) => (
            <div key={idx} className="flex gap-6 mt-5">
              <span className="text-4xl">{contact.icon}</span>
              <div className="grid">
                <h1 className="font-semibold tracking-wider">{contact.title}</h1>
                <h3>{contact.paragraph}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-full bg-white lg:mt-20 mt-10" />
      <h1 className="text-white px-20 py-3 font-medium tracking-widest">© 2023 SRABUTRANS , ALL RIGHTS RESERVED</h1>
    </div>
  );
}
