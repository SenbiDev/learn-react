import React from 'react';

const Footer = () => {
  const columns = [
    ['FAQ', 'Investor Relations', 'Corporate Info', 'Privacy Policy'],
    ['Help Center', 'Jobs', 'Terms of Use', 'Contact Us'],
    ['Media Center', 'Buy Gift Cards', 'Cookie Preferences', 'Legal Notices']
  ];

  return (
    <footer className="bg-[#5A38EE] py-10 mt-20 border-t border-white/20">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Movies</h1>
        <div className="flex flex-wrap gap-10 justify-between">
          {columns.map((col, i) => (
            <div key={i} className="space-y-2 min-w-[150px]">
              {col.map((item, idx) => (
                <p key={idx} className="text-white text-sm">{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
