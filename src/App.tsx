import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Contact } from './pages/Contact';
import { Company } from './pages/Company';
import './index.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to hash when location/hash changes with retry mechanism
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetId = hash.replace('#', '');
      let retries = 0;
      const tryScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (retries < 15) {
          retries++;
          setTimeout(tryScroll, 50);
        }
      };
      tryScroll();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  const activePage = location.pathname === '/' ? 'home' : location.pathname.substring(1);



  return (
    <>
      <Navbar activePage={activePage} />
      <main style={{ flex: 1, paddingTop: activePage === 'home' ? '0px' : '100px' }}>
        <Routes>
          <Route path="/" element={<Home setActivePage={(page) => navigate(page === 'home' ? '/' : `/${page}`)} />} />
          <Route path="/home" element={<Home setActivePage={(page) => navigate(page === 'home' ? '/' : `/${page}`)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="*" element={<Home setActivePage={(page) => navigate(page === 'home' ? '/' : `/${page}`)} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
