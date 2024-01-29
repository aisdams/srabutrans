import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsFlag } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import { GrMapLocation } from 'react-icons/gr';
import ImageScore from '/public/image/Srabu/score.jpg';
import ImageContactUs from '/public/image/Srabu/contactus.png';

export default function ContactUs() {
  const Counters = [
    {
      title: '520',
      paragraph: 'Covered Area',
      icon: <AiOutlineGlobal />,
    },
    {
      title: '36',
      paragraph: 'Branch',
      icon: <BsFlag />,
    },
    {
      title: '600',
      paragraph: 'Customers',
      icon: <BiUser />,
    },
    {
      title: '20000',
      paragraph: 'Shipping',
      icon: <GrMapLocation />,
    },
  ];
  const [countedTitles, setCountedTitles] = useState(Counters.map((counter) => 0));
  useEffect(() => {
    const delay = 50;
    const step = 1;

    const interval = setInterval(() => {
      let updatedCountedTitles = [...countedTitles];
      let allTitlesCounted = true;

      Counters.forEach((counter, idx) => {
        const targetCount = parseInt(counter.title, 10);
        if (countedTitles[idx] < targetCount) {
          updatedCountedTitles[idx] = Math.min(countedTitles[idx] + step, targetCount);
          allTitlesCounted = false;
        }
      });

      if (allTitlesCounted) {
        clearInterval(interval);
      }

      setCountedTitles(updatedCountedTitles);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [countedTitles]);

  return (
    <>
      <div className="relative">
        <Image
          src={ImageContactUs}
          alt=""
          className="z-0 min-w-full h-[min(100vh,32rem)] object-cover lg:ob lg:object-cover grid bg-fixed bg-cover bg-center bg-no-repeat"
        />
        <div className="bg-greenTwo/10 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0">
          <h1 className="uppercase text-white text-6xl font-bold tracking-wider text-center mt-36 justify-center items-center">
            SRABUTRANS
          </h1>
          <h3 className="italic text-white text-center justify-center items-center text-base mt-8 !font-volk">
            Sarana Buana Trans merupakan perusahaan yang menawarkan jasa <br /> transportasi, logistik, dan gudang,
            serta sistem operasional perusahaan
          </h3>
        </div>
      </div>

      <div className=" mt-20 mb-40 px-20">
        <h1 className="uppercase font-bold text-greenThree text-4xl mb-14 text-center">Contact Us</h1>
        <div className="lg:flex grid gap-10 items-start">
          <div className="lg:w-[50rem] w-full">
            <iframe
              width={800}
              height="300"
              // frameborder="0"
              // scrolling="no"
              // marginheight="0"
              // marginwidth="0"
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0999430995835!2d106.92495551418419!3d-6.381099564191246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6994a6f5c560ff%3A0x98afbe4373b0317a!2sPT%20Sarana%20Mulya%20Logistik!5e0!3m2!1sid!2sid!4v1637824863378!5m2!1sid!2sid"'
              // src="https://www.google.com/maps/embed/v1/place?q=PT.+LinkExpress+Cibubur+(Head+Office)&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              // src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1982.6044839252481!2d106.94002!3d-6.366997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff989a705829b3a2!2sPT.%20INSPIRY%20INDONESIA%20KONSULTAN!5e0!3m2!1sen!2sus!4v1665826439901!5m2!1sen!2sus'
            ></iframe>
          </div>
          <div className="lg:mt-0 mt-20">
            <div className="flex gap-5 items-start">
              <span className="text-2xl text-gray-600">
                <FiMapPin />
              </span>
              <div className="grid">
                <h1 className="text-greenTwo text-lg tracking-wide font-semibold mb-5">LOCATION</h1>
                <p>
                  Citra Grand Cibubur CBD Jl. Citra Grand <br /> II Blok AR 19 Kota Bekasi, <br /> Jawa Barat 17435
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-8">
              <span className="text-2xl text-gray-600">
                <MdOutlineMail />
              </span>
              <div className="grid">
                <h1 className="text-greenTwo text-lg tracking-wide font-semibold mb-5">CONTACT</h1>
                <p>Email: info@srabutrans.com</p>
                <p className="mt-3">Phone: +62 878 8007 0051</p>
              </div>
            </div>
          </div>{' '}
        </div>
      </div>

      <div className="relative">
        <Image src={ImageScore} alt="" className="z-0 lg:min-w-min w-full h-[min(100vh,30rem)] object-cover" />
        <div className="bg-gray-900/80 w-full h-[min(100vh,30rem)] z-10 absolute top-0">
          <div className="my-20 grid mx-auto text-white">
            <h1 className="text-center text-4xl mb-20">SCOREBOARD</h1>

            <div className="grid grid-cols-4 gap-36 text-center justify-center mx-auto">
              {Counters.map((count, idx) => (
                <div className="mx-auto text-center justify-center items-center" key={idx}>
                  <span className="text-5xl mx-auto mb-5 text-center justify-center grid">{count.icon}</span>
                  <h1>{countedTitles[idx]}</h1>
                  <h3 className="tracking-widest text-sm italic font-light">{count.paragraph}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
