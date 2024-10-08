import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className='app overflow-y-auto scrollbar-thin'>
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
