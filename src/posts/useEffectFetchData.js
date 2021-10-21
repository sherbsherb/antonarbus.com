import React, { useEffect, useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Link } from '../components/post/Link';

function Component() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 5)))
      .catch(err => console.log(err));
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

const toRender = <Component />;

export const useEffectFetchData = {
  title: (
    <>
      <CodeSpan>useEffect()</CodeSpan> & data fetching
    </>
  ),
  date: '2021.10.16',
  tagsArr: ['react', 'useEffect', 'hook', 'fetch', 'json'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Let's get data from{' '}
          <Link path={'https://jsonplaceholder.typicode.com/guide/'}>
            jsonplaceholder
          </Link>{' '}
          by <i>fetching</i> and setting the <i>state</i> inside{' '}
          <CodeSpan>useEffect()</CodeSpan>.
        </>
      ),
    },

    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component() {
          const [posts, setPosts] = useState([]);
        
          useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
              .then(res => res.json())
              .then(data => setPosts(data.slice(0, 5)))
              .catch(err => console.log(err));
          }, []);
        
          return (
            <ul>
              {posts.map(post => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
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
