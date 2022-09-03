import React from 'react';
import Header from '../header';
// import SEO from '../../SEO';

const Layout = ({ children }) => (
    <div className='flex flex-col items-start justify-start w-full h-screen'>
      <Header />
      {children}
    </div>
  );

export default Layout;