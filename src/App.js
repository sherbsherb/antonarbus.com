// import React, { useState, useEffect } from 'react';
//import './App.css';
import { NavBar } from './components/nav/Nav.js';
import {TopContainer, Main} from './components/nav/NavStyledComponents'

function App() {
  // ! when click in dev tools on .js file some internal react file is opened
  console.log('App rendered')

  return (
    <TopContainer>
      <NavBar />
      <Main>
        <p>First React website for Anton</p>
      </Main>
    </TopContainer>
  );
}

export default App;