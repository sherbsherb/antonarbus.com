import Mark from 'mark.js';
import Prism from 'prismjs';
import React, { useEffect, useRef, useState, useMemo} from 'react';
import uuid from 'react-uuid';
//import './App.css';
import styled from 'styled-components';
import { NavBar } from './components/nav/Nav.js';
import { Post } from './components/post components/Post.js';
import Search from './components/search/Search.js';
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

  const [showFoundContainerState, setShowFoundContainerState] = useState(false);
  const [postsOnScreenState, setPostsOnScreenState] = useState(allPosts)
  const [searchValState, setSearchValState] = useState('');

  Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    'break-lines': 600, //max number of characters in a line
  });

  // [] - run only on load
  useEffect(() => {
    Prism.highlightAll();

    // highlight found words
    var context = document.querySelector('main');
    var instance = new Mark(context);
    instance.unmark();
    instance.mark(searchValState); // will mark the keyword "test"

  }, [postsOnScreenState]);

  

  function returnPosts() {
    return postsOnScreenState.map((item, index) => (
      <Post post={item} key={item.id} num={allPosts.length - index} />
    ));
  }

  // do not re-render posts on screen when search dropdown menu toggles
  const returnPostsMemo = useMemo(() => {
    return returnPosts()
  }, [postsOnScreenState])

  return (
    <StyledApp 
      // close search dropdown menu if clicked outside
      onClick={() => setShowFoundContainerState(false)}
    >
      <NavBar />
      <Search
        allPosts={allPosts}
        showFoundContainerState={showFoundContainerState}
        setShowFoundContainerState={setShowFoundContainerState}
        postsOnScreenState={postsOnScreenState}
        setPostsOnScreenState={setPostsOnScreenState}
        searchValState={searchValState}
        setSearchValState={setSearchValState}
      />
      
      <StyledMain>{returnPostsMemo}</StyledMain>
    </StyledApp>
  );
}

export default App;