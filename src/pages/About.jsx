import React from 'react';
import withResourceCleaner from '../components/ResourceCleaner';

const About = () => {
  return (
    <div className="p-8 fixed">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p>Informasi tentang aplikasi. Cek console untuk melihat cleanup.</p>
    </div>
  );
};

export default withResourceCleaner(About, 'About Page');