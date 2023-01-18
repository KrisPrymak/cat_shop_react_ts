import React from 'react';
import './App.scss';
import Shop from './components/Shop';

function App() {
  return (
    <div className="app">
      <Shop />
      <p className='minScreen'>Почему у тебя такое маленькое устройство?</p>
    </div>
  );
}

export default App;
