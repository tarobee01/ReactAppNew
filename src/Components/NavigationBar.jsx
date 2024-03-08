import React, { useState } from 'react';
import Palette from './Palette';

const NavigationBar = ({ setActivePage }) => {
  const [showPalette, setShowPalette] = useState(false);

  const toggleShowPalette = () => {
    setShowPalette(!showPalette);
    console.log('showPalette:', !showPalette); // 状態が更新されたことを確認
  };

  return (
    <div>
      <div className='navigationBar'>
        <button onClick={() => setActivePage('set')}>＞</button>
        <button onClick={() => setActivePage('main')}>◎</button>
        <button onClick={toggleShowPalette}>
          {showPalette ? 'Close Palette' : 'Show Palette'}
        </button>
      </div>
      {showPalette && (
        <Palette
          showPalette={showPalette} 
          />
      )}
    </div>
  );
};

export default NavigationBar;
