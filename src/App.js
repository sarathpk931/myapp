// App.js
import React from 'react';
import './App.css';
import Home from './components/Home.js'
import DataFetcher from './components/DataFetcher.js';
function App() {
  return (
    <div className="App" >
      <Home /> 
      <DataFetcher/>
    </div>
  );
}

export default App;
