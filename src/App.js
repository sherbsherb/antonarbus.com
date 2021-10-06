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
console.log(allPosts)

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

  const [state, setState] = useState({
    posts: allPosts,
    tags: returnAllTagsFromArr(allPosts),
    inputVal: '',
    inputWords: [],
    inputTags: [],
    foundPosts: allPosts,
    postsOnDisplay: allPosts,
    foundTags: returnAllTagsFromArr(allPosts),
    openSearchMenu: false,
    showFoundPosts: false,
    showRemoveFoundPosts: false,
  });

  function returnAllTagsFromArr(arr) {
    const allTags = new Set();
    arr.forEach(o => o.tagsArr.forEach(tag => allTags.add(tag)));
    return Array.from(allTags);
  }

  function returnUpdatedState(e) {
    const obj = {...state}

    // input text
    obj.inputVal =
      // @ts-ignore
      e?.target?.innerText || document.querySelector('#input').innerText;    

    // nodes in input (text + tag divs)
    const wordsArr = []
    const tagsArr = []
    const inputNodes =
      e?.target?.childNodes || document.querySelector('#input').childNodes;
    inputNodes.forEach(function (el) {
      if (el.nodeType === Node.TEXT_NODE)
      wordsArr.push(...el.data.trim().toLowerCase().split(/\s+/));
      if (el.nodeType === Node.ELEMENT_NODE)
      tagsArr.push(el.innerText.toLowerCase());
    });

    // get words and tags from nodes
    obj.inputWords = [...new Set(wordsArr)].filter(el => el !== '');
    obj.inputTags = [...new Set(tagsArr)];

    // found posts based on words & tags
    function areWordsInText(wordsArr, text) {
      const wordsArrL = wordsArr.map(el => el.toLowerCase())
      const textL = text.toLowerCase()
      return wordsArrL.every(elem => textL.includes(elem));
    }

    function areTagsInPost(smallArr, bigArr) {
      const smallArrL = smallArr.map(el => el.toLowerCase())
      const bigArrL = bigArr.map(el => el.toLowerCase())
      return smallArrL.every(elem => bigArrL.includes(elem));
    }

    obj.foundPosts = allPosts
      .filter(el => areWordsInText(obj.inputWords, (el.titleTxt + el.postTxt)))
      .filter(el => areTagsInPost(obj.inputTags, el.tagsArr));

    // found tags
    obj.foundTags = returnAllTagsFromArr(obj.foundPosts)

    // 
    obj.showRemoveFoundPosts = false
    if (obj.showFoundPosts) obj.showRemoveFoundPosts = true

    return obj
  }

  Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    'break-lines': 600, //max number of characters in a line
  });

  
  useEffect(() => {
    Prism.highlightAll();
  }, [state.postsOnDisplay]); // [] - run only on load

  useEffect(() => {
    // highlight found words
    var context = document.querySelector('main');
    var instance = new Mark(context);
    instance.unmark();
    instance.mark(state.inputWords);
  }, [state.postsOnDisplay]);

  function returnPosts() {
    return state.postsOnDisplay.map(o => (
      <Post post={o} key={o.id} />
    ));
  }

  // do not re-render posts on screen when search dropdown menu toggles
  const returnPostsMemo = useMemo(() => {
    return returnPosts()
  }, [state.postsOnDisplay])

  return (
    <StyledApp 
      // close search dropdown menu if clicked outside
      onClick={() => setState({...state, openSearchMenu: false})}
    >
      <NavBar />
      <Search
        state={state}
        setState={setState}
        returnUpdatedState={returnUpdatedState}
      />
      
      <StyledMain>{returnPostsMemo}</StyledMain>
    </StyledApp>
  );
}

export default App;