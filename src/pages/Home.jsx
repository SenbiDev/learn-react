import React from 'react';
import withResourceCleaner from '../components/ResourceCleaner';

const Home = () => {
  return (
    <div className="p-8 fixed">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p>Halaman utama aplikasi. Cek console untuk melihat cleanup.</p>
    </div>
  );
};

export default withResourceCleaner(Home, 'Home Page');