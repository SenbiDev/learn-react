import React from 'react';
import withResourceCleaner from '../components/ResourceCleaner';

const Contact = () => {
  return (
    <div className="p-8 fixed">
      <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
      <p>Hubungi kami. Cek console untuk melihat cleanup.</p>
    </div>
  );
};

export default withResourceCleaner(Contact, 'Contact Page');