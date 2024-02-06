import React from 'react';
import ImageProduct1 from '../../../public/image/Srabu/exim.png';
import ImageProduct2 from '../../../public/image/Srabu/wms.png';
import ImageProduct3 from '../../../public/image/Srabu/lms.png';
import ImageProduct4 from '../../../public/image/Srabu/sms.png';
import ImageProduct5 from '../../../public/image/Srabu/rc.png';
import ImageProduct6 from '../../../public/image/Srabu/rw.png';
import Image from 'next/image';
import Link from 'next/link';

export default function OurProduct() {
  const products = [
    {
      title: 'EXPORT IMPORT',
      link: '/product/exim',
      image: ImageProduct1,
    },
    {
      title: 'WAREHOUSE MANAGEMENT SYSTEM (WMS)',
      link: '/product/wms',
      image: ImageProduct2,
    },
    {
      title: 'LOGISTIC MANAGEMENT SYSTEM (LMS)',
      link: '/product/lms',
      image: ImageProduct3,
    },
    {
      title: 'SALES MANAGEMENT SYSTEM (SMS)',
      link: '/product/sms',
      image: ImageProduct4,
    },
    {
      title: 'RENT CAR',
      link: '/product/rent-car',
      image: ImageProduct5,
    },
    {
      title: 'RENT WAREHOUSE',
      link: '/product/rent-warehouse',
      image: ImageProduct6,
    },
  ];
  return (
    <div className="mb-24" id="product">
      <h1 className="uppercase font-bold text-greenThree text-4xl mb-14 text-center">Our Product</h1>
      <div className="grid lg:grid-cols-3 gap-14 text-center w-[min(90%,1280px)] mx-auto lg:px-0 px-10">
        {products.map((product, idx) => (
          <div key={idx}>
            <Link href={product.link} className="hover:opacity-30 duration-500 transition-all">
              <Image src={product.image} alt="" className="bg-contain" />
              <h3 className="text-greenTwo font-bold">{product.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
