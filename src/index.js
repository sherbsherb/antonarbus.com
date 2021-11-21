import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const StyleReset = createGlobalStyle`
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
      background: rgb(0 0 0 / 12%);
      border-radius: 5px;
      box-shadow: inset 0 0 6px rgb(0 0 0 / 10%);

      &:hover {
        background: rgb(0 0 0 / 20%);
      }
    }

    &::-webkit-scrollbar-track {
      background: rgb(0 0 0 / 5%);
    }
  }

  html {
    ${'' /* makes scrollbar fixed and not moving content to the left */}
    overflow: overlay;
  }

  body {
    height: 100%;
    margin: 0;
    line-height: 1.6;
    padding-left: 10px;
    padding-right: 10px;
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-image: 
      linear-gradient(to right bottom,rgb(255 255 255 / 70%),rgb(255 255 255 / 30%)), 
      linear-gradient(to right top,rgb(0 0 0),rgb(0 0 0));
    background-attachment: fixed;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  ol, ul {
    padding-left: 15px;
    margin-top: 15px;
    li {
      padding-left: 10px;
    }
  }

  ul li::marker {
    content: '-';
    margin-right: 3px;
  }

  mark {
    border-radius: 2px !important;
  }

  kbd {
    margin: 0px 0.1em;
    padding: 0.1em 0.6em;
    border-radius: 3px;
    border: 1px solid rgb(204, 204, 204);
    color: rgb(51, 51, 51);
    line-height: 1.4;
    font-family: Arial,Helvetica,sans-serif;
    display: inline-block;
    box-shadow: 0px 1px 0px rgba(0,0,0,0.2), inset 0px 0px 0px 2px #ffffff;
    background-color: rgb(247, 247, 247);
    text-shadow: 0 1px 0 #fff;
    font-size: 12px;
  }

  a {
    color: #0083bf;
    text-decoration: underline 0.09em transparent;
    transition: text-decoration-color 300ms;

    &:hover {
      text-decoration-color: #0083bf;
    }
  }


`;

ReactDOM.render(
  <>
    <StyleReset />
    <App />
  </>,
  document.getElementById('root')
);
