import React from 'react';

const Footer = () => {
  const columns = [
    ['FAQ', 'Investor Relations', 'Corporate Info', 'Privacy Policy'],
    ['Help Center', 'Jobs', 'Terms of Use', 'Contact Us'],
    ['Media Center', 'Buy Gift Cards', 'Cookie Preferences', 'Legal Notices']
  ];

  return (
    <footer className="bg-[#5A38EE] px-10 py-8">
      <h1 className="text-2xl font-bold mb-6">Movies</h1>
      <div className="flex flex-wrap gap-10">
        {columns.map((col, i) => (
          <div key={i} className="space-y-2">
            {col.map((item, idx) => (
              <p key={idx} className="text-white text-sm">{item}</p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;