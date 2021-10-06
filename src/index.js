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

    &::-webkit-scrollbar {
    /* display: none; */
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #f1f1f1;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px #19191980;
    box-shadow: inset 0 0 6px #19191980;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
  }

  
  a {
    text-decoration: none;
  }


  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;

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

