import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './containers/Home/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
