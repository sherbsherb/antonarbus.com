import styled from 'styled-components';
import setCaretToEnd from './../../../helpers/functions/setCaretToEnd';

export function Tag(props) {

  return (
    <DivStyled contentEditable={false} onClick={clickHandler}>
      {props.tag}
    </DivStyled>
  );
}

function clickHandler(e) {
  e.stopPropagation();
  // add tag to search input
  const inputEl = document.getElementById('input');
  const tagEl = e.target;
  const clonedTag = tagEl.cloneNode(true);
  clonedTag.classList.add('tag');
  inputEl.appendChild(clonedTag);
  inputEl.append('\u00A0');
  setCaretToEnd(inputEl);
  inputEl.scrollLeft = 10000;
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

const DivStyled = styled.div`
  display: inline-block;
  position: relative;
  top: -6px;
  padding: 3px 8px 3px 20px;
  margin-top: 7px;
  margin-left: 5px;
  background: grey;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 12px;
  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
  text-decoration: none;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  cursor: pointer;
  vertical-align: middle;
  user-select: none;

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 8px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
    box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
  }

  &:hover {
    background: #5a5a5a;
  }
`;
