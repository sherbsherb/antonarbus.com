import { CodeSpan } from '../components/CodeSpan'
import { Lnk } from '../components/Lnk'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'
import styled from 'styled-components'
import React from 'react'



function Cmpt() {
  const ref = React.useRef(null)
  const [state, setState] = React.useState('span.cl.cl2')
  const [wrongSelectorState, setWrongSelectorState] = React.useState(false)

  const queryCheck = s => document.createDocumentFragment().querySelector(s)
  const isSelectorValid = selector => {
    try { queryCheck(selector) } catch {
      setWrongSelectorState(false)
      return false
    }
    setWrongSelectorState(true)
    return true
  }

  React.useEffect(() => {
    console.log(666)
    const container = ref.current
    container.querySelectorAll('*').forEach(function(el, i) {
      el.style.background = ''
    })

    if (!isSelectorValid(state)) return
    Array.from(container.querySelectorAll(state)).forEach(function(el, i) {
      el.style.background = 'green'
    })
  }, [state])

  return (
    <>
      <input
        type="text"
        value={state}
        onChange={e => setState(e.target.value)}
      />
      <br />
      {wrongSelectorState ? null : <span style={{ color: 'red' }}>Invalid selector!</span>}
      <br />
      <Container ref={ref}>
        div.outer <br />
        <div className='outer'>
          <span id='id1' className='cl cl1'>span#id1.cl.cl1</span>
          <span id='id2' className='cl cl1'>span#id2.cl.cl1</span>
          <span id='id3' className='cl cl1'>span#id3.cl.cl1</span>
          <span id='id4' className='cl cl1'>span#id4.cl.cl1</span>
          <span id='id5' className='cl cl1'>span#id5.cl.cl1</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
          <span className='cl cl2'>span.cl.cl2</span>
        </div>
    </Container>
    </>
  )
}
const Container = styled.div`
  div, span {
    border: 1px solid #e9a7a7;
    margin: 5px;
    border-radius: 5px;
    
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    gap: 2px 2px;
    min-height: 50px;
    width: 100%;
  }

  span {
    background: grey;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: .8em;
    padding: 5px;

  }
`

const toRender = <Cmpt />

export const domTraversal = {
  title: 'DOM traversal',
  date: '2022.01.02',
  tagsArr: ['JavaScript', 'jQuery', 'DOM'],
  postParts: [
    {
      type: 'text',
      val: <>
        DOM elements can be selected with JavaScript with CSS selectors + elements / nodes methods
      </>
    },
    {
      type: 'output',
      val: toRender
    },
  ],
}
