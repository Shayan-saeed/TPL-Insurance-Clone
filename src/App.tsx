import './App.css';
import { useEffect, useState } from 'react';
import MainSection from './components/MainSection';
import NavbarComponent from './components/Navbar';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <header>
        <NavbarComponent isOpen={isOpen} toggleMenu={toggleMenu} />
      </header>
      <main onClick={() => { if (isOpen) toggleMenu(); }}>
        <MainSection />
      </main>
    </div>
  );
}

export default App;
