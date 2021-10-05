import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { allPosts } from '../../posts/allPosts';
import { Tag } from '../post components/Post';

const FormStyled = styled.form`
  display: inline-flex;
  justify-content: space-between;
  align-items: stretch;

  margin: 0 auto;
  width: 90vw;

  margin-top: 30px;
  height: 40px;
  max-width: 500px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  z-index: 1;

  div#input {
    flex-grow: 1;
    padding: 5px;
    padding-right: 40px;
    font-size: 20px;
    border-width: 2px;
    border-color: #c0c0c0;
    border-style: solid;
    border-radius: 4px;
    outline-style: none;
    width: auto;
    min-width: 0; /* for shrinking */
    background-color: white;
    color: black;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    &:hover {
      border-color: grey;
      transition: border-color 200ms ease;
    }

    &:focus {
      border-color: rgba(0, 157, 214, 1);
      margin: 0px;
    }

    &[contenteditable]:empty:before {
      content: attr(placeholder);
      color: #bfbfbf;
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

  .close {
    border: none;
    position: absolute;
    width: 32px;
    height: 32px;
    right: 100px;
    top: 4px;
    background-color: transparent;
  }

  .close:before,
  .close:after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20px;
    width: 4px;
    background-color: #dcdcdc5c;
  }
  .close:hover:before,
  .close:hover:after {
    background-color: #ff6565bd;
  }

  .close::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  .close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
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
  margin: 10px 0px;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  padding: 5px;
  max-height: 80px;
  overflow-y: auto;

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

const TagsContainerInMenuStyled = styled(SearchPreviewStyled)`
  max-height: 105px;
  height: auto;
  padding: 7px;
  padding-bottom: 3px;
  &:hover {
    background-color: #e8e8e8;
  }
