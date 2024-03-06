import React from 'react';

const NavigationBar = ({ setActivePage }) => {
  return (
    <div>
      <div className='navigationBar'>
        <button onClick={() => setActivePage('title')}>＜</button>
        <button onClick={() => setActivePage('title')}>◎</button>
        <button onClick={() => setActivePage('title')}>＞</button>
      </div>
    </div>
  );
};

export default NavigationBar;
