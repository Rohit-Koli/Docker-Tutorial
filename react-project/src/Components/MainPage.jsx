import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const MainPage = () => {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/header">Header</Link>
        <Link to="/footer">Footer</Link>
        <Link to="/content">Content</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Welcome TO Main Page</div>} />
        <Route path="/home" element={<div>Home Page</div>} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </>
  );
}

export default MainPage;
