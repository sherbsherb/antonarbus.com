import styled from "styled-components";

import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";

export  function SearchPreviewContainer(props) {

  const dispatch = useDispatch()
  
  function closeSearchPreview() {
    dispatch({ type: 'close search menu' })
    dispatch({ type: 'remove tags input val' })
  }
  
  useEffect(() => {
    document.addEventListener('click', closeSearchPreview);
    return () => document.removeEventListener('click', closeSearchPreview)
    
  }, []);

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
  border-color: #c0c0c0;
  padding: 35px 10px 10px 10px;
  background-color: #f6f6f6;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;