import React from 'react';

const Title = ({ setActivePage }) => {
  return (
    <div>
      <h1>スポイトカレンダー</h1>
      <button onClick={() => setActivePage('main')}>スタート</button>
    </div>
  );
};

export default Title;
