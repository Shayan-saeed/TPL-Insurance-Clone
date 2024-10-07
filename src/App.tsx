import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className='app'>
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <MainSection />
      </main>
    </div>
  );
}

export default App;
