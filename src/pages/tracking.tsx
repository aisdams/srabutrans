'use client';
import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { IoIosSearch } from 'react-icons/io';
import TrackingImage from '/public/image/Srabu/tracking1.jpg';
import Styles from '../styles/tracking.module.css';
import { toast } from 'react-toastify';

export default function Tracking() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTrackingNumber(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (trackingNumber === '001951') {
      setShowTable(true);
    } else {
      setShowTable(false);
      toast('No Resi not found', {
        hideProgressBar: true,
        autoClose: 1000,
        type: 'error',
        position: 'top-right',
      });
    }
  };

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
        <Image
          src={TrackingImage}
          alt=""
          className="z-0 min-w-full h-[min(100vh,32rem)] object-cover lg:ob lg:object-cover grid bg-fixed bg-cover bg-center bg-no-repeat"
        />
        <div className="bg-greenTwo/10 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0 lg:pl-40 pl-14">
          <h1 className="text-white text-6xl font-bold tracking-wider text-start lg:mt-40 mt-52 justify-center items-center">
            TRACKING
          </h1>
          <h3 className="text-base italic text-white mt-5 px-14 !font-volk tracking-wide">Track your package here</h3>
        </div>
      </div>

      <div className="flex w-full items-center space-x-2 px-5 my-20 mx-auto justify-center">
        <input
          type="text"
          className="focus:uppercase w-[40rem] h-8 border border-black/35 px-5 rounded-md py-5"
          placeholder="No.Resi...."
          value={trackingNumber}
          onChange={handleInputChange}
        />
        <button className="bg-greenOne text-white py-2 px-3 rounded-md" type="button" onClick={handleSearchSubmit}>
          Lacak
        </button>
      </div>

      {showTable && (
        <div className="w-full px-24">
          <table
            className="w-full overflow-x-scroll !table-auto text-center mb-20 overflow-hidden right-0"
            suppressHydrationWarning={true}
          >
            <thead className="">
              <tr className="text-base font-semibold text-center">
                <th>No.</th>
                <th>Tanggal</th>
                <th>Pengirim</th>
                <th>Tujuan</th>
                <th>Penerima</th>
                <th>Service</th>
                <th>status</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2023-10-13</td>
                <td>Helen Bennett</td>
                <td>Palestine</td>
                <td>Island Trading</td>
                <td>EXPRESS STANDARD</td>
                <td>POD RETURN</td>
                <button className="px-3 py-2 bg-greenTwo rounded-md text-white mt-2" onClick={togglePopup}>
                  Details
                </button>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ overflow: 'hidden' }}>
          <div className="absolute inset-0 bg-black opacity-75" onClick={togglePopup}></div>
          <div className="z-10 bg-white p-4 rounded-lg shadow-lg w-2/3 relative" data-aos="zoom-in">
            <div className="">
              <button onClick={togglePopup} className="absolute top-3 right-5 text-black">
                <h1 className="text-xl font-semibold">X</h1>
              </button>
              <h1 className="font-bold text-xl mb-5">Tracking Details</h1>
              <div className="grid grid-cols-2 items-start">
                <div className="grid gap-2">
                  <div className="">
                    <h1 className="font-bold text-base">Tanggal Pengiriman</h1>
                    <h1 className="font-light text-sm">2023-01-03</h1>
                  </div>
                  <div className="">
                    <h1 className="font-bold text-base">Tujuan</h1>
                    <h1 className="font-light text-sm">KOTA. DENPASAR</h1>
                  </div>
                  <div className="">
                    <h1 className="font-bold text-base">Pengirim</h1>
                    <h1 className="font-light text-sm">AVK FUSION INDONESIA</h1>
                  </div>
                  <div className="">
                    <h1 className="font-bold text-base">Penerima</h1>
                    <h1 className="font-light text-sm">PT. TEKNIK JAYA SAKTI</h1>
                  </div>
                </div>

                <div className="overflow-y-scroll h-80">
                  <div className="overflow-hidden">
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                      <li className="mb-4 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          04-Januari-2023 09:19
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">PICKUP</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                          PAKET TELAH DI INPUT (MANIFESTED) [TANGERANG - CABANG BSD]
                        </p>
                      </li>
                      <li className="mb-4 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          04-Januari-2023 14:48
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ON DELIVERY</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          PAKET SEDANG DIBAWA KURIR KE ALAMAT TUJUAN
                        </p>
                      </li>
                      <li className="mb-4 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          09-Januari-2023 15:25
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">DELIVERED</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          PAKET TELAH DITERIMA OLEH [KURNIAWAN - PENERIMA LANGSUNG]
                        </p>
                      </li>
                      <li className="pb-4 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          07-Februari-2023 09:58
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">POD RETURN</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          PENGEMBALIAN POD DIKIRIM
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
