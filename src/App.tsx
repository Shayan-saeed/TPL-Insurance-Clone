import './App.css';
import MainSection from './components/MainSection';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <div className='app overflow-y-auto scrollbar-thin'>
      <header>
        <NavbarComponent />
      </header>
      <main>
        <MainSection />
      </main>
    </div>
  );
}

export default App;
