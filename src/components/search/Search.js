import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { Post } from '../post components/Post';

const FormStyled = styled.form`
  display: inline-flex;
  justify-content: space-between;
  align-items: stretch;

  margin: 0 auto;
  width: 90vw;

  margin-top: 30px;
  height: 40px;
  max-width: 400px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  z-index: 666;

  input {
    flex-grow: 1;
    padding: 5px;
    font-size: 20px;
    border-color: #c0c0c0;
    border-style: solid;
    border-radius: 4px;
    outline-style: none;
    width: auto;
    min-width: 0; /* for shrinking */

    &:hover {
      border-color: grey;
      transition: border-color 200ms ease;
    }

    &:focus {
      border-color: rgba(0, 157, 214, 1);
      margin: 0px;
    }

    &:not(:placeholder-shown) {
      border-color: rgba(0, 157, 214, 1);
      margin: 0px;
    }

    /* show cancel icon not only on hover, but on focus */
    &::-webkit-search-cancel-button {
      opacity: 1;
    }
  }

  button {
    flex-grow: 0;
    font-size: 20px;
    border-radius: 4px;
    outline-style: none;
    border-style: solid;
    border-color: #c0c0c0;
    width: auto;
    padding: 0px 10px;
    margin-left: 10px;
    cursor: pointer;

    &:hover,
    &:focus {
      border-color: grey;
      transition: border-color 200ms ease;
    }
  }

  .found-posts {
    position: absolute;
    top: 12px;
    right: 0px;
    left: 0px;
    color: grey;
    text-align: center;
    cursor: pointer;
    transform: translateX(-50%);
    left: 50%;

    &:hover {
      color: #1c1c1c;
    }
  }
`;

const SearchPreviewContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: #c0c0c0;
  padding: 35px 10px 10px 10px;
  background-color: #f6f6f6;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const SearchPreviewStyled = styled.div`
  background-color: #e8e8e8;
  margin: 5px 0px;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  padding: 5px;

  &:hover {
    background-color: lightgrey;
  }

  h4 {
    margin-bottom: 5px;
  }

  summary {
    color: #3f3f3f;
    font-size: 14px;
  }
`;

function SearchPreviewItem(props) {
  return (
    <SearchPreviewStyled>
      <h4>{props.title}</h4>
      <summary>{props.summary}</summary>
    </SearchPreviewStyled>
  );
}

function PostsOnScreen(props) {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '15px',
        position: 'absolute',
        top: '30px',
        width: '100%',
      }}
    >
      <span style={{ color: 'grey' }}>
        {props.foundPostsNumState} post
        {props.foundPostsNumState > 1 ? 's are' : ' is'} found
      </span>
      <span
        style={{
          color: '#f99191',
          fontSize: '20px',
          fontWeight: 900,
          marginLeft: '10px',
          cursor: 'pointer',
        }}
        onClick={() => {
          props.setFilterFoundPostsState(false);
          props.setPostsOnScreenState(props.allPosts);
          props.setSearchValState('')
        }}
      >
        ⨉
      </span>
    </div>
  );
}

export default function Search(props) {
  // const [searchValState, setSearchValState] = useState('');
  const [foundPostsNumState, setFoundPostsNumState] = useState(
    props.allPosts.length
  );
  const [foundPostsArrState, setFoundPostsArrState] = useState([]);
  const [filterFoundPostsState, setFilterFoundPostsState] = useState(false);

  function updateSearchValState(e) {
    const inputVal = e.target.value;
    console.log(inputVal);
    props.setSearchValState(inputVal);
  }

  function returnFilteredPostsArrAfterSearch(e) {
    const inputVal = e.target.value;
    const filteredPosts = props.allPosts.filter((item, index) => {
      if (inputVal === '') return false;
      return (
        txtFromJSXOrStr(item.title)
          .toLowerCase()
          .includes(inputVal.toLowerCase()) ||
        item.articlesArr.some(article => {
          return txtFromJSXOrStr(article.val)
            .toLowerCase()
            .includes(inputVal.toLowerCase());
        })
      );
    });

    return filteredPosts;
  }

  function txtFromJSXOrStr(el) {
    if (!el) return '';
    if (typeof el === 'string') return el;
    const children = el.props && el.props.children;
    if (children instanceof Array)
      return children.map(txtFromJSXOrStr).join('');
    return txtFromJSXOrStr(children);
  }

  function FoundPosts(props) {
    if (props.foundPostsNumState === 0)
      return <span className="found-posts">Not found</span>;
    let ending = '';
    if (props.foundPostsNumState !== 1) ending = 's';
    return (
      <span className="found-posts" onClick={searchBtnClickHandler}>
        Show {ending ? 'all' : ''} {props.foundPostsNumState} post{ending}
      </span>
    );
  }

  function returnArrWithTitlesAndArticle() {
    return foundPostsArrState.map(post => {
      return { title: post.title, summary: post.title, key: uuid() };
    });
  }

  function splitWithDelimiter(str, delimiter, arr = []) {
    if (!delimiter) return [str];
    if (str.length === 0) return arr;
    const index = str.toLowerCase().indexOf(delimiter.toLowerCase());
    if (index === -1) {
      arr.push(str);
      return arr;
    }
    const strBeforeDelimiter = str.substring(0, index);
    if (index !== 0) arr.push(strBeforeDelimiter);
    const delimiterAsInStr = str.slice(index, index + delimiter.length);
    arr.push(delimiterAsInStr);
    str = str.slice(strBeforeDelimiter.length + delimiter.length, str.length);
    splitWithDelimiter(str, delimiter, arr);
    return arr;
  }

  function titleWithHighlight(el, searchStr) {
    const str = txtFromJSXOrStr(el);
    const arrWithSplittedText = splitWithDelimiter(str, searchStr);
    const arrWithJSX = arrWithSplittedText.map(el => {
      if (el.toLowerCase() === searchStr.toLowerCase())
        return (
          <span style={{ background: 'yellow' }} key={uuid()}>
            {el}
          </span>
        );
      return <span key={uuid()}>{el}</span>;
    });
    return arrWithJSX;
  }

  function articleWithHighlight(articlesArr, searchStr) {
    let allText = '';
    articlesArr.forEach(function (el) {
      allText = allText + txtFromJSXOrStr(el.val);
    });

    const arrWithSplittedText = splitWithDelimiter(allText, searchStr);

    const arrWithJSX = arrWithSplittedText.map(el => {
      if (el.toLowerCase() === searchStr.toLowerCase())
        return (
          <span style={{ background: 'yellow' }} key={uuid()}>
            {el}
          </span>
        );
      return <span key={uuid()}>{el}</span>;
    });
    return arrWithJSX;
  }

  console.log(returnArrWithTitlesAndArticle());

  function searchBtnClickHandler(e) {
    e.preventDefault();
    if (props.searchValState === '') {
      props.setPostsOnScreenState(props.allPosts);
      setFilterFoundPostsState(false);
      return;
    }
    props.setShowFoundContainerState(false);
    props.setPostsOnScreenState(foundPostsArrState);
    setFilterFoundPostsState(true);
  }

  return (
    <FormStyled
      onClick={e => e.stopPropagation()} // do not close dropdown search menu if clicked inside
    >
      <input
        type="search"
        name="search"
        value={props.searchValState}
        placeholder="Search"
        autoComplete="off"
        onChange={e => {
          updateSearchValState(e);
          const filteredPostsAfterSearchArr =
            returnFilteredPostsArrAfterSearch(e);
          setFoundPostsNumState(filteredPostsAfterSearchArr.length);
          setFoundPostsArrState(filteredPostsAfterSearchArr);
          props.setShowFoundContainerState(
            !!filteredPostsAfterSearchArr.length
          );
          if (e.target.value === '') {
            props.setPostsOnScreenState(props.allPosts);
            setFilterFoundPostsState(false);
          }
        }}
      />
      <button onClick={searchBtnClickHandler}>Search</button>
      {filterFoundPostsState && (
        <PostsOnScreen
          foundPostsNumState={foundPostsNumState}
          setFilterFoundPostsState={setFilterFoundPostsState}
          setPostsOnScreenState={props.setPostsOnScreenState}
          allPosts={props.allPosts}
          setSearchValState={props.setSearchValState}
        ></PostsOnScreen>
      )}
      {props.showFoundContainerState && (
        <SearchPreviewContainer>
          {<FoundPosts foundPostsNumState={foundPostsNumState} />}
          {foundPostsArrState.map(o => {
            return (
              <SearchPreviewItem
                title={titleWithHighlight(o.title, props.searchValState)}
                summary={articleWithHighlight(
                  o.articlesArr,
                  props.searchValState
                )}
                key={uuid()}
              />
            );
          })}

          {/* <Post post={foundPostsArrState[0]} key={'xghdfgh'} /> */}
        </SearchPreviewContainer>
      )}
    </FormStyled>
  );
}
