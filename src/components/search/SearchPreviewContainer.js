import styled from "styled-components";
import React from 'react'
import { useDispatch } from "react-redux";

export  function SearchPreviewContainer(props) {
  const dispatch = useDispatch()

  function closeSearchPreview() {
    dispatch({ type: 'close search menu' })
    dispatch({ type: 'remove tags input val' })
  }
  const closeSearchPreviewMemo = React.useCallback(closeSearchPreview, [dispatch]);

  React.useEffect(() => {
    document.addEventListener('click', closeSearchPreviewMemo);
    return () => document.removeEventListener('click', closeSearchPreviewMemo)
  }, [closeSearchPreviewMemo]);

  return (
    <Div>
      {props.children}
    </Div>
  )
}

export const Div = styled.div`
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: #adadad;
  padding: 35px 10px 10px 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 2px #0000003d
`;