import React, { useState } from 'react';
import Palette from './Palette';

const NavigationBar = ({ setActivePage }) => {
  const [showPalette, setShowPalette] = useState(false);

  return (
    <div>
      <div className='navigationBar'>
        <button onClick={() => setActivePage('set')}>＞</button>
        <button onClick={() => setActivePage('main')}>◎</button>
        <button onClick={() => setShowPalette(!showPalette)}>
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