`;

function TagsContainer(props) {
  return (
    <TagsContainerInMenuStyled>
      {props.tagsArrState.map(tag => (
        <Tag> {tag} </Tag>
      ))}
    </TagsContainerInMenuStyled>
  );
}

function FoundPostsTextAfterSearch(props) {
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
        {props.searchedPostsNumState} post
        {props.searchedPostsNumState > 1 ? 's are' : ' is'} found
      </span>
      <span
        style={{
          color: '#f99191',
          fontSize: '20px',
          fontWeight: 900,
          marginLeft: '10px',
          cursor: 'pointer',
        }}
        onClick={props.closeFoundPostsContainer}
      >
        ⨉
      </span>
    </div>
  );
}

export default function Search(props) {
  const [foundPostsArrState, setFoundPostsArrState] = useState(props.allPosts);
  const [tagsArrState, setTagsArrState] = useState(
    returnAllTagsFromArr(props.allPosts)
  );
  const [tagsSelectedState, setTagsSelectedState] = useState([]);
  const [searchedPostsAreShownState, setSearchedPostsAreShownState] =
    useState(false);
  const [searchedPostsNumState, setSearchedPostsNumState] = useState(0);

  function returnAllTagsFromArr(arr) {
    const allTags = new Set();
    arr.forEach(o => o.tagsArr.forEach(tag => allTags.add(tag)));
    return Array.from(allTags);
  }

  function updateSearchValState(e) {
    const inputVal = e.target.innerText;
    props.setSearchValState(inputVal);
  }

  function txtFromJSXOrStr(el) {
    if (!el) return '';
    if (typeof el === 'string') return el;
    const children = el.props && el.props.children;
    if (children instanceof Array)
      return children.map(txtFromJSXOrStr).join('');
    return txtFromJSXOrStr(children);
  }

  const o = {
    posts: allPosts,
    tags: returnAllTagsFromArr(allPosts),
    inputVal: '',
    inputWords: [],
    inputTags: [],
    needToFilterPreview: false,
    foundPosts: allPosts,
    foundTags: returnAllTagsFromArr(allPosts),
  };

  function updatePropsObj(e) {
    // input text
    o.inputVal =
      // @ts-ignore
      e.target.innerText || document.querySelector('#input').innerText;

    // nodes in input (text + tag divs)
    const inputNodes =
      e.target.childNodes || document.querySelector('#input').childNodes;
    inputNodes.forEach(function (el) {
      if (el.nodeType === Node.TEXT_NODE)
        o.inputWords.push(...el.data.trim().toLowerCase().split(/\s+/));
      if (el.nodeType === Node.ELEMENT_NODE)
        o.inputTags.push(el.innerText.toLowerCase());
    });

    // get words and tags from nodes
    o.inputWords = [...new Set(o.inputWords)].filter(el => el !== '');
    o.inputTags = [...new Set(o.inputTags)];

    // needToFilterPreview flag
    o.needToFilterPreview = false;
    if (o.inputWords.length || o.inputWords.length)
      o.needToFilterPreview = true;

    // found posts based on words & tags
    function areWordsInText(wordsArr, text) {
      return wordsArr.every(elem => text.includes(elem));
    }

    function areTagsInPost(smallArr, bigArr) {
      return smallArr.every(elem => bigArr.includes(elem));
    }

    o.foundPosts = allPosts
      .filter(el => areWordsInText(o.inputWords, (el.titleTxt + el.postTxt)))
      .filter(el => areTagsInPost(o.inputTags, el.tagsArr.map(el => el.toLowerCase())));

    // found tags
    o.foundTags =  returnAllTagsFromArr(o.foundPosts)

    console.log(o.foundPosts);
  }

  // to del
  function returnFilteredPostsArrAfterSearch(e) {
    const inputVal = e.target.innerText;
    const filteredPosts = props.allPosts.filter(item => {
      if (inputVal === '') return true;
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

  // to del
  function txtFromJSXOrStr(el) {
    if (!el) return '';
    if (typeof el === 'string') return el;
    const children = el.props && el.props.children;
    if (children instanceof Array)
      return children.map(txtFromJSXOrStr).join('');
    return txtFromJSXOrStr(children);
  }

  
  function FoundPosts() {
    if (foundPostsArrState.length === 0)
      return <span className="found-posts">Not found</span>;
    const ending = foundPostsArrState.length !== 1 ? 's' : '';
    return (
      <span className="found-posts" onClick={searchBtnClickHandler}>
        Show {ending ? 'all' : ''} {foundPostsArrState.length} post{ending}
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

  function searchBtnClickHandler(e) {
    e.preventDefault();
    if (props.searchValState === '') {
      props.setPostsOnScreenState(props.allPosts);
      setSearchedPostsAreShownState(false);
      props.setShowFoundContainerState(false);
      return;
    }

    setSearchedPostsNumState(foundPostsArrState.length);
    props.setShowFoundContainerState(false);
    props.setPostsOnScreenState(foundPostsArrState);
    if (foundPostsArrState.length) setSearchedPostsAreShownState(true);
  }

  function closeFoundPostsContainer() {
    props.setPostsOnScreenState(props.allPosts);
    props.setSearchValState('');
    document.getElementById('input').innerText = '';
    props.setShowFoundContainerState(false);
    setSearchedPostsAreShownState(false);
  }

  return (
    <FormStyled
      // do not close dropdown search menu if clicked inside
      onClick={e => e.stopPropagation()}
    >
      <div
        id="input"
        contentEditable={true}
        placeholder="Search"
        onFocus={() => {
          props.setShowFoundContainerState(true);
        }}
        onBlur={e => {
          console.log('onBlur');
          // if (e.target.innerText === '') closeFoundPostsContainer()
        }}
        onInput={e => {
          const inputEl = e.target;

          updatePropsObj(e);
          updateSearchValState(e);
          const filteredPostsAfterSearchArr =
            returnFilteredPostsArrAfterSearch(e);
          setFoundPostsArrState(filteredPostsAfterSearchArr);
          setTagsArrState(returnAllTagsFromArr(filteredPostsAfterSearchArr));
          props.setShowFoundContainerState(true);
          // @ts-ignore
          inputEl.scrollLeft = 10000;
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            searchBtnClickHandler(e);
            return;
          }

          if (e.key === 'Enter') {
            e.preventDefault();
            searchBtnClickHandler(e);
            return;
          }
        }}
      ></div>

      <button
        className="close"
        onClick={e => {
          e.preventDefault();
          closeFoundPostsContainer();
        }}
      ></button>

      <button onClick={searchBtnClickHandler}>Search</button>

      {searchedPostsAreShownState && (
        <FoundPostsTextAfterSearch
          setPostsOnScreenState={props.setPostsOnScreenState}
          allPosts={props.allPosts}
          setSearchValState={props.setSearchValState}
          foundPostsArrState={foundPostsArrState}
          searchedPostsNumState={searchedPostsNumState}
          setSearchedPostsNumState={setSearchedPostsNumState}
          setShowFoundContainerState={props.setShowFoundContainerState}
          setSearchedPostsAreShownState={setSearchedPostsAreShownState}
          FoundPostsTextAfterSearch={FoundPostsTextAfterSearch}
        ></FoundPostsTextAfterSearch>
      )}

      {props.showFoundContainerState && (
        <SearchPreviewContainer>
          <FoundPosts />
          {!!tagsArrState.length && (
            <TagsContainer
              returnAllTagsFromArr={returnAllTagsFromArr}
              tagsArrState={tagsArrState}
              tagsSelectedState={tagsSelectedState}
              setTagsSelectedState={setTagsSelectedState}
            />
          )}
          {props.searchValState.length > 1 &&
            foundPostsArrState.map(o => {
              return (
                <SearchPreviewItem
                  title={titleWithHighlight(o.title, props.searchValState)}
                  summary={
                    props.searchValState.length > 2 &&
                    articleWithHighlight(o.articlesArr, props.searchValState)
                  }
                  key={uuid()}
                />
              );
            })}
        </SearchPreviewContainer>
      )}
    </FormStyled>
  );
}
