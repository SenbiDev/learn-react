import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

const sidebarLink = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/learn1', label: '1. Membuat dan menyarangkan (nest) komponen-komponen' },
  { path: '/learn2', label: '2. Menulis markup dengan JSX' },
  { path: '/learn3', label: '3. Menambahkan styles' },
  { path: '/learn4', label: '4. Menampilkan data' },
  { path: '/learn5', label: '5. Pe-render-an secara kondisional' },
  { path: '/learn6', label: '6. Me-render daftar' },
  { path: '/learn7', label: '7. Merespon ke event' },
  { path: '/learn8', label: '8. Memperbarui layar' },
  { path: '/learn9', label: '9. Berbagi data antar komponen' },
  { path: '/learn10', label: '10. CRUD Array String' },
  { path: '/all-form', label: '11. Input Demo' },
  { path: '/berita', label: '12. Berita'},
]

const Sidebar = () => {
  const [visible, setVisible] = useState(true)
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <div className={`bg-gray-800 text-white min-h-screen transition-all ${visible ? 'p-4' : 'p-0'} relative ${visible ? 'w-64' : 'w-0'}`}>
      <button className={`p-2 w-8 h-8 rounded-full flex items-center justify-center bg-blue-600 fixed ${visible ? 'left-[240px]' : 'left-[20px] z-20 mt-4'}`} onClick={() => setVisible(!visible)}>
        <HamburgerMenu isOpen={visible} />
      </button>
      <h1 className="text-2xl font-bold mb-8">Belajar React Dasar</h1>
      <ul>
        {sidebarLink.map((item) => (
          <li key={item.path} className="mb-2">
            <Link
              to={item.path}
              className={`block ${visible ? 'p-3' : 'p-0'} rounded-lg transition-all ${
                isActive(item.path)
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-700'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;