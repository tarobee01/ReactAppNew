import React from 'react';

const SubScreen = ({ setActivePage, date }) => {
  return (
    <div>
      <h1>ここはサブ画面です</h1>
      <h3>選択された日付: {date}</h3>
      <button onClick={() => setActivePage('main')}>メイン画面へ</button>
    </div>
  );
};

export default SubScreen;
