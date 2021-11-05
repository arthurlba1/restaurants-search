import  { ThemeProvider } from 'styled-components;';
import React from 'react';

import Home from './pages/Home'
import Theme from './theme'

import './App.css';

function App() {
  return (
    <ThemeProvider theme={ Theme }>
      <Home/>
  </ThemeProvider>
    );
}

export default App;