import axios from 'axios'
import { useReducer, useState } from 'react'
import { CodeSpan } from '../components/CodeSpan'
import { Lnk } from '../components/Lnk'
import randomNumFromTo from '../../../helpers/functions/randomNumFromTo'
import sleeper from '../../../helpers/functions/sleeper'

function ComponentWithUseState() {
  const [state, setState] = useState({ loading: false, errorMsg: '', title: '', postNum: -1 })

  function getTitle() {
    const postNum = randomNumFromTo(1, 150)
    const url = `https://jsonplaceholder.typicode.com/posts/${postNum}`
    setState({ ...state, loading: true, postNum: postNum, errorMsg: '' })
    axios(url)
      .then(sleeper(1000))
      .then(res => setState({ loading: false, errorMsg: '', title: res.data.title, postNum: postNum }))
      .catch(() => setState({ loading: false, errorMsg: 'smth went wrong', title: '', postNum: postNum }))
  }

  return (
    <>
      <button onClick={getTitle}>Get post's title (useState version)</button>
      Post #{state.postNum} Title: {state.loading ? 'Loading...' : state.title}
      <span style={{ color: 'red' }}>{state.errorMsg}</span>
    </>
  )
}

const toRender1 = <ComponentWithUseState />

function ComponentWithUseReducer() {
  const initState = { loading: false, errorMsg: '', title: '', postNum: -1 }

  function reducer(state, action) {
    if (action.type === 'loading') return { ...state, loading: true, postNum: action.postNum, errorMsg: '' }
    if (action.type === 'fetchSuccess') return { ...state, loading: false, errorMsg: '', title: action.title, postNum: action.postNum }
    if (action.type === 'fetchFail') return { ...state, loading: false, errorMsg: 'smth went wrong', title: '', postNum: action.postNum }
    return state
  }

  const [state, dispatch] = useReducer(reducer, initState)

  function getTitle() {
    const postNum = randomNumFromTo(1, 150)
    const url = `https://jsonplaceholder.typicode.com/posts/${postNum}`
    dispatch({ type: 'loading', postNum: postNum })
    axios(url)
      .then(sleeper(1000))
      .then(res => dispatch({ type: 'fetchSuccess', title: res.data.title, postNum: postNum }))
      .catch(() => dispatch({ type: 'fetchFail', postNum: postNum }))
  }

  return (
    <>
      <button onClick={getTitle}>Get post's title (useReducer version)</button>
      Post #{state.postNum} Title: {state.loading ? 'Loading...' : state.title}
      <span style={{ color: 'red' }}>{state.errorMsg}</span>
    </>
  )
}

const toRender2 = <ComponentWithUseReducer />

export const fetchWithLoadingIndicator = {
  title: <>Fetch with loading indicator</>,
  date: '2021.10.18',
  tagsArr: ['react', 'fetch', 'ajax', 'axios', 'useState', 'useReducer', 'hook'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Let's fetch data from{' '}
          <Lnk path={'https://jsonplaceholder.typicode.com/guide/'}>
            jsonplaceholder
          </Lnk>{' '}
          and set a state with <CodeSpan>useState()</CodeSpan> hook upon success or error, which will lead to a render,{' '}
          <i>It's that simple!</i>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Let's put artificial delay function between request and response to be
          able to see a state change on a screen, otherwise it happens too fast.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function sleeper(ms) {
          return function(x) {
            return new Promise(resolve => setTimeout(() => resolve(x), ms));
          };
        }
      `,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function ComponentWithUseState() {
          const [state, setState] = useState({ loading: false, errorMsg: '', title: '', postNum: -1 });
        
          function getTitle() {
            const postNum = randomNumFromTo(1, 150);
            const url = 'https://jsonplaceholder.typicode.com/posts/' + postNum
            setState({ ...state, loading: true, postNum: postNum, errorMsg: '' });
            axios(url)
              .then(sleeper(1000))
              .then(res => setState({ loading: false, errorMsg: '', title: res.data.title, postNum: postNum }))
              .catch(err => setState({ loading: false, errorMsg: 'smth went wrong', title: '', postNum: postNum }));
          }
        
          return (
            <>
              <button onClick={getTitle}>Get post's title (useState version)</button>
              Post #{state.postNum} Title: {state.loading ? 'Loading...' : state.title}
              <span style={{ color: 'red' }}>{state.errorMsg}</span>
            </>
          );
        }
        
        const toRender1 = <ComponentWithUseState />;
      `,
    },
    {
      type: 'output',
      val: toRender1,
    },
    {
      type: 'text',
      val: (
        <>
          Same idea, but with <CodeSpan>useReducer()</CodeSpan> hook.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function ComponentWithUseReducer() {
          const initState = { loading: false, errorMsg: '', title: '', postNum: -1 };
          
          function reducer(state, action) {
            if (action.type === 'loading') return { ...state, loading: true, postNum: action.postNum, errorMsg: '' }
            if (action.type === 'fetchSuccess') return { ...state, loading: false, errorMsg: '', title: action.title, postNum: action.postNum }
            if (action.type === 'fetchFail') return { ...state, loading: false, errorMsg: 'smth went wrong', title: '', postNum: action.postNum }
            return state
          }
        
          const [state, dispatch] = useReducer(reducer, initState);
        
          function getTitle() {
            const postNum = randomNumFromTo(1, 150)
            const url = 'https://jsonplaceholder.typicode.com/posts/' + postNum
            dispatch({ type: 'loading', postNum: postNum })
            axios(url)
              .then(sleeper(1000))
              .then(res => dispatch({ type: 'fetchSuccess', title: res.data.title, postNum: postNum }))
              .catch(err => dispatch({ type: 'fetchFail', postNum: postNum  }));
          }
        
          return (
            <>
              <button onClick={getTitle}>Get post's title (useReducer version)</button>
              Post #{state.postNum} Title: {state.loading ? 'Loading...' : state.title}
              <span style={{ color: 'red' }}>{state.errorMsg}</span>
            </>
          );
        }
        
        const toRender2 = <ComponentWithUseReducer />;
      `,
    },
    {
      type: 'output',
      val: toRender2,
    }
  ],
}
