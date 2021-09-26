import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
//import './App.css';
import styled from 'styled-components';
import { NavBar } from './components/nav/Nav.js';
import { Post } from './components/post components/Post.js';
import { allPosts } from './posts/allPosts.js';

const StyledApp = styled.div`
  text-align: left;
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
  min-height: 100vh;
  color: whitesmoke;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

function App() {
  console.log('App rendered');
  console.log(allPosts)

  return (
    <StyledApp>
      <NavBar />
      <StyledMain>
        {allPosts.map(item => (
          <Post post={item} key={item.title} />
        ))}
      </StyledMain>
    </StyledApp>
  );
}

export default App;
