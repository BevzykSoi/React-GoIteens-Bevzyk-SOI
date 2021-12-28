import './App.css';
import user from "./data/user.json";
import Profile from './components/Profile/Profile';
import React from 'react';

function App() {
  return (
    <Profile {...user}/>
  );
}

export default App;
