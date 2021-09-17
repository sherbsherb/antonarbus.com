import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {createGlobalStyle} from 'styled-components'

const StyleReset = createGlobalStyle `
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  
  a {
    text-decoration: none;
  }


  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <StyleReset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

