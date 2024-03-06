import React from 'react';

const Paint = ({ setActivePage }) => {
  return (
    <div>
      <h1>ここはペイント画面です</h1>
      <button onClick={() => setActivePage('title')}>タイトル画面へ</button>
    </div>
  );
};

export default Paint;
