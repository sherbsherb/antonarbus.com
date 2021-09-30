import Mark from 'mark.js';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchStyled = styled.div`
  text-align: center;
  padding: 20px;
  margin-top: 30px;
  position: relative;

  input {
    padding: 5px;
    font-size: 20px;
    border-radius: 4px;
    outline-style: none;
    border-style: solid;

    &:focus {
      border-color: rgba(0, 157, 214, 1);
      margin: 0px;
    }
  }

  .found-posts {
    position: absolute;
    bottom: -20px;
    right: 0px;
    left: 0px;
    color: grey;
    margin-top: 20px;
    text-align: center;
    /* width: 100%; */
  }
`;

export default function Search(props) {
  // const [searchState, setSearchState] = useState('');

  // useEffect(() => {
  //   var context = document.querySelector("main"); // requires an element with class "context" to exist
  //   var instance = new Mark(context);
  //   instance.mark(searchState); // will mark the keyword "test"
  // }, [searchState])



  function updateSearchState(e) {
    const inputVal = e.target.value;
    console.log(inputVal);
    props.setSearchState(inputVal);
  }

  function searchPosts(e) {
    const inputVal = e.target.value;
    const filteredPosts = props.allPosts.filter((item, index) => {
      if (inputVal === '') return true;
      return (
        txtFromJSXOrStr(item.title).toLowerCase().includes(inputVal.toLowerCase()) ||
        item.articlesArr.some(article => {
          return txtFromJSXOrStr(article.val).toLowerCase().includes(inputVal.toLowerCase());
        })
      );
    });
    props.setPostsState(filteredPosts);
  }

  function txtFromJSXOrStr(el) {
    if (!el) return '';
    if (typeof el === 'string') return el;
    const children = el.props && el.props.children;
    if (children instanceof Array)
      return children.map(txtFromJSXOrStr).join('');
    return txtFromJSXOrStr(children);
  }

  function FoundPosts() {
    if (props.searchState === '') return null;
    let ending = '';
    if (props.postsState.length !== 1) ending = 's';
    return (
      <div className="found-posts">
        Found {props.postsState.length} post{ending}
      </div>
    );
  }

  return (
    <SearchStyled>
      <input
        type="search"
        name="search"
        placeholder="Search"
        autoComplete="off"
        onChange={e => {
          updateSearchState(e);
          searchPosts(e);
        }}
      />
      {<FoundPosts />}
    </SearchStyled>
  );
}
