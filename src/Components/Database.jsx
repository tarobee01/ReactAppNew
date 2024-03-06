import React from 'react';

const Database = ({ setActivePage }) => {
  return (
    <div>
      <h1>ここはデータベース画面です</h1>
      <button onClick={() => setActivePage('title')}>タイトル画面へ</button>
    </div>
  );
};

export default Database;
