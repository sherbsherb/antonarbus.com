import React, { useState } from 'react';
import { CodeSpan } from '../../components/post/CodeSpan';
import { Link } from '../../components/post/Link';

const btnCss = {padding: '5px 20px', margin: '10px 10px 0px 0px', cursor: 'pointer',}

function ComponentWithoutState() {
  let likes = 0;

  function increment() {
    likes += 1
    alert(likes)
  }

  function decrement() {
    likes -= 1
    alert(likes)
  }
  
  return (
    <>
      <h1>{likes}</h1>
      <button onClick={increment} style={btnCss}>+1</button>
      <button onClick={decrement} style={btnCss}>-1</button>
    </>
  )
}

const toRender1 = <ComponentWithoutState />

function ComponentWithState() {

  const [likes, setLikes] = useState(0)

  function increment() {
    setLikes(likes + 1) 
  }
  
  function decrement() {
    setLikes(likes - 1) 
  }

  return (
    <>
      <h1>{likes}</h1>
      <button onClick={increment} style={btnCss}>+1</button>
      <button onClick={decrement} style={btnCss}>-1</button>
    </>
  )
}

const toRender2 = <ComponentWithState/>

export const whyToUseState = {
  title: <>Why to use <CodeSpan>useState()</CodeSpan></>,
  date: '2021.09.25',
  tagsArr: ['react', 'state', 'useState', 'basics', 'hook'],
  postParts: [
    {
      type: 'text',
      val: <>Let's create an incrementor.</>,
    }, 
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React from 'react'
        const btnCss = {padding: '5px 20px', margin: '10px 10px 0px 0px', cursor: 'pointer',}

        function ComponentWithoutState() {
          let likes = 0;
        
          function increment() {
            likes += 1
            alert(likes)
          }
        
          function decrement() {
            likes -= 1
            alert(likes)
          }
          
          return (
            <>
              <h1>{likes}</h1>
              <button onClick={increment} style={btnCss}>+1</button>
              <button onClick={decrement} style={btnCss}>-1</button>
            </>
          )
        }

        const toRender1 = <ComponentWithoutState/>
      `
    },
    {
      type: 'text',
      val: `We can see value change in alert, but not on the screen.`,
    },
    {
      type: 'output',
      val: toRender1
    },
    {
      type: 'text',
      val: <>As far as react renders only changes in virtual DOM, we need 
      to tell him about changes. It can be done with <CodeSpan>useState()</CodeSpan>  
      {' '} <Link link={'https://reactjs.org/docs/hooks-state.html'}>hook</Link>.</>,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useState } from 'react'
        const btnCss = {padding: '5px 20px', marginRight: '10px', cursor: 'pointer',}

        const [count, setCount] = useState(0)

        function ComponentWithState() {

          const [likes, setLikes] = useState(0)
        
          function increment() {
            setLikes(likes + 1) 
          }
          
          function decrement() {
            setLikes(likes - 1) 
          }
        
          return (
            <>
              <h1>{likes}</h1>
              <button onClick={increment} style={btnCss}>+1</button>
              <button onClick={decrement} style={btnCss}>-1</button>
            </>
          )
        }

        const toRender2 = <ComponentWithState/>
      `
    },
    {
      type: 'output',
      val: toRender2,
    },
    {
      type: 'text',
      val: (<>
        We initialize <CodeSpan>likes</CodeSpan> state by <CodeSpan>const [likes, setLikes] = useState(0)</CodeSpan>
      </>)
    },
    {
      type: 'text',
      val: (<>
        <CodeSpan>setLikes</CodeSpan> is a function to change a state value.
      </>)
    },
    {
      type: 'text',
      val: (<>
        We pass a new state value as an argument <CodeSpan>setLikes(likes + 1)</CodeSpan>
      </>)
    },
    {
      type: 'text',
      val: (<>
        Initial state <CodeSpan>0</CodeSpan> is passed as an argument in <CodeSpan>useState(0)</CodeSpan> 
      </>)
    }

  ],
};
