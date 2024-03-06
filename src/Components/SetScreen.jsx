import React from 'react';

const SetScreen = ({ setActivePage }) => {
  return (
    <div>
      <h1>設定画面</h1>
      <button onClick={() => setActivePage('main')}>もどる</button>
    </div>
  );
};

export default SetScreen;
