import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from "styled-components";


export function NotFound() {
  return (
    <Div>
        <div>Not found</div>
        <div><Link to="/">Go back</Link></div>
    </Div>
  );
}

const Div = styled.div `

  font-size: 2rem;
  height: 80%;
  text-align: center;
  margin-top: 30px;
  font-weight: 600;


`
