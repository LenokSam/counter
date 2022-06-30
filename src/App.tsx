import React from 'react';
import './App.css';
import {CounterWrapper} from './components/CounterOne/CounterWrapper/CounterWrapper';
import {CounterTwoWrapper} from './components/CounterTwo/CounterWrapper/CounterTwoWrapper';

function App() {

  return (
    <div className="App">
      <CounterWrapper/>
      <CounterTwoWrapper/>
    </div>
  );
}

export default App;
