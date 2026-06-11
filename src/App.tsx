import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import './index.css';

function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  // Handle scroll trigger when navigating to section
  useEffect(() => {
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setScrollTarget(null);
      }
    }
  }, [activePage, scrollTarget]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <>
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        setScrollTarget={setScrollTarget} 
      />
      <main style={{ flex: 1, paddingTop: activePage === 'home' ? '0px' : '100px' }}>
        {renderPage()}
      </main>
      <Footer 
        setActivePage={setActivePage} 
        setScrollTarget={setScrollTarget} 
      />
    </>
  );
}

export default App;
