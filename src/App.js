import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ManyPosts } from './components/ManyPosts/ManyPosts.js';
import { Nav } from './components/nav/_Nav.js';
import SearchContainer from './components/search/_SearchContainer.js';
import allReducers from './redux/reducers/_allReducers';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NotFound } from './components/NotFound/NotFound.js';

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <SearchContainer />
        <Switch>
          <Route path="/" exact component={ManyPosts} />
          <Route path="/xxx" exact component={XXX} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

function XXX() {
  return <div>XXX</div>;
}

