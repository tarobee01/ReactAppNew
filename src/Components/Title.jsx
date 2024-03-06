import React from 'react';

const Title = ({ setActivePage }) => {
  return (
    <div>
      <h1>タイトル画面</h1>
      <button onClick={() => setActivePage('paint')}>ペイント画面へ</button>
      <button onClick={() => setActivePage('database')}>データベース画面へ</button>
    </div>
  );
};

export default Title;
