import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

export function NotFound(props) {
  console.log(props);
  
  return (
    <Div>
      <div style={{ color: '#f7695f' }}>not found!</div>
      <div>
        <Link
          to="/"
          style={{ textDecoration: 'underline', color: '#5e5e5e' }}
          onClick={e => {
            e.preventDefault();
            props.history.goBack();
          }}
        >
          Go back
        </Link>
      </div>
    </Div>
  );
}

const Div = styled.div`
  font-size: 1.5rem;
  height: 80%;
  text-align: center;
  margin-top: 30px;
  font-weight: 600;
`;
