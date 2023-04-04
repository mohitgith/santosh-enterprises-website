import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import '../styles/Layout.css';

function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
