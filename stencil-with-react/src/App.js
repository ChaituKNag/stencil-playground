import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
        <input onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
        <my-component first={firstName} last={lastName}></my-component>

      </header>
    </div>
  );
}

export default App;
