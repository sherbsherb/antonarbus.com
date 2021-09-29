import React, { useState } from 'react';
import { Link, CodeInline } from '../../components/post components/Post';

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
  title: <>Why to use <CodeInline>useState()</CodeInline></>,
  date: '2021.09.25',
  tagsArr: ['react', 'state', 'useState', 'basics', 'hook'],
  abstract: 'abstract from the article',
  articlesArr: [
    {
      type: 'text',
      val: <>Let's create an incrementor.</>,
    }, 
    {
      type: 'code',
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
      to tell him about changes. It can be done with <CodeInline>useState()</CodeInline>  
      {' '} <Link link={'https://reactjs.org/docs/hooks-state.html'}>hook</Link>.</>,
    },
    {
      type: 'code',
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
        We initialize <CodeInline>likes</CodeInline> state by <CodeInline>const [likes, setLikes] = useState(0)</CodeInline>
      </>)
    },
    {
      type: 'text',
      val: (<>
        <CodeInline>setLikes</CodeInline> is a function to change a state value.
      </>)
    },
    {
      type: 'text',
      val: (<>
        We pass a new state value as an argument <CodeInline>setLikes(likes + 1)</CodeInline>
      </>)
    },
    {
      type: 'text',
      val: (<>
        Initial state <CodeInline>0</CodeInline> is passed as an argument in <CodeInline>useState(0)</CodeInline> 
      </>)
    }

  ],
};
