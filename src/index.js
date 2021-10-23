import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './redux/reducers/_allReducers';

const StyleReset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    line-height: 1.6;

    &::-webkit-scrollbar {
      /* display: none; */
      width: 5px;
      height: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: #f1f1f1;
      border-radius: 5px;
      box-shadow: inset 0 0 6px #19191980;

      &:hover {
        background: #dbdbdbb0;
      }
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

    background: #c9ccd3;
    background-image: linear-gradient(
      -180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    background-blend-mode: lighten;

    min-height: 100vh;
    color: #3a3a3a;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  ol, ul {
    padding-left: 15px;
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

`;

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <StyleReset />
    <App />
  </Provider>,
  document.getElementById('root')
);

