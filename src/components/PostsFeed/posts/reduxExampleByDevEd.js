import { CodeSpan } from '../components/CodeSpan';
import { Lnk } from '../components/Lnk';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// REDUCERS
const counterReducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') return state + (action.num || 1);
  if (action.type === 'DECREMENT') return state - action.num;
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
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // opt param for dev tools
);
store.subscribe(() => console.log(store.getState())); // display in the console

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
      <div>
        Counter: <strong>{counter}</strong>
      </div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      &#8194;
      <button
        onClick={() => {
          // with store.getState() we read data directly from the store object
          console.log(store.getState().counterReducer);
          dispatch({ type: 'DECREMENT', num: 5 });
          // we can see that dispatch() works synchronously & we get immediate update
          console.log(store.getState().counterReducer);
        }}
      >
        Decrement
      </button>
      <div>
        isLogged: <strong>{isLogged.toString()}</strong>
      </div>
      <button onClick={() => dispatch({ type: 'SIGN_IN' })}>Sign in/out</button>
    </div>
  );
}

const toRender = (
  <Provider store={store}>
    <Component />
  </Provider>
);

export const reduxExampleByDevEd = {
  title: (
    <>
      Redux example
    </>
  ),
  date: '2021.10.14',
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
          <Lnk path={'https://redux.js.org/'}>Redux</Lnk> is a state manager
          for JS applications.
        </>
      ),
    },
    {
      type: 'text',
      val: `The idea behind the Redux is to keep our states outside of components in one object. 
      Every component has an access to Redux and we do not have to pass states & set state functions via
      props throughout the whole app, which can make the code very messy.`,
    },
    {
      type: 'text',
      val: (
        <>
          First of all install <i>Redux</i> with {' '}
          <Lnk path={'https://www.npmjs.com/package/redux'}>
            <CodeSpan>{'npm i redux'}</CodeSpan>
          </Lnk>{' '}
          & connect it to the React with{' '}
          <Lnk path={'https://www.npmjs.com/package/react-redux'}>
            <CodeSpan>{'npm i react-redux'}</CodeSpan>
          </Lnk>{' '}
          <br />
          <br />
          Also good to install{' '}
          <Lnk path={'https://github.com/zalmoxisus/redux-devtools-extension'}>
            Redux DevTools Extension
          </Lnk>{' '}
          for{' '}
          <Lnk
            path={
              'https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd'
            }
          >
            Chrome{' '}
          </Lnk>
          to observe state in real time in dev tools.
        </>
      ),
    },
    {
      type: '',
      val: (
        <>
          In redux we deal with STORE, ACTION, REDUCER, DISPATCH
          <ol>
            <li>STORE keeps all states.</li>
            <li>ACTION is an object which describes what we want to do with a state.</li>
            <li>
              REDUCER updates the STORE in accordance to an ACTION we choose.
            </li>
            <li>DISPATCH sends an ACTION to a REDUCER.</li>
          </ol>
        </>
      ),
    },

    {
      type: 'text',
      val: (
        <>
          <i>Reducer</i> is a function where we set an initial state and put
          logic how we want to modify a state depending on an <i>action.type</i>{' '}
          which we provide as an object in the argument of the
          <CodeSpan>{`dispatch({ type: 'SIGN_IN' })`}</CodeSpan> function.
        </>
      ),
    },

    {
      type: 'code',
      lang: 'jsx',
      val: `
        const counterReducer = (state = 0, action) => {
          if (action.type === 'INCREMENT') return state + (action.num || 1);
          if (action.type === 'DECREMENT') return state - action.num;
          return state;
        };
        
        const isLoggedReducer = (state = false, action) => {
          if (action.type === 'SIGN_IN') return !state;
          return state;
        };
      `,
    },
   
    {
      type: 'text',
      val: (
        <>
          Reducers can be combined into one object with{' '}
          <CodeSpan>combineReducers()</CodeSpan> function from the <i>redux</i>{' '}
          library.
        </>
      ),
    },


    {
      type: 'code',
      lang: 'jsx',
      val: `        
        const allReducers = combineReducers({
          counterReducer: counterReducer,
          isLoggedReducer: isLoggedReducer,
        });
      `,
    },
   
    {
      type: 'text',
      val: (
        <>
          To update a state we launch the{' '}
          <CodeSpan>{`dispatch(actionObj)`}</CodeSpan> function with the
          following object parameter{' '}
          <CodeSpan>{`{ type: 'SIGN_IN' }`}</CodeSpan>, which corresponds to the{' '}
          <CodeSpan>action.type</CodeSpan> of a reducer.
          <CodeSpan>{`dispatch()`}</CodeSpan> works synchronously.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        store.dispatch({ type: 'INCREMENT' }); // 1
        store.dispatch({ type: 'INCREMENT',  num: 5 }); // 6
        store.dispatch({ type: 'DECREMENT' }); // 5
      `,
    },
    {
      type: 'text',
      val: (
        <>
          To avoid typing <i>ACTION</i> objects by hand inside <i>dispatch()</i>{' '}
          functions, we may keep actions in a separate file as functions, which
          return such object. <br />
          <br />I personally do not appreciate such approach and did do not use
          on this webpage.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const increment = (num = 1) => ({ type: 'INCREMENT', payload: num });
        const decrement = (num = 1) => ({ type: 'DECREMENT', payload: num });
        const signIn = () => ({ type: 'SIGN_IN' });

        store.dispatch(decrement()); 
      `,
    },
    {
      type: 'text',
      val: (
        <>
          In the main app component we initiate the state store with{' '}
          <CodeSpan>createStore(allReducers)</CodeSpan> with built-in function.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          With <CodeSpan>{`store.getState()`}</CodeSpan> we may read data
          directly from the store object.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          To extract a state from the Redux store we use{' '}
          <CodeSpan>
            {'const counter = useSelector(state => state.counterReducer)'}
          </CodeSpan>{' '}
          built-in function. <br />
          <i>useSelector()</i> only accesses store, it also rerenders your
          component when the result of your selector function changes.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>{'useDispatch()'}</CodeSpan> hook returns a reference to the{' '}
          <i>dispatch</i> function from the Redux store.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          The whole application should be wrapped in a{' '}
          <CodeSpan>{'<Provider>'}</CodeSpan> component to make the store
          available throughout the component tree.
        </>
      ),
    },
    {
      type: 'text',
      val: `Whole app's code.`
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React from 'react';
        import { createStore, combineReducers } from 'redux';
        import { Provider, useSelector, useDispatch } from 'react-redux';

        // REDUCERS
        const counterReducer = (state = 0, action) => {
          if (action.type === 'INCREMENT') return state + (action.num || 1);
          if (action.type === 'DECREMENT') return state - action.num;
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
        // display in the console
        store.subscribe(() => console.log(store.getState())); 

        const style = { border: '2px solid grey', padding: '10px', margin: '10px', maxWidth: '500px', };

        function Component() {
          const counter = useSelector(state => state.counterReducer);
          const isLogged = useSelector(state => state.isLoggedReducer);
          const dispatch = useDispatch();

          return (
            <div style={style}>
              <div>
                Counter: <strong>{counter}</strong>
              </div>
              <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
              &#8194;
              <button
                onClick={() => {
                  // with store.getState() we read data directly from the store object
                  console.log(store.getState().counterReducer);
                  dispatch({ type: 'DECREMENT', num: 5 });
                  // we can see that dispatch() works synchronously & we get immediate update
                  console.log(store.getState().counterReducer);
                }}
              >
                Decrement
              </button>
              <div>
                isLogged: <strong>{isLogged.toString()}</strong>
              </div>
              <button onClick={() => dispatch({ type: 'SIGN_IN' })}>Sign in/out</button>
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
    {
      type: 'text',
      val: (
        <>
        Inspired by{' '}
        <Lnk path={'https://www.youtube.com/watch?v=CVpUuw9XSjY'}>Dev Ed</Lnk>
      </>
      ),
    },
  ],
};
