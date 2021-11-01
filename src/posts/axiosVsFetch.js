import React, { useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Lnk } from '../components/post/Lnk';
import axios from 'axios';
const style = { width: '20px', margin: '0px 10px' };

function Component() {
  const [inputVal1, setInputVal1] = useState('1');
  const [inputVal2, setInputVal2] = useState('2');
  const [title1, setTitle1] = useState('title1');
  const [title2, setTitle2] = useState('title2');

  return (
    <div>
      <div>
        <button
          onClick={() => {
            fetch('https://jsonplaceholder.typicode.com/posts/' + inputVal1)
              .then(res => res.json())
              .then(data => setTitle1(data.title))
              .catch(err => console.log(err));
          }}
        >
          Fetch article #
        </button>
        <input
          type="text"
          value={inputVal1}
          style={style}
          onChange={e => setInputVal1(e.target.value)}
        />
        <span>{title1}</span>
      </div>

      <div>
        <button
          onClick={() => {
            axios('https://jsonplaceholder.typicode.com/posts/' + inputVal2)
              .then(res => setTitle2(res.data.title))
              .catch(err => console.log(err));
          }}
        >
          Axios article #
        </button>
        <input
          type="text"
          value={inputVal2}
          style={style}
          onChange={e => setInputVal2(e.target.value)}
        />
        <span>{title2}</span>
      </div>
    </div>
  );
}

const toRender = <Component />;

export const axiosVsFetch = {
  title: (
    <>
      Axios vs Fetch
    </>
  ),
  date: '2021.10.16',
  tagsArr: ['ajax', 'fetch', 'axios'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Lnk path={'https://developer.mozilla.org/en-US/docs/Web/API/fetch'}>
        Fetch
      </Lnk> api is built into a browser, but <Lnk path={'https://axios-http.com/docs/intro'}>Axios</Lnk> can be installed
          with <CodeSpan>npm i axios</CodeSpan>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          With <i>Fetch</i> GET request we get response and then with built-in
          method convert it into text or json. <br /><br />
          <i>Axios</i> does not have intermediate step and we immediately have an access to data.
        </>
      ),
    },

    {
      type: 'code',
      lang: 'jsx',
      val: `
        // Fetch
        onClick={() => {
          fetch('https://jsonplaceholder.typicode.com/posts/' + inputVal1)
            .then(res => res.json())
            .then(data => setTitle1(data.title))
        }}

        // Axios
        onClick={() => {
          axios('https://jsonplaceholder.typicode.com/posts/' + inputVal2)
            .then(res => setTitle2(res.data.title))
        }}
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
