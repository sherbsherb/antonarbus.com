import { CodeSpan } from '../components/post/CodeSpan';
import { Link } from '../components/post/Link';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// ACTION
const increment = (num = 1) => ({ type: 'INCREMENT', payload: num });
const decrement = (num = 1) => ({ type: 'DECREMENT', payload: num  });
const signIn = () => ({ type: 'SIGN_IN' });

// REDUCERS
const counterReducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') return state + action.payload;
  if (action.type === 'DECREMENT') return state - action.payload;
  return state;
};

const isLoggedReducer = (state = false, action) => {
  if (action.type === 'SIGN_IN') return !state;
  return state;
};

const allReducers = combineReducers({
  counterReducer: counterReducer,
  isLoggedReducer: isLoggedReducer,
});

// STORE (holds all states)
let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // opt param for dev tools
);
store.subscribe(() => console.log(store.getState())); // display in the console

// DISPATCH
store.dispatch(increment()); // 1
store.dispatch(increment(5)); // 6
store.dispatch(increment()); // 7
store.dispatch(decrement()); // 6

const style = {
  border: '2px solid grey',
  padding: '10px',
  margin: '10px',
  maxWidth: '500px',
};

function Component() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLoggedReducer);
  const dispatch = useDispatch();

  return (
    <div style={style}>
      <h3>Parent</h3>
      <div>
        Counter: <strong>{counter}</strong>
      </div>
      <button onClick={() => dispatch(increment(5))}>Increment</button>&#8194;
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        isLogged: <strong>{isLogged.toString()}</strong>
      </div>
      <button onClick={() => dispatch(signIn())}>Sign in/out</button>
    </div>
  );
}

const toRender = (
  <Provider store={store}>
    <Component />
  </Provider>
);

export const reduxExample = {
  title: <>Redux example</>,
  date: '2021.10.13',
  tagsArr: [
    'react',
    'redux',
    'action',
    'reducer',
    'store',
    'dispatch',
    'basics',
  ],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Link path={'https://redux.js.org/'}>Redux</Link> is a state manager
          for JS applications.
        </>
      ),
    },
    {
      type: 'text',
      val: 'The idea is not to keep our states in components, but keep them outside in one object.',
    },
    {
      type: 'text',
      val: (
        <>
          Install redux with npm{' '}
          <Link path={'https://www.npmjs.com/package/redux'}>
            <CodeSpan>{'npm i redux'}</CodeSpan>
          </Link>{' '}
          & connect it to the React with{' '}
          <Link path={'https://www.npmjs.com/package/react-redux'}>
            <CodeSpan>{'npm i react-redux'}</CodeSpan>
          </Link>{' '}
          <br />
          Also good to install{' '}
          <Link path={'https://github.com/zalmoxisus/redux-devtools-extension'}>
            Redux DevTools Extension
          </Link>{' '}
          for{' '}
          <Link
            path={
              'https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd'
            }
          >
            Chrome
          </Link>
          .
        </>
      ),
    },
    {
      type: '',
      val: (
        <>
          In redux we deal with STORE, ACTION, REDUCER, DISPATCH
          <ol>
            <li>States are kept in STORE.</li>
            <li>ACTION describes what we want to do.</li>
            <li>REDUCER updates the STORE in accordance to an ACTION we choose.</li>
            <li>DISPATCH sends an ACTION to a REDUCER.</li>
          </ol>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React from 'react';
        import { createStore, combineReducers } from 'redux';
        import { Provider, useSelector, useDispatch } from 'react-redux';
        
        // ACTION
        const increment = (num = 1) => ({ type: 'INCREMENT', payload: num });
        const decrement = (num = 1) => ({ type: 'DECREMENT', payload: num });
        const signIn = () => ({ type: 'SIGN_IN' });
        
        // REDUCERS
        const counterReducer = (state = 0, action) => {
          if (action.type === 'INCREMENT') return state + action.payload;
          if (action.type === 'DECREMENT') return state - action.payload;
          return state;
        };
        
        const isLoggedReducer = (state = false, action) => {
          if (action.type === 'SIGN_IN') return !state;
          return state;
        };
        
        const allReducers = combineReducers({
          counterReducer: counterReducer,
          isLoggedReducer: isLoggedReducer,
        });
        
        // STORE (holds all states)
        let store = createStore(
          allReducers,
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // opt param for dev tools
        );
        store.subscribe(() => console.log(store.getState())); // display in the console
        
        // DISPATCH
        store.dispatch(increment()); // 1
        store.dispatch(increment(5)); // 6
        store.dispatch(increment()); // 7
        store.dispatch(decrement()); // 6
        
        const style = { border: '2px solid grey', padding: '10px', margin: '10px', maxWidth: '500px' };
        
        function Component() {
          const counter = useSelector(state => state.counterReducer);
          const isLogged = useSelector(state => state.isLoggedReducer);
          const dispatch = useDispatch();
        
          return (
            <div style={style}>
              <h3>Parent</h3>
              <div>
                Counter: <strong>{counter}</strong>
              </div>
              <button onClick={() => dispatch(increment(5))}>Increment</button>&#8194;
              <button onClick={() => dispatch(decrement())}>Decrement</button>
              <div>
                isLogged: <strong>{isLogged.toString()}</strong>
              </div>
              <button onClick={() => dispatch(signIn())}>Sign in/out</button>
            </div>
          );
        }
        
        const toRender = (
          <Provider store={store}>
            <Component />
          </Provider>
        );
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
