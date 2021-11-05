import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import React from 'react';

import Home from './pages/Home';
import theme from './theme';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Reset />
      <Home />
  </ThemeProvider>
    );
}

export default App;