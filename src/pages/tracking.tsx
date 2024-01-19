'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosSearch } from 'react-icons/io';
import TrackingImage from '/public/image/Srabu/tracking1.jpg';

export default function Tracking() {
  const [isOpen, setIsOpen] = useState(false);
  // const videoUrl = 'https://www.youtube.com/embed/0wybm4HFvd4';
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const detailsTracking = [
    {
      status: 'Pickup',
      tanggal: '13 Oktober 2023 20:33 WIB',
      ket: 'Barang telah diambil di HUB Jakarta - SML (Cibubur)',
    },
    {
      status: 'Out',
      tanggal: '14 Oktober 2023 12:10 WIB',
      ket: 'Barang telah keluar dari Jakarta',
    },
    {
      status: 'In',
      tanggal: '17 Oktober 2023 10:19',
      ket: 'Barang telah tiba di HUB Palestine',
    },
    {
      status: 'On Delivery',
      tanggal: '17 Oktober 2023 15:33 WIB',
      ket: 'Barang sedang dibawa kurir ke alamat tujuan',
    },
    {
      status: 'Delivered',
      tanggal: '18 Oktober 2023 07.12 WIB',
      ket: 'Barang telah diterima oleh Island Trading - penerima langsung',
    },
  ];
  return (
    <>
      <div className="relative pt-10">
        <Image src={TrackingImage} alt="" className="z-0 min-w-full h-[min(100vh,28rem)] object-cover" />
        <div className="bg-greenTwo/10 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0 lg:pl-40 pl-14">
          <h1 className="text-white text-6xl font-bold tracking-widest text-start lg:mt-40 mt-52 justify-center items-center">
            TRACKING
          </h1>
          <h3 className="text-base italic text-white mt-5">Track your package here</h3>
        </div>
      </div>

      <div className="flex w-full items-center space-x-2 px-5 my-20 mx-auto justify-center">
        <input
          type="text"
          className="focus:uppercase w-[40rem] h-8 border border-black/35 px-5 rounded-md"
          placeholder="Search...."
        />
        <button>
          <IoIosSearch />
        </button>
      </div>

      <div className="lg:px-20 px-3 mb-20 w-full overflow-hidden">
        <table className="w-full lg:px-20 overflow-x-scroll !table-auto">
          <thead className="border border-black/20 border-y-2 border-x-0">
            <tr className="text-left text-base font-semibold text-gray-900/70">
              <th>No.</th>
              <th>Tanggal</th>
              <th>Tujuan</th>
              <th>Pengirim</th>
              <th>Penerima</th>
              <th>Resi</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2023-10-13</td>
              <td>Palestine</td>
              <td>Helen Bennett</td>
              <td>Island Trading</td>
              <td>0008795</td>
              <button className="px-3 py-2 bg-greenTwo rounded-md text-white mt-5" onClick={togglePopup}>
                Details
              </button>
            </tr>
          </tbody>
        </table>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ overflow: 'hidden' }}>
          <div className="absolute inset-0 bg-black opacity-75" onClick={togglePopup}></div>
          <div className="z-10 bg-white p-4 rounded-lg shadow-lg w-2/3 relative" data-aos="zoom-in">
            <div className="">
              <div>
                <h1 className="font-bold text-2xl mb-5">Order Details</h1>
                <div className="text-gray-900/70 font-light text-base">
                  <h3>Resi : 0008795</h3>
                  <h3>Tanggal : 2023-10-13</h3>
                  <h3>Tujuan : Palestine</h3>
                  <h3>Pengirim : Helen Bennett</h3>
                  <h3>Penerima : Island Trading</h3>
                </div>
              </div>

              <div className="font-bold text-2xl">
                <h1 className="mb-5">Tracking Order</h1>
                <div className="overflow-y-scroll">
                  <table className="w-full px-20">
                    <thead className="border border-black/20 border-y-2 border-x-0">
                      <tr className="text-left text-base font-semibold text-gray-900/70">
                        <th>Status</th>
                        <th>Tanggal</th>
                        <th>Keterangan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {detailsTracking.map((detailtrack, idx) => (
                        <tr key={idx} className="text-base font-normal">
                          <td className="font-semibold py-3">{detailtrack.status}</td>
                          <td className="py-3">{detailtrack.tanggal}</td>
                          <td className="py-3">{detailtrack.ket}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <button onClick={togglePopup} className="bg-red-500 py-1 rounded-md text-white text-center w-full mt-5">
                <h1 className="text-xl">Close</h1>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
