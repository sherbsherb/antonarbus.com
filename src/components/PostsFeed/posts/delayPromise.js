import axios from 'axios';
import React from 'react';

function Component() {

  function sleeper(ms) {
    return function(x) {
      return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
  }

  return (
    <>
      <button
        onClick={() => {
          alert('start request')
          axios('https://jsonplaceholder.typicode.com/posts/1')
          .then(res => alert('Title: ' + res.data.title))
          .catch(err => alert(JSON.stringify(err)));
        }}
      >
        Get respond from server
      </button>
      <br/>
      <button
        onClick={() => {
          alert('start request with 3s delay')
          axios('https://jsonplaceholder.typicode.com/posts/1')
          .then(sleeper(3000))
          .then(res => alert('Title: ' + res.data.title))
          .catch(err => alert(JSON.stringify(err)));
        }}
      >
        Get respond from server with delay
      </button>
    </>
  );
}

const toRender = <Component />;

export const delayPromise = {
  title: <>Function to delay a promise</>,
  date: '2021.10.19',
  tagsArr: ['function', 'vanilla', 'js', 'JavaScript', 'delay', 'promise'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Function returns a timed out promise.
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

        // the usage
        axios('https://jsonplaceholder.typicode.com/posts/1')
          .then(sleeper(3000))
          .then(res => alert('Title: ' + res.data.title))
      `,
    },
    {
      type: 'text',
      val: 'Full code',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import axios from 'axios';
        import React from 'react';
        
        function Component() {
        
          function sleeper(ms) {
            return function(x) {
              return new Promise(resolve => setTimeout(() => resolve(x), ms));
            };
          }
        
          return (
            <>
              <button
                onClick={() => {
                  alert('start request')
                  axios('https://jsonplaceholder.typicode.com/posts/1')
                  .then(res => alert('Title: ' + res.data.title))
                  .catch(err => alert(JSON.stringify(err)));
                }}
              >
                Get respond from server
              </button>
              <br/>
              <button
                onClick={() => {
                  alert('start request 3s delay')
                  axios('https://jsonplaceholder.typicode.com/posts/1')
                  .then(sleeper(3000))
                  .then(res => alert('Title: ' + res.data.title))
                  .catch(err => alert(JSON.stringify(err)));
                }}
              >
                Get respond from server with delay
              </button>
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
