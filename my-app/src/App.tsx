import React from 'react';

import './App.css';
import Greeting from './Components/Greeting';
import Counter from './Components/Compteur';

function App() {
  return (
    <div className="App">
      <Greeting name="Molka"/>
      <Counter/>
    </div>
  );
}

export default App;
