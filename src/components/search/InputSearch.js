import styled from 'styled-components';

export function InputSearch(props) {
  const {returnUpdatedState, setState, state, searchBtnClickHandler, closeFoundPostsContainer} = props

  return (
    <DivStyled
      id="input"
      contentEditable={true}
      placeholder="Search"
      onFocus={e => {
        const updateState = returnUpdatedState(e);
        setState({
          ...state,
          ...updateState,
          openSearchMenu: true,
        });
      }}
      onInput={debounce(e => {
        const updateState = returnUpdatedState(e);
        setState({
          ...state,
          ...updateState,
          openSearchMenu: true,
        });
        e.target.scrollLeft = 10000;
      }, 300)}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          searchBtnClickHandler(e);
          return;
        }

        if (e.key === 'Escape') {
          e.preventDefault();
          closeFoundPostsContainer();
          return;
        }
      }}
    />
  );
}

const DivStyled = styled.div`
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

  &::-webkit-scrollbar {
    display: none;
  }
`;

function debounce(callback, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(this, args);
    }, wait);
  };
}