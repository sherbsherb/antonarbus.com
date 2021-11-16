import React from 'react';
import { CodeSpan } from '../components/CodeSpan';

export const promisePost = {
  title: 'Promise',
  date: '2021.11.16',
  tagsArr: ['javascript', 'vanilla', 'js'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Synchronous functions are executed first, asynchronous - after and sometimes not clear when exactly.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Async funcs are <CodeSpan>setTimeout()</CodeSpan>, <CodeSpan>setInterval()</CodeSpan>, http calls, <CodeSpan>.then()</CodeSpan>, <CodeSpan>.catch()</CodeSpan>, <CodeSpan>.finally()</CodeSpan>.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          3 goes after 4 in the example below, but we need vice versa. 
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        console.log(1)
        console.log(2)
        setTimeout(() => console.log(3), 1000)
        console.log(4)
        // 1, 2, 4, 3
      `,
    },
    {
      type: 'text',
      val: (
        <>
          To ensure that code is run after async func we may wrap async func in <i>promise</i> and chain our code in <CodeSpan>.then()</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      console.log(1)
      console.log(2)
      const logC = new Promise(resolve => {
        setTimeout(() => {
          console.log(3)
          resolve('done')
        }, 1000)
      })
      logC.then(result => console.log(4))
      // 1, 2, 3, 4
      `,
    },
    {
      type: 'text',
      val: (
        <>
          Full promise syntax.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      const promise = new Promise((resolve, reject) => {
        /*some code*/
        resolve('done')
        reject(new Error('failed'))
      })
      
      promise
        .finally(() => { /*some code*/ })
        .then(
          result => { console.log(result) },
          error => { console.log(error) }
        )
        .catch(error => { console.log(error) })
      `,
    },
    
  ],
};