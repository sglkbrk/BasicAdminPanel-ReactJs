import React, { useState } from 'react';

const Home: React.FC = () => {
  const [color, setColor] = useState<string>('black');

  const changeColor = () => {
    const newColor = color === 'black' ? 'blue' : 'black';
    setColor(newColor);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color }}>Home Dashboard Sayfası</h1>
        <button onClick={changeColor}>Renk Değiştir</button>
      </header>
    </div>
  );
};

export default Home;
