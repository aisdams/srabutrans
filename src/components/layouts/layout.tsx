import { useRouter } from 'next/router';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import React, { useEffect, useState } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <div className="h-screen relative">
      {!isHomePage && <Navbar />}
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
