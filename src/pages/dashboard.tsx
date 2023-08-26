import React, { useState } from 'react';
import MainCard from '../components/cards/MainCard';

const Home: React.FC = () => {
  const [color, setColor] = useState<string>('black');

  const changeColor = () => {
    const newColor = color === 'black' ? 'blue' : 'black';
    setColor(newColor);
  };

  return (
    <MainCard title="Home Dashboard Sayfası">
      <div className="App">
        <header className="App-header">
          <h1 style={{ color }}>React Home Sayfası</h1>

          <button onClick={changeColor}>Renk Değiştir</button>
        </header>
      </div>
    </MainCard>
  );
};

export default Home;
