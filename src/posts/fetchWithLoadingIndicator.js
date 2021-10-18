import axios from 'axios';
import React, { useState } from 'react';
import { Link } from '../components/post/Link';
import randomNumFromTo from '../helpers/functions/randomNumFromTo';
import sleeper from '../helpers/functions/sleeper';

function Component() {
  const [state, setState] = useState({ loading: false, errorMsg: '', title: '', postNum: -1 });

  function getTitle() {
    const postNum = randomNumFromTo(1, 150);
    setState({ ...state, loading: true, postNum: postNum, errorMsg: '' });
    axios('https://jsonplaceholder.typicode.com/posts/' + postNum)
      .then(sleeper(1000))
      .then(res => setState({ loading: false,errorMsg: '',title: res.data.title,postNum: postNum }))
      .catch(err => setState({ loading: false, errorMsg: 'smth went wrong', title: '', postNum: postNum }));
  }

  return (
    <>
      <button onClick={getTitle}>Get post's title</button>
      Post #{state.postNum} Title: {state.loading ? 'Loading...' : state.title}
      <span style={{ color: 'red' }}>{state.errorMsg}</span>
    </>
  );
}

const toRender = <Component />;

export const fetchWithLoadingIndicator = {
  title: <>Fetch with loading indicator</>,
  date: '2021.10.18',
  tagsArr: ['react', 'useEffect', 'hook', 'fetch', 'ajax', 'axios', 'json'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Let's fetch data from{' '}
          <Link path={'https://jsonplaceholder.typicode.com/guide/'}>
            jsonplaceholder
          </Link>{' '}
          and set a state upon success or error, which will lead to a render,{' '}
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
        import axios from 'axios';
        import React, { useState } from 'react';
        import randomNumFromTo from '../helpers/functions/randomNumFromTo';
        import sleeper from '../helpers/functions/sleeper';
        
        function Component() {
          const [state, setState] = useState({ loading: false, errorMsg: '', title: '', postNum: -1 });
        
          function getTitle() {
            const postNum = randomNumFromTo(1, 150);
            setState({ ...state, loading: true, postNum: postNum, errorMsg: '' });
            axios('https://jsonplaceholder.typicode.com/posts/' + postNum)
              .then(sleeper(1000))
              .then(res => setState({ loading: false,errorMsg: '',title: res.data.title,postNum: postNum }))
              .catch(err => setState({ loading: false, errorMsg: 'smth went wrong', title: '', postNum: postNum }));
          }
        
          return (
            <>
              <button onClick={getTitle}>Get post's title</button>
              Post #{state.postNum} Title: {state.loading ? 'Loading...' : state.title}
              <span style={{ color: 'red' }}>{state.errorMsg}</span>
            </>
          );
        }
        
        const toRender = <Component />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
