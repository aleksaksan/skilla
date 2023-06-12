import React from 'react';
import { SvgInOutCall } from './components/SvgIcon/SvgInOutCall';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hello
      </header>
      <SvgInOutCall callsType="outcoming" />
      <SvgInOutCall callsType="incoming" />
    </div>
  );
}

export default App;
