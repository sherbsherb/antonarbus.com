import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
import React from 'react'
// import imgFile from './img.jpg'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'

function Cmpt0() {
  function func() {
    alert(1) // synchronous call
    setTimeout(() => alert(2)) // macrotask sent to the end of the queue
    Promise.resolve().then(res => alert(3)) // microtask
    alert(4) // regular synchronous call
    // 1 --> 4 --> 3 --> 2
  }
  return <button onClick={func}>Click</button>
}
const toRender0 = <Cmpt0 />

function Cmpt1() {
  const ref = React.useRef()
  let i = 0
  function count() {
    do {
      i++
      ref.current.innerHTML = i
    } while (i % 1e3 !== 0)
    if (i < 1e6) queueMicrotask(count)
  }

  return (
    <div>
      <div ref={ref}>0</div>
      <button onClick={count}>Click</button>
    </div>
  )
}
const toRender1 = <Cmpt1 />

function Cmpt2() {
  const ref = React.useRef()

  function countToBln() {
    let count = 0, start = Date.now()
    for (let j = 0; j < 1e9; j++) count++
    ref.current.innerHTML = count
    alert(`Done in ${Date.now() - start} ms`)
  }

  return (
    <div>
      <div ref={ref}>0</div>
      <button onClick={countToBln}>Click</button>
    </div>
  )
}
const toRender2 = <Cmpt2 />

function Cmpt3() {
  const ref = React.useRef()

  function func() {
    let i = 0, j = 0, start = Date.now()

    function countToMln() {
      for (let k = 0; k < 1e6; k++) i++
      ref.current.innerHTML = i
    }

    function countToBln() {
      if (i < 1e9) {
        setTimeout(countToBln) // schedule the new call // 1000 calls
        j++
      }
      if (i === 1e9) {
        alert(`Done in ${Date.now() - start} ms with ${j} timeout() calls`)
        return
      }
      countToMln()
    }

    countToBln()
  }

  return (
    <div>
      <div ref={ref}>0</div>
      <button onClick={func}>Click</button>
    </div>
  )
}
const toRender3 = <Cmpt3 />

export const jsEventLoop = {
  title: 'Event loop in JavaScript',
  date: '2021.12.31',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <H3>Event loop</H3>,
    },
    {
      val: <ul>
        <li>JS execution flow is based on an endless <i>event loop</i></li>
        <li>JS executes tasks one by one starting from the oldest</li>
        <li>When there are no tasks anymore JS waits for new ones</li>
        <li>Task may come while the engine is busy, then it’s queued</li>
        <li>Queue of tasks is called <i>macrotask queue</i></li>
        <li>Rendering happens only after the task is completed, before another macrotask</li>
        <li>If a task takes long, the browser is blocked & raises an alert like "page unresponsive”</li>
      </ul>,
    },
    {
      val: <H3>Macrotasks</H3>,
    },
    {
      val: <ul>
      <li>Scripts we call</li>
      <li>Event handlers</li>
      <li>Scripts added to the end of the <i>macrotask queue</i> by <CodeSpan>{'setTimeout(func)'}</CodeSpan> with no delay</li>
      </ul>,
    },
    {
      val: <H3>Microtasks</H3>,
    },
    {
      val: <ul>
      <li>After every macrotask tasks from microtask queue are executed</li>
      <li>It's done before running other macrotasks or rendering or event handling</li>
      <li>It guarantees that the environment is the same between microtasks (no mouse coordinate changes, no new network data, etc) </li>
      <li>Microtask is a script called by promise handlers <CodeSpan>.then/catch/finally()</CodeSpan> or <CodeSpan>queueMicrotask(func)</CodeSpan></li>
      <li>Microtasks are used “under the cover” of <code>await</code> as well</li>
      </ul>,
    },
    {
      val: <H5>queueMicrotask()</H5>,
    },
    {
      val: <>So if  we’d like to execute a function asynchronously (after the current code), but before changes are rendered or new events handled, we can schedule it with 
      <CodeSpan>{'queueMicrotask(() => { func() })'}</CodeSpan></>,
    },
    {
      val: <H3>Event loop sequence</H3>,
    },
    {
      val: <>
        1. M<span style={{color: 'brown', fontWeight: 600}}>a</span>crotask (script, event handler) <br />
        2. M<span style={{color: 'red', fontWeight: 600}}>i</span>crotask (promises handlers & <CodeSpan>queueMicrotask(func)</CodeSpan>) <br />
        3. Render <br />
        4. M<span style={{color: 'brown', fontWeight: 600}}>a</span>crotask set by <CodeSpan>setTimeout(func)</CodeSpan> <br />
        5. ... again & again
      </>,
    },
    {
      val: <H3>Web workers</H3>,
    },
    {
      val: <ul>
      <li>For calculations that shouldn’t block the event loop, we can use Web Workers.</li>
      <li>That’s a way to run code in another, parallel thread.</li>
      <li>Web Workers can exchange messages with the main process</li>
      <li>They have their own variables, and their own event loop.</li>
      <li>Web Workers do not have access to DOM</li>
      <li>They are useful, mainly, for calculations</li>
      <li>They can use multiple CPU cores simultaneously</li>
      </ul>,
    },
    {
      val: <H3>in NodeJS</H3>,
    },
    {
      val: <ul>
      <li><CodeSpan>process.nextTick(func)</CodeSpan> executes function on the current iteration of the event loop, after the current operation ends, before <CodeSpan>setTimeout()</CodeSpan> and <CodeSpan>setImmediate()</CodeSpan></li>
      <li><CodeSpan>setImmediate(func)</CodeSpan> is the same as <CodeSpan>setTimeout(func, 0)</CodeSpan> and executes in the next iteration of the event loop, as soon as possible</li>
      </ul>,
    },
    {
      val: <H3>Examples</H3>,
    },
    {
      val: <H5>Sequence</H5>,
    },
    {
      type: 'output',
      val: toRender0,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function Cmpt0() {
        function func() {
          alert(1) // synchronous call
          setTimeout(() => alert(2)) // macrotask sent to the end of the queue
          Promise.resolve().then(res => alert(3)) // microtask
          alert(4) // regular synchronous call
          // 1 --> 4 --> 3 --> 2
        }
        return <button onClick={func}>Click</button>
      }
      const toRender0 = <Cmpt0 />
      `,
    },
    {
      val: <H5>Count to billion without <CodeSpan>setTimeout()</CodeSpan></H5>,
    },
    {
      val: <ul>
        <li>Run whole code at one time</li>
        <li>Changes to DOM are painted after running task is completed</li>
        <li>We’ll see only the last value instead of progress</li>
        <li>Code freezes the browser</li>
      </ul>,
    },
    {
      type: 'output',
      val: toRender2,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function Cmpt2() {
        const ref = React.useRef()
      
        function countToBln() {
          let count = 0, start = Date.now()
          for (let j = 0; j < 1e9; j++) count++
          ref.current.innerHTML = count
          alert(\`Done in \${Date.now() - start} ms\`)
        }
      
        return (
          <div>
            <div ref={ref}>0</div>
            <button onClick={countToBln}>Click</button>
          </div>
        )
      }
      const toRender2 = <Cmpt2 />
      `,
    },
    {
      val: <H5>Count to billion with <CodeSpan>setTimeout()</CodeSpan></H5>,
    },
    {
      val: <ul>
        <li>Split code into parts and queue them: 1 mln + 1 mln + ... up to 1 bln</li>
        <li>Splitting with <CodeSpan>setTimeout()</CodeSpan> we make multiple macrotasks and changes are painted in-between</li>
        <li>If an onclick event appears while the engine is busy it is queued mixed together with main counting tasks</li>
        <li>Page is responsive</li>
        <li>There’s in-browser minimal delay of 4ms for many nested setTimeout calls and the earlier we schedule task via setTimeout, the faster it runs</li>
      </ul>,
    },
    {
      type: 'output',
      val: toRender3,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function Cmpt3() {
        const ref = React.useRef()
      
        function func() {
          let i = 0, j = 0, start = Date.now()
      
          function countToMln() {
            for (let k = 0; k < 1e6; k++) i++
            ref.current.innerHTML = i
          }
      
          function countToBln() {
            if (i < 1e9) {
              setTimeout(countToBln) // schedule the new call // 1000 calls
              j++
            }
            if (i === 1e9) {
              alert(\`Done in \${Date.now() - start} ms with \${j} timeout() calls\`)
              return
            }
            countToMln()
          }
      
          countToBln()
        }
      
        return (
          <div>
            <div ref={ref}>0</div>
            <button onClick={func}>Click</button>
          </div>
        )
      }
      const toRender3 = <Cmpt3 />
      `,
    },
    {
      val: <H5>All microtasks runs before render</H5>,
    },
    {
      type: 'output',
      val: toRender1,
    },
    {
      val: <>This code acts as a synchronous, window is frozen</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function Cmpt1() {
        const ref = React.useRef()
        let i = 0
        function count() {
          do {
            i++
            ref.current.innerHTML = i
          } while (i % 1e3 !== 0)
          if (i < 1e6) queueMicrotask(count)
        }
      
        return (
          <div>
            <div ref={ref}>0</div>
            <button onClick={count}>Click</button>
          </div>
        )
      }
      const toRender1 = <Cmpt1 />
      `,
    },
    {
      val: <H5>Let event bubble</H5>,
    },
    {
      val: <>
        Schedule an action until the event bubbled up and was handled on all levels.
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      menu.onclick = function() {
        let customEvent = new CustomEvent("menu-open", { bubbles: true }) // create a custom event with the clicked menu item data
        setTimeout(() => menu.dispatchEvent(customEvent)) // dispatch the custom event asynchronously
      }
      `,
    },
  ],
}
