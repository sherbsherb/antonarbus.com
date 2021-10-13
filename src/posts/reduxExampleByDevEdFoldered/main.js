// \main.js
import { CodeSpan } from '../../components/post/CodeSpan';
import { Link } from '../../components/post/Link';
import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import allReducers from './reducers'; // note, there is no '/index.js' in the path
import { decrement, increment, signIn } from './actions'; // note, there is no '/index.js' in the path
import filesImg from './files.png';

// STORE (holds all states)
const store = createStore(
  allReducers,
  // opt param for dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const style = {
  border: '2px solid grey',
  padding: '10px',
  margin: '10px',
  maxWidth: '500px',
};

function Component() {
  // bring the state from the store container
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

export const reduxExampleByDevEdFoldered = {
  title: (
    <>
      Redux example by{' '}
      <Link path={'https://www.youtube.com/watch?v=CVpUuw9XSjY'}>Dev Ed</Link>{' '}
      in folders
    </>
  ),
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
      val: 'Same example as previous, but a bit better structured.',
    },
    {
      type: 'text',
      val: (
        <>
          Again install with npm{' '}
          <Link path={'https://www.npmjs.com/package/redux'}>
            <CodeSpan>{'npm i redux'}</CodeSpan>
          </Link>{' '}
          &{' '}
          <Link path={'https://www.npmjs.com/package/react-redux'}>
            <CodeSpan>{'npm i react-redux'}</CodeSpan>
          </Link>
          .
        </>
      ),
    },
    {
      type: 'text',
      val: 'Files structure.',
    },
    {
      type: 'img',
      path: filesImg,
    },
    {
      type: 'text',
      val: (
        <>
          We have <CodeSpan>counter</CodeSpan> & <CodeSpan>isLogged</CodeSpan>{' '}
          reducers, which are combined in <CodeSpan>index.js</CodeSpan> file.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <i>Reducer</i> is a function where we set an initial state and put
          logic how we want to modify a state depending on <i>action.type</i> we
          provide as an object in the argument of{' '}
          <CodeSpan>{`dispatch({ type: 'SIGN_IN' })`}</CodeSpan> function.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // \reducers\counter.js
        const counterReducer = (state = 0, action) => {
          if (action.type === 'INCREMENT') return state + action.payload;
          if (action.type === 'DECREMENT') return state - action.payload;
          return state;
        };
        export default counterReducer;
      `,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // \reducers\isLogged.js 
        const isLoggedReducer = (state = false, action) => {
          if (action.type === 'SIGN_IN') return !state;
          return state;
        };
        export default isLoggedReducer;
      `,
    },
    {
      type: 'text',
      val: (
        <>
          In file <CodeSpan>index.js</CodeSpan> we combine reducers together in
          one object with a special <CodeSpan>combineReducers()</CodeSpan>{' '}
          function from the <i>redux</i> library.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // \reducers\index.js
        import counterReducer from './counter';
        import isLoggedReducer from './isLogged';
        import { combineReducers } from 'redux';
        
        const allReducers = combineReducers({
          counterReducer,
          isLoggedReducer,
        });
        export default allReducers;
      `,
    },
    {
      type: 'text',
      val: (
        <>
          To update a state we launch the{' '}
          <CodeSpan>{`dispatch(actionObj)`}</CodeSpan> function with an
          following object parameter{' '}
          <CodeSpan>{`{ type: 'SIGN_IN' }`}</CodeSpan>, which corresponds to the{' '}
          <CodeSpan>action.type</CodeSpan> of a reducer.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          To avoid typing objects by hand, we keep actions in a separate file as functions, which return such object.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // \actions\index.js
        export const increment = (num = 1) => ({ type: 'INCREMENT', payload: num });
        export const decrement = (num = 1) => ({ type: 'DECREMENT', payload: num });
        export const signIn = () => ({ type: 'SIGN_IN' });
      `,
    },
    {
      type: 'text',
      val: (
        <>
          In the main app component we initiate the state store with <CodeSpan>createStore(allReducers)</CodeSpan> with built-in function.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          To extract a state from the Redux store we use <CodeSpan>{'const counter = useSelector(state => state.counterReducer)'}</CodeSpan> built-in function.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>{'useDispatch()'}</CodeSpan> hook returns a reference to the <i>dispatch</i> function from the Redux store.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          The whole application should be wrapped in a <CodeSpan>{'<Provider>'}</CodeSpan> component to make the store available throughout the component tree.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // \main.js
        import React from 'react';
        import { createStore } from 'redux';
        import { Provider, useSelector, useDispatch } from 'react-redux';
        import allReducers from './reducers'; // note, there is no '/index.js' in the path
        import { decrement, increment, signIn } from './actions'; // note, there is no '/index.js' in the path
        const style = { border: '2px solid grey',padding: '10px',margin: '10px',maxWidth: '500px' };
        
        const store = createStore(allReducers);
        
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
