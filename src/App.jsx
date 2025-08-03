import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Learn1 from './pages/Learn1';
import Learn2 from './pages/Learn2';
import Learn3 from './pages/Learn3';
import Learn4 from './pages/Learn4';
import Learn5 from './pages/Learn5';
import Learn6 from './pages/Learn6';
import Learn7 from './pages/Learn7';
import Learn8 from './pages/Learn8';
import Learn9 from './pages/Learn9';
import CrudArrayStr from './pages/CrudArrayStr';
import InputDemoPage from './pages/InputDemoPage';
<<<<<<< HEAD
import BeritaPage from './pages/BeritaPage';
=======
import BeritaPage from './components/BeritaPage';
>>>>>>> e900649283294b72638f13bd96018beb8025ee84

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 bg-white mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learn1" element={<Learn1 />} />
            <Route path="/learn2" element={<Learn2 />} />
            <Route path="/learn3" element={<Learn3 />} />
            <Route path="/learn4" element={<Learn4 />} />
            <Route path="/learn5" element={<Learn5 />} />
            <Route path="/learn6" element={<Learn6 />} />
            <Route path="/learn7" element={<Learn7 />} />
            <Route path="/learn8" element={<Learn8 />} />
            <Route path="/learn9" element={<Learn9 />} />
            <Route path="/learn10" element={<CrudArrayStr />} />
            <Route path="/all-form" element={<InputDemoPage />} />
<<<<<<< HEAD
            <Route path="/berita" element={<BeritaPage />} />
=======
            <Route path="berita" element={<BeritaPage />} />
>>>>>>> e900649283294b72638f13bd96018beb8025ee84
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;