/* eslint-disable quotes */
import { CodeSpan } from '../../components/CodeSpan'
import { Lnk } from '../../components/Lnk'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'
import styled from 'styled-components'
import React from 'react'

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
    document.querySelector('#css-selectors').scrollIntoView({ behavior: 'smooth' })
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
        {`box.querySelectorAll(' `}
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
      box
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
          <div><p>first line</p> <p>second line</p> <p>third line</p></div>
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
            <code onClick={() => insertSelector('.outer > *:nth-child(n+3)')}>:nth-child(n+3)</code> <div>3, 4, 5, ...</div>
            <code onClick={() => insertSelector('.outer > *:nth-child(-n+9)')}>:nth-child(-n+9)</code> <div>..., 7, 8, 9</div>
            <code onClick={() => insertSelector('.outer *:nth-child(2n+1)')}>:nth-child(2n+1)</code> <div>1, 3, 5</div>
            <code onClick={() => insertSelector('.outer *:nth-child(3n+2)')}>:nth-child(3n+2)</code> <div>2, 5, 8</div>
            <code onClick={() => insertSelector('.outer > *:nth-child(n+3):nth-child(-n+5)')}>:nth-child(n+3):nth-child(-n+5)</code> <div>3, 4, 5</div>
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
          <div>They do not exist in DOM, use <CodeSpan>const styles = window.getComputedStyle(element,':after')</CodeSpan> to get data by JS.</div>
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
          <div className='grid'>
            <code onClick={() => insertSelector(':hover')}>:hover</code> <div>elements currently hovered</div>
            <code onClick={() => insertSelector(':focus')}>:focus</code> <div>elements currently focused</div>
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
            <code onClick={() => insertSelector(':root')}>:root</code> <div>document's html root element, works on <i>document</i></div>
          </div>
        </>
      </SelectorDiv>
    </>
  )
}
const Container = styled.div`
  border: 1px solid grey;
  padding: 5px;
  border-radius: 5px;

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
    justify-content: flex-start;
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
    padding: 0px 4px;
  }
  .grid {
    display: inline-grid;
    grid-template-columns: auto 1fr;
    justify-items: start;
    align-items: start;
    grid-gap: 5px 20px;
    border: 1px solid grey;
    border-radius: 8px;
    padding: 10px;
    margin-right: 10px; 
    margin-bottom: 20px;
  }
`
const toRender = <Cmpt />

