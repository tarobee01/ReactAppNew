import React, { useState } from 'react';
import Bar from './Components/NavigationBar';
import Title from './Components/Title';
import Main from './Components/MainScreen';
import Sub from './Components/SubScreen';
import Set from './Components/SetScreen';

import './Components/NavigationBar.css';

function App() {
  const [activePage, setActivePage] = useState('title');
  const [date, setDate] = useState('aaaaa');

  return (
    <>
      {activePage !== 'title' && <Bar setActivePage={setActivePage} />}

      {activePage === 'title' && <Title setActivePage={setActivePage} />}
      {activePage === 'main' && <Main setActivePage={setActivePage} setDate={setDate} />}
      {activePage === 'sub' && <Sub setActivePage={setActivePage} date={date} />}
      {activePage === 'set' && <Set setActivePage={setActivePage} />}
    </>
  );
}

export default App;
