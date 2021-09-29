import React from 'react';
import uuid from 'react-uuid';
//import './App.css';
import styled from 'styled-components';
import { NavBar } from './components/nav/Nav.js';
import { Post } from './components/post components/Post.js';
import { allPosts } from './posts/allPosts.js';

const StyledApp = styled.div`
  text-align: left;
  /* background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%); */

  background: #c9ccd3;
  background-image: linear-gradient(
    -180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-blend-mode: lighten;

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
  console.log(allPosts);

  return (
    <StyledApp>
      <NavBar />
      <StyledMain>
        {allPosts.map(item => (
          <Post post={item} key={uuid()} />
        ))}
      </StyledMain>
    </StyledApp>
  );
}

export default App;
