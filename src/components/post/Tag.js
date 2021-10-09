import styled from 'styled-components';

export function Tag(props) {

  return (
    <DivStyled contentEditable={false} onClick={clickHandler}>
      {props.tag}
    </DivStyled>
  );
}

function setCaretToEnd(el) {
  if (!el.childNodes.length) return;
  let range = document.createRange();
  let sel = window.getSelection();
  const lastNode = el.childNodes[el.childNodes.length - 1];
  range.setStart(lastNode, lastNode.length);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
  el.focus();
}

function clickHandler(e) {
  
  e.stopPropagation();
  // add tag to search input
  const inputEl = document.getElementById('input');
  const tagEl = e.target;
  // @ts-ignore
  const clonedTag = tagEl.cloneNode(true);
  clonedTag.style.margin = '0px 5px';
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
  top: -3px;
  padding: 3px 8px 3px 20px;
  margin: 5px;
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
