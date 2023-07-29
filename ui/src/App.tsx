import React from 'react';

import { Header } from './components/Header';
import { Content } from './components/Content';

import { GlobalStyle } from './styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
    </>
  )
}

export default App;
