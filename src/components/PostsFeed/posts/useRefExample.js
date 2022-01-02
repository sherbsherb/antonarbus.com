import React from 'react'
import { CodeSpan } from '../components/CodeSpan'
import { Lnk } from '../components/Lnk'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

function UseRefExample() {
  const ref1 = React.useRef()
  const ref2 = React.useRef()
  const ref3 = React.useRef()

  function clickHandler() {
    ref1.current.style.background = 'yellow'
    ref2.current.style.background = 'red'
    ref3.current.style.background = 'green'
    console.log(ref1.current, ref2.current, ref3.current)
  }

  return (
    <>
      <span ref={ref1}>span1 </span>
      <span ref={ref2}>span2 </span>
      <span ref={ref3}>span3 </span>
      <button onClick={clickHandler}>Color spans</button>
    </>
  )
}

const toRender = <UseRefExample />

export const useRefExample = {
  title: (
    <>
      <CodeSpan>useRef()</CodeSpan> hook
    </>
  ),
  date: '2021.10.07',
  tagsArr: ['react', 'useRef', 'element', 'basics', 'hook', 'DOM'],
  postParts: [
    {
      type: 'text',
      val: <>
        To access a DOM or React element we may use <CodeSpan>React.useRef()</CodeSpan> {' '}
        <Lnk link={'https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components'} text={'hook'}/>.
      </>,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function UseRefExample() {
          const ref1 = React.useRef();
          const ref2 = React.useRef();
          const ref3 = React.useRef();
        
          function clickHandler() {
            ref1.current.style.background = 'yellow'
            ref2.current.style.background = 'red'
            ref3.current.style.background = 'green'
            console.log(ref1.current,ref2.current,ref3.current)
          }
        
          return (
            <>
              <span ref={ref1}>span1 </span>
              <span ref={ref2}>span2 </span>
              <span ref={ref3}>span3 </span>
              <button onClick={clickHandler}>Color spans</button>
            </>
          );
        }
        
        const toRender = <UseRefExample />
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
}
