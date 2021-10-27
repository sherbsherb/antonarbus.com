import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

export function NotFound(props) {
  console.log(props);
  return (
    <Div>
      <div>
        <span style={{ color: '#03a9f4' }}>
          www.antonarbus.com{props.location.pathname}
        </span>{' '}
        <span style={{ color: '#f7695f' }}>not found!</span>
      </div>
      <div>
        <Link to="/" style={{ textDecoration: 'underline', color: '#5e5e5e' }}>
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
