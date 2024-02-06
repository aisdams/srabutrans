import Link from 'next/link';
import React from 'react';

export default function WantToSee() {
  return (
    <div className="bg-greenTwo lg:flex grid lg:px-44 px-5 mx-auto justify-center items-center lg:gap-32 gap-10 py-20 lg:mb-32 mb-20 mt-5">
      <div className="grid lg:w-[min(50%,1280px)] mx-auto">
        <h1 className="text-white font-medium tracking-wider mb-2">WANT TO SEE OUR PRODUCTS?</h1>
        <h1 className="text-[#99c3af] font-medium tracking-wider">WE ARE ALWAYS OPEN TO INTERESTING SERVICES.</h1>
      </div>
      <button className="uppercase bg-[#cce1d7] px-10 text-xs hover:bg-white py-2">
        <Link href="#product">Lets view product</Link>
      </button>
    </div>
  );
}
