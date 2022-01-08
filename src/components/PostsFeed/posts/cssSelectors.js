/* eslint-disable quotes */
import { CodeSpan } from '../components/CodeSpan'
import { Lnk } from '../components/Lnk'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'
import styled from 'styled-components'
import React from 'react'
import './css.css'

function Cmpt() {
  const ref = React.useRef(null)
  const [selectorState, setSelectorState] = React.useState('span.cl.cl2')
  const [isInvalidSelectorState, setIsInvalidSelectorState] = React.useState(false)
  const [areNoElsFoundState, setAreNoElsFoundState] = React.useState(false)

  function isSelectorValid(selector) {
    const queryCheck = (s) => document.createDocumentFragment().querySelector(s)
    try {
      queryCheck(selector)
    } catch {
      return false
    }
    return true
  }

  function removeColorFromAllEls(container) {
    container.querySelectorAll('*').forEach((el) => { 
      el.style.background = '' 
      el.style.boxShadow ='none'
    })
  }

  function insertSelector(selector) {
    setSelectorState(selector)
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  React.useEffect(() => {
    const container = ref.current
    removeColorFromAllEls(container)
    isSelectorValid(selectorState) ? setIsInvalidSelectorState(false) : setIsInvalidSelectorState(true)
    if (!isSelectorValid(selectorState)) return
    const selectedEls = Array.from(container.querySelectorAll(selectorState))
    setAreNoElsFoundState(false)
    const noFoundEls = !selectedEls.length
    if (noFoundEls) setAreNoElsFoundState(true)
    selectedEls.forEach(el => { 
      el.style.background = 'green' 
      el.style.boxShadow =' 0 0 1px 1px red'
    })
  }, [selectorState])

  return (
    <>
      <div style={{ color: 'grey' }}>
        {`document.querySelectorAll(' `}
          <input
            value={selectorState}
            onChange={e => setSelectorState(e.target.value)}
            contentEditable
            style={{ borderColor: 'rgb(82 168 236/ 80%)', outline: 'none' }}
          />
        {` ')`}
      </div>
      {isInvalidSelectorState ? <span style={{ color: 'red' }}>Invalid selector!</span> : null}
      {(areNoElsFoundState && !isInvalidSelectorState) ? <span style={{ color: 'red' }}>Not found!</span> : null}
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
          <span myattr='1'>span[myattr='1']</span>
          <span myattr='123'>span[myattr='123']</span>
          <span myattr='1 2 3'>span[myattr='1 2 3']</span>
          <span myattr='1-2-3'>span[myattr='1-2-3']</span>
          <span lang='it'>span[lang='it']</span>
          <span><span>span in span</span></span>
          <div><div>div in div</div></div>
          <span id='before'>span with ::before</span>
          <span id='after'>span with ::after</span>
          <span>span</span>
          <input type="text" required value="required"/>
          <input type="text" disabled value="disabled"/>
          <input type="text" readonly value="readonly"/>
          <input type="checkbox" checked value="checked"/>
          <input type="checkbox" value="not checked"/>
          <input type="number" min='1' max='5' value='3'/>
          <input type="number" min='1' max='5' value='10'/>
          <input type="text" placeholder='placeholder'/>
          <a href="https://google.com" target={'_blank'}>google</a>
          <div>
            <p>first line</p> <p>second line</p> <p>third line</p>
          </div>
          <span></span>
          <ul><li>li 1</li><li>li 2</li><li>li 3</li></ul>
        </div>
      </Container>

      <SelectorDiv>
        <>
          <H5>Basic</H5>
          <div className='grid'>
            <code onClick={() => insertSelector('*')}>*</code> <div>all</div>
            <code onClick={() => insertSelector('span')}>span</code> <div>tag</div>
            <code onClick={() => insertSelector('#id3')}>#id</code> <div>id</div>
            <code onClick={() => insertSelector('.cl2')}>.cl</code> <div>class</div>
            <code onClick={() => insertSelector('.cl.cl1')}>.cl1.cl2</code> <div>.cl1 and .cl2</div>
            <code onClick={() => insertSelector('#id1, #id3')}>.cl1, .cl2</code> <div>.cl1 or .cl2</div>
          </div>
        </>

        <>
          <H5>Relations</H5>
          <div className='grid'>
            <code onClick={() => insertSelector('.outer span')}>div p</code> <div>all <i>p</i> in <i>div</i></div>
            <code onClick={() => insertSelector('.outer > span')}>div > p</code> <div><i>p</i> children of <i>div</i></div>
            <code onClick={() => insertSelector('#id2 ~ span')}>div ~ p</code> <div> <i>p</i> siblings after <i>div</i></div>
            <code onClick={() => insertSelector('#id2 + span')}>div + p</code> <div>next <i>p</i> sibling after <i>div</i></div>
          </div>
        </>

        <>
          <H5>Attributes</H5>
          <div className='grid'>
            <code onClick={() => insertSelector('[id]')}>[attr]</code> <div>has attr</div>
            <code onClick={() => insertSelector('[id="id3"]')}>[attr='val']</code> <div>exact</div>
            <code onClick={() => insertSelector('[myattr^="1"]')}>[attr^='val']</code> <div>begins</div>
            <code onClick={() => insertSelector('[myattr$="3"]')}>[attr$='val']</code> <div>ends</div>
            <code onClick={() => insertSelector('[myattr*="2"]')}>[attr*='val']</code> <div>contains</div>
            <code onClick={() => insertSelector('[myattr~="2"]')}>[attr~='val']</code> <div>contains word</div>
            <code onClick={() => insertSelector('[myattr|="1"]')}>[attr|='val']</code> <div>exact or starts from 'val-'</div>
            <code onClick={() => insertSelector('span:lang(it)')}>:lang(language)</code> <div>element with a lang attribute</div>
          </div>
        </>

        <>
          <H5>Filter siblings</H5>
          <div className='grid'>
            <code onClick={() => insertSelector('.outer *:first-child')}>:first-child</code> <div>first child</div>
            <code onClick={() => insertSelector('.outer *:last-child')}>:last-child</code> <div>last</div>
            <code onClick={() => insertSelector('.outer *:only-child')}>:only-child</code> <div>sole</div>
            <code onClick={() => insertSelector('.outer *:nth-child(5)')}>:nth-child(n)</code> <div>n-th</div>
            <code onClick={() => insertSelector('.outer *:nth-last-child(5)')}>:nth-last-child(n)</code> <div>...from the end</div>
            <code onClick={() => insertSelector('.outer *:nth-child(2n)')}>:nth-child(2n)</code> <div>2, 4, 6</div>
            <code onClick={() => insertSelector('.outer *:nth-child(2n+1)')}>:nth-child(2n+1)</code> <div>1, 3, 5</div>
            <code onClick={() => insertSelector('.outer *:nth-child(3n+2)')}>:nth-child(3n+2)</code> <div>2, 5, 8</div>
            <code onClick={() => insertSelector('.outer *:nth-child(odd)')}>:nth-child(odd)</code> <div>odd</div>
            <code onClick={() => insertSelector('.outer *:nth-child(even)')}>:nth-child(even)</code> <div>even</div>
          </div>
        </>

        <>
          <H5>Filter siblings of same tag</H5>
          <div className='grid'>
            <code onClick={() => insertSelector('.outer span:first-of-type')}>:first-of-type</code> <div>first child</div>
            <code onClick={() => insertSelector('.outer span:last-of-type')}>:last-of-type</code> <div>last</div>
            <code onClick={() => insertSelector('.outer span:only-of-type')}>:only-of-type</code> <div>sole</div>
            <code onClick={() => insertSelector('.outer span:nth-of-type(5)')}>:nth-of-type(n)</code> <div>n-th</div>
            <code onClick={() => insertSelector('.outer span:nth-last-of-type(5)')}>:nth-last-of-type(n)</code> <div>from the end</div>
          </div>
        </>

        <>
          <H5>Pseudo elements</H5>
          <div>They do not exist in DOM. Use <CodeSpan>const styles = window.getComputedStyle(element,':after')</CodeSpan> to get data.</div>
          <div className='grid'>
            <code onClick={() => insertSelector('span::before')}>::before</code> <div>creates empty element before children (css only)</div>
            <code onClick={() => insertSelector('span::after')}>::after</code> <div>after children (css only)</div>
            <code onClick={() => insertSelector('::selection')}>::selection</code> <div>portion of an element that is selected by a user (css only)</div>
            <code onClick={() => insertSelector('::marker')}>::marker</code> <div>markers of list items (css only)</div>
            <code onClick={() => insertSelector('::placeholder')}>::placeholder</code><div>placeholder (css only)</div>
            <code onClick={() => insertSelector('::first-letter')}>::first-letter</code> <div>first letter (css only)</div>
            <code onClick={() => insertSelector('::first-line')}>::first-line</code> <div>first line (css only)</div>
          </div>
        </>

        <>
          <H5>Pseudo class state</H5>
          <div>Works in css only</div>
          <div className='grid'>
            <code onClick={() => insertSelector(':hover')}>:hover</code> <div>hovered</div>
            <code onClick={() => insertSelector(':focus')}>:focus</code> <div>focused</div>
          </div>
        </>

        <>
          <H5>Input</H5>
          <div className='grid'>
            <code onClick={() => insertSelector(':required')}>:required</code> <div>'required' attr</div>
            <code onClick={() => insertSelector('input:optional')}>:optional</code> <div>inputs with no "required" attr</div>
            <code onClick={() => insertSelector(':checked')}>:checked</code> <div>'checked' attr</div>
            <code onClick={() => insertSelector(':disabled')}>:disabled</code> <div>'disabled' attr</div>
            <code onClick={() => insertSelector(':enabled')}>:enabled</code> <div>no 'disabled' attr</div>
            <code onClick={() => insertSelector(':in-range')}>:in-range</code> <div>value within a range</div>
            <code onClick={() => insertSelector(':out-of-range')}>:out-of-range</code> <div>value out of a range</div>
            <code onClick={() => insertSelector(':valid')}>:valid</code> <div>valid values</div>
            <code onClick={() => insertSelector(':invalid')}>:invalid</code> <div>invalid values</div>
            <code onClick={() => insertSelector('input:read-only')}>:read-only</code><div>inputs with "readonly" attr</div>
            <code onClick={() => insertSelector('input:read-write')}>:read-write</code><div>inputs without "readonly" attr</div>
            <code onClick={() => insertSelector(':default')}>:default</code> <div>default checkbox</div>

          </div>
        </>

        <>
          <H5>Link</H5>
          <div className='grid'>
            <code onClick={() => insertSelector('a:visited')}>:visited</code> <div>visited links (css only)</div>
            <code onClick={() => insertSelector('a:active')}>:active</code> <div>when element under click (css only)</div>
            <code onClick={() => insertSelector(':target')}>:target</code> <div>for ex. el has <i>id="intro"</i>, selector will match if url is <i>http://...#intro</i></div>
            <code onClick={() => insertSelector(':link')}>:link</code> <div>unvisited links</div>
          </div>
        </>

        <>
          <H5>Other</H5>
          <div className='grid'>
            <code onClick={() => insertSelector('.outer *:not([id]):not(div)')}>:not(selector)</code> <div>all except selector</div>
            <code onClick={() => insertSelector('span:empty')}>:empty</code> <div>w/o children & text nodes</div>
            <code onClick={() => insertSelector(':root')}>:root</code> <div>document's html root element</div>
          </div>
        </>
      </SelectorDiv>
    </>
  )
}
const Container = styled.div`
  .outer {
    padding: 5px;
    
  }

  div, span, ul, a {
    border: 1px solid #e9a7a7;
    border-radius: 5px;
    
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 5px 5px;
    min-height: 50px;
    width: 100%;
  }

  .outer span, .outer div {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: .8em;
    padding: 5px;
  }

  .outer div {
    max-width: 100px;
    display: inline;
  }

  #before::before {
    content: "♥";
    color: red;
    font-size: 14px;
  }

  #after::after {
    content: "♥";
    color: green;
    font-size: 14px;
  }


`

const SelectorDiv = styled.div `
  code {
    cursor: pointer;
  }

  .grid {
    display: inline-grid;
    grid-template-columns: auto 1fr;
    grid-gap: 5px 20px;
    justify-items: start;
    border: 1px solid grey;
    border-radius: 8px;
    padding: 10px;
    margin-right: 10px; 
    margin-bottom: 20px;
  }
`

const toRender = <Cmpt />

export const cssSelectors = {
  title: 'CSS selectors',
  date: '2022.01.08',
  tagsArr: ['JavaScript', 'CSS', 'style', 'DOM'],
  postParts: [
    {
      type: 'text',
      val: <>DOM elements can be selected by CSS selectors via <CodeSpan><CodeSpan>document.querySelectorAll()</CodeSpan></CodeSpan></>,
    },
    {
      val: <H3>CSS selectors</H3>,
    },



    {
      type: 'output',
      val: toRender,
    },
  ],
}
