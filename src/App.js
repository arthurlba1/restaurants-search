import { Reset } from 'styled-reset';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import React from 'react';

import Home from './pages/Home';
import store from './redux/store'
import theme from './theme';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={ theme }>
        <Reset />
        <Home />
    </ThemeProvider>
    </Provider>
    );
}

export default App;
