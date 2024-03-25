// Layout.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/main.scss'
import '../styles/style.scss'
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
