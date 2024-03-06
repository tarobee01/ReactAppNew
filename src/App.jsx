import React, { useState } from 'react';
import Title from './Components/Title';
import Paint from './Components/Paint';
import Database from './Components/Database';

function App() {
  const [activePage, setActivePage] = useState('title');

  return (
    <>
      {activePage === 'title' && <Title setActivePage={setActivePage} />}
      {activePage === 'paint' && <Paint setActivePage={setActivePage} />}
      {activePage === 'database' && <Database setActivePage={setActivePage} />}
    </>
  );
}

export default App;
