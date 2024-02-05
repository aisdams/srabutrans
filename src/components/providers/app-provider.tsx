import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import useProgressBarStore from '@/zustand/use-progress-bar';

type AppProviderProps = {
  children: React.ReactNode;
  initialLoading: boolean;
};

const AppProvider = ({ children, initialLoading }: AppProviderProps) => {
  const router = useRouter();

  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default AppProvider;
