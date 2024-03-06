import React from 'react';

const Title = ({ setActivePage }) => {
  return (
    <div>
      <h1 className='title1'>スポイトカレンダー</h1>
      <img className='title2' src="./vite.svg" alt="sample" width="100px" />
      <button className='title3' onClick={() => setActivePage('main')}>スタート</button>
    </div>
  );
};

export default Title;