export const jsDomSelectionAndTraversal = {
  title: 'DOM selection & traversal in JavaScript',
  date: '2022.01.09',
  tagsArr: ['JavaScript', 'basics', 'CSS', 'jQuery', 'style', 'DOM'],
  postParts: [
    {
      val: <H3>Glossary</H3>,
    },
    {
      val: <>
        
          <p><i>Ancestors</i> - all elements up the DOM tree</p>
          <p><i>Descendants</i> - all elements down the DOM tree</p>
          <p><i>Children</i> - all elements 1 level down the DOM tree</p>
          <p><i>Siblings</i> - elements on the same DOM level (children of the same parent)</p>
          <p> DOM tree consists of different nodes: <i>document</i>, <i>documentFragment</i>, <i>documentType</i>, <i>element</i>, <i>text</i>, <i>comment</i>.</p>
          <p><i>Element</i> is a <i>Node</i> object, which represents html tag.</p>
        
      </>,
    },
    {
      val: <H3>Selection</H3>,
    },
    {
      val: <>
        DOM elements can be selected by CSS selectors via following methods
        <ul>
          <li><CodeSpan>el.querySelectorAll('selector')</CodeSpan> <i>static</i> Collection of els or or an empty NodeList if no matches.</li>
          <li><CodeSpan>el.querySelector('selector')</CodeSpan> <i>static</i> element, <code>null</code> if no matches, same as <CodeSpan>el.querySelectorAll('selector')[0]</CodeSpan></li>
          <li><CodeSpan>document.getElementById('id')</CodeSpan> element with <code>id</code> or <code>null</code> if no matches.</li>
          <li><CodeSpan>el.getElementsByClassName('className')</CodeSpan> <i>live</i> Collection of elements with the given class name.</li>
          <li><CodeSpan>el.getElementsByTagName('tagName')</CodeSpan> <i>live</i> Collection of elements with the given tag name or <code>null</code> if no matches. Tag can be <code>*</code> for any tags.</li>
          <li><CodeSpan>document.getElementsByName('nameVal')</CodeSpan> <i>live</i> Collection of elements with a given name attribute.</li>
        </ul>
      </>,
    },
    {
      val: <H3>Main DOM objects & shortcuts</H3>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>window</CodeSpan> global parent object, which contains DOM</li>
          <li><CodeSpan>document</CodeSpan>, same as <CodeSpan>window.document</CodeSpan>, top node, entry point into DOM</li>
          <li><CodeSpan>document.documentElement</CodeSpan>, same as <CodeSpan>document.querySelector('html')</CodeSpan>, {'<html>'} element</li>
          <li><CodeSpan>document.head</CodeSpan>, same as <CodeSpan>document.querySelector('head')</CodeSpan>, {'<head>'} element</li>
          <li><CodeSpan>document.body</CodeSpan>, same as <CodeSpan>document.querySelector('body')</CodeSpan>, {'<body>'} element</li>
        </ul>
      </>,
    },
    {
      val: <H3 id='css-selectors'>CSS selectors</H3>,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      val: <H3>Testing</H3>,
    },
    {
      val: <ul>
        <li><CodeSpan>el.matches('selectorStr')</CodeSpan> <code>true</code> if the <code>el</code> matches <code>selectorStr</code></li>
        <li><CodeSpan>node.contains(otherNode)</CodeSpan> <code>true</code> if the <code>node</code> contains <code>otherNode</code> or if they are same nodes</li>
        <li><CodeSpan>node.hasChildNodes()</CodeSpan> <code>true</code> if node has child nodes</li>
        <li><CodeSpan>node.isEqualNode(otherNode)</CodeSpan> <code>true</code> if the two nodes are alike</li>
        <li><CodeSpan>node.isSameNode(otherNode)</CodeSpan> <code>true</code> if the two nodes are same object</li>
      </ul>,
    },
    {
      val: <H3>Navigation</H3>,
    },
    {
      val: <H5>HTML elements</H5>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>el.parentElement</CodeSpan> parent element one level up the DOM</li>
          <li><CodeSpan>el.children</CodeSpan> elements one level down the DOM</li>
          <li><CodeSpan>el.childElementCount</CodeSpan> number of children</li>
          <li><CodeSpan>el.firstElementChild</CodeSpan> first child</li>
          <li><CodeSpan>el.lastElementChild</CodeSpan> last child</li>
          <li><CodeSpan>el.nextElementSibling</CodeSpan> next element on the same DOM level</li>
          <li><CodeSpan>el.previousElementSibling</CodeSpan> previous element on the same DOM level</li>
          <li><CodeSpan>el.closest('selector')</CodeSpan> first matching element starting from itself and upwards, <code>null</code> if no matches</li>
          <li><CodeSpan>el.shadowRoot</CodeSpan> shadow root el that is hosted by the element, or null</li>
        </ul>
      </>,
    },
    {
      val: <H5>Nodes</H5>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>node.parentNode</CodeSpan></li>
          <li><CodeSpan>node.parentElement</CodeSpan></li>
          <li><CodeSpan>node.childNodes</CodeSpan> <b>live</b> NodeList with all children (one level down)</li>
          <li><CodeSpan>node.firstChild = Node.childNodes[0]</CodeSpan></li>
          <li><CodeSpan>node.lastChild = Node.childNodes[Node.childNodes.length - 1]</CodeSpan></li>
          <li><CodeSpan>node.nextSibling</CodeSpan></li>
          <li><CodeSpan>node.previousSibling</CodeSpan></li>
          <li><CodeSpan>node.getRootNode()</CodeSpan> - return HTMLDocument or ShadowRoot</li>
        </ul>
      </>,
    },
    {
      val: <H5>Table</H5>,
    },
    {
      val: <>
        <CodeSpan>let tbl = document.querySelector('table')</CodeSpan>
        <ul>
          <li><CodeSpan>tbl.caption</CodeSpan> {'<caption>'}</li>
          <li><CodeSpan>tbl.tHead</CodeSpan> {'<thead>'}</li>
          <li><CodeSpan>tbl.tBodies</CodeSpan> tBodies collection</li>
          <li><CodeSpan>tbl.tBodies[0]</CodeSpan> {'<tbody>'}</li>
          <li><CodeSpan>tbl.tFoot</CodeSpan> {'<tfoot>'}</li>
          <li><CodeSpan>tbl.rows</CodeSpan> collection of table rows (tr)</li>
          <li><CodeSpan>tbl.tHead.rows</CodeSpan> tr collection </li>
          <li><CodeSpan>tbl.tBodies[0].rows</CodeSpan> tr collection</li>
          <li><CodeSpan>tbl.tFoot.rows</CodeSpan> tr collection</li>
          <li><CodeSpan>tbl.rows[1].sectionRowIndex</CodeSpan> 0, index of the given {'<tr>'} inside {'<thead>'}, {'<tbody>'}, {'<tfoot>'}</li>
          <li><CodeSpan>tbl.rows[1].rowIndex</CodeSpan> 1, index of the given {'<tr>'} inside table</li>
          <li><CodeSpan>tbl.tBodies[0].rows[1].cells</CodeSpan> collection of cells {'<td>'} in 2nd row </li>
          <li><CodeSpan>tbl.tHead.rows[0].cells[3].cellIndex</CodeSpan> 3, cell index inside {'<tr>'}</li>
        </ul>
      </>,
    },
    {
      val: <H5>Form</H5>,
    },
    {
      val: <>
        Forms are members of the special collection <code>document.forms</code>
        <ul>
          <li><CodeSpan>document.forms</CodeSpan> collection of forms</li>
          <li><CodeSpan>document.forms[0]</CodeSpan> first form in the document</li>
          <li><CodeSpan>document.forms.login</CodeSpan> form with attribute <code>name="login"</code></li>
          <li><CodeSpan>document.forms["login"]</CodeSpan> same</li>
          <li><CodeSpan>document.forms["login"].elements</CodeSpan> collection of elements in the form</li>
          <li><CodeSpan>document.forms["login"].elements.password</CodeSpan> collection of elements with attribute <code>name="password"</code></li>
          <li><CodeSpan>document.forms["login"].elements["password"]</CodeSpan> same</li>
          <li><CodeSpan>document.forms["login"].password</CodeSpan> same, short notation</li>
        </ul>
      </>,
    },
    {
      val: <>
        Forms are members of the special collection <code>document.forms</code>
        <ul>
          <li><CodeSpan>input.value = "new value"</CodeSpan> xxx</li>
        </ul>
      </>,
    },
    {
      val: <H3><Lnk path="https://jquery.com/download/">jQuery</Lnk></H3>,
    },
    {
      val: <H5>Select</H5>,
    },
    {
      val: <ul>
        <li><CodeSpan>jQuery('selector')</CodeSpan>, same as <CodeSpan>$('selector')</CodeSpan>, searches in DOM and returns a new jQuery obj with found elements <br /></li>
        <li><CodeSpan>$('span', this)</CodeSpan>, same as <CodeSpan>$(this).find('span')</CodeSpan></li>
        <li><CodeSpan>$(el)</CodeSpan> can feed html element into jQuery to make it a jQ object</li>
        <li><CodeSpan>$("div").get()</CodeSpan> - returns array instead of jQ object</li>
        <li><CodeSpan>$("div").get(0)</CodeSpan>, same as <CodeSpan>$("div")[0]</CodeSpan> - returns first DOM element</li>
        <li>All CSS selectors works for jQ</li>
      </ul>,
    },
    {
      val: <H5>Additional selectors</H5>,
    },
    {
      val: <ul>
        <li><CodeSpan>$("[attr!='val']")</CodeSpan> elements without attr value <CodeSpan>// $("textarea[placeholder!='Word']")</CodeSpan></li>
        <li><CodeSpan>$(":hidden")</CodeSpan> hidden elements </li>
        <li><CodeSpan>$(":visible")</CodeSpan> not hidden elements, elements with <code>visibility: hidden;</code> & <code>opacity: 0</code> are also <i>visible</i></li>
        <li><CodeSpan>$(":eq(index)")</CodeSpan> element at index within the matched set. <span style={{ color: 'red' }}>Deprecated</span>, <code>.eq()</code> is better.</li>
        <li><CodeSpan>$(":first")</CodeSpan> first matched DOM element. <span style={{ color: 'red' }}>Deprecated</span>, <code>.first()</code> is better.</li>
        <li><CodeSpan>$(":last")</CodeSpan> last one. <span style={{ color: 'red' }}>Deprecated</span>, <code>.last()</code> is better.</li>
        <li><CodeSpan>$(":even")</CodeSpan> 1st, 3rd element, and so on. <span style={{ color: 'red' }}>Deprecated</span>, <code>.even()</code> is better.</li>
        <li><CodeSpan>$(":odd")</CodeSpan> 2nd, 4th element, and so. <span style={{ color: 'red' }}>Deprecated</span>, <code>.odd()</code> is better.</li>
        <li><CodeSpan>$(":gt(index)")</CodeSpan> elements at an index greater than. <span style={{ color: 'red' }}>Deprecated</span>, <code>.slice(4)</code> is better.</li>
        <li><CodeSpan>$(":lt(index)")</CodeSpan> elements at an index less than. <span style={{ color: 'red' }}>Deprecated</span>, <code>.slice(0, 3)</code> is better.</li>
        <li><CodeSpan>$(":header")</CodeSpan>  elements that are headers, like h1, h2, h3 and so on. Better to use <code>.filter(":header")</code></li>
        <li><CodeSpan>$(":animated")</CodeSpan> elements that are in the progress of an animation. Better to use <code>.filter(":animated")</code></li>
        <li><CodeSpan>$(":contains(text)")</CodeSpan> elements that contain the specified text</li>
        <li><CodeSpan>$(":has(selector)")</CodeSpan> elements which contain at least one element. Better to use <code>.has()</code></li>
        <li><CodeSpan>$(":parent")</CodeSpan> elements that have at least one child node</li>
        <li><CodeSpan>$(":checkbox")</CodeSpan> inputs of type 'checkbox'</li>
        <li><CodeSpan>$(":radio")</CodeSpan> inputs of type 'radio'</li>
        <li><CodeSpan>$(":selected")</CodeSpan> options that are selected</li>
        <li><CodeSpan>$(":button")</CodeSpan> button elements and elements of type 'button'</li>
        <li><CodeSpan>$(":file")</CodeSpan> elements of type 'file'</li>
        <li><CodeSpan>$(":input")</CodeSpan> input, textarea, select and button elements</li>
        <li><CodeSpan>$(":image")</CodeSpan>  elements of type 'image'</li>
        <li><CodeSpan>$(":submit")</CodeSpan> elements of type 'submit'</li>
        <li><CodeSpan>$(":password")</CodeSpan> elements of type 'password'</li>
        <li><CodeSpan>$(":reset")</CodeSpan> elements of type 'reset'</li>
        <li><CodeSpan>$(":text")</CodeSpan> inputs of type 'text' + inputs without type</li>
      </ul>,
    },
    {
      val: <H5>Traverse up</H5>,
    },
    {
      val: <ul>
        <li><CodeSpan>$().parent()</CodeSpan> first parent element</li>
        <li><CodeSpan>$().offsetParent()</CodeSpan> first positioned element up in the DOM tree</li>
        <li><CodeSpan>$().parents()</CodeSpan> all parents in the DOM tree up to {'<html>'}</li>
        <li><CodeSpan>$().parentsUntil(selector)</CodeSpan> all parents until <code>selector</code></li>
        <li><CodeSpan>$().closest(selector)</CodeSpan> first element up in the DOM tree</li>
      </ul>,
    },
    {
      val: <H5>Traverse down</H5>,
    },
    {
      val: <ul>
        <li><CodeSpan>$().children()</CodeSpan> elements one level down the DOM</li>
        <li><CodeSpan>$().children('span')</CodeSpan> same, but filters</li>
        <li><CodeSpan>$().find('span');</CodeSpan> searches all the way down</li>
      </ul>,
    },
    {
      val: <H5>Traverse sideways</H5>,
    },
    {
      val: <ul>
        <li><CodeSpan>$().siblings()</CodeSpan> elements around on the same DOM level</li>
        <li><CodeSpan>$().next()</CodeSpan> next element</li>
        <li><CodeSpan>$().prev()</CodeSpan> previous element</li>
        <li><CodeSpan>$().nextAll()</CodeSpan> next elements</li>
        <li><CodeSpan>$().prevAll()</CodeSpan> previous elements</li>
        <li><CodeSpan>$().nextUntil(selector)</CodeSpan> next elements until <code>selector</code></li>
        <li><CodeSpan>$().prevUntil(selector)</CodeSpan> previous elements until <code>selector</code></li>
      </ul>,
    },
    {
      val: <H5>Reduce</H5>,
    },
    {
      val: <ul>
        <li><CodeSpan>$().first()</CodeSpan> first element from jQ object</li>
        <li><CodeSpan>$().last()</CodeSpan> last element from jQ object</li>
        <li><CodeSpan>$().filter(selector)</CodeSpan> reduce the list to match the selector</li>
        <li><CodeSpan>$().eq(1)</CodeSpan> elements with specified index</li>
        <li><CodeSpan>$().eq(-1)</CodeSpan> negative index is possible</li>
        <li><CodeSpan>$().even()</CodeSpan> even ones, numbered from zero</li>
        <li><CodeSpan>$().odd()</CodeSpan> odd ones, numbered from zero</li>
        <li><CodeSpan>$().slice(6, 8)</CodeSpan> els from start to optional end</li>
        <li><CodeSpan>$().has(selector)</CodeSpan> els having matching descendants</li>
        <li><CodeSpan>$().not(selector)</CodeSpan> els not matching selector</li>
      </ul>,
    },
    {
      val: <H5>Expand</H5>,
    },
    {
      val: <ul>
        <li><CodeSpan>$().add(selector)</CodeSpan> union of elements</li>
        <li><CodeSpan>$('#th2').next().addBack()</CodeSpan> add previous set of elements on the stack <code>// th#th2, th#th3</code></li>
        <li><CodeSpan>$('textarea').first().end()</CodeSpan> restores previous filtering</li>
      </ul>,
    },
    {
      val: <H5>Test</H5>,
    },
    {
      val: <ul>
        <li><CodeSpan>$().has(selector).length</CodeSpan> check if an element is inside another</li>
        <li><CodeSpan>$().is(selector)</CodeSpan> test against selector or el</li>
      </ul>,
    },
    {
      val: <H5>Index</H5>,
    },
    {
      val: <ul>
        <li><CodeSpan>$().eq(1).index()</CodeSpan> 1, returns index</li>
        <li><CodeSpan>$('span').eq(0).index('*')</CodeSpan> 56, returns index of 1st span from collection of all elements</li>
      </ul>,
    },
  ],
}
