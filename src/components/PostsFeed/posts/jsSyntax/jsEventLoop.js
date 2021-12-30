import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
import React from 'react'
// import imgFile from './img.jpg'

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

  return (
    <div>
      <div ref={ref}>0</div>
      <button onClick={countToBln}>Click</button>
    </div>
  )
}
const toRender3 = <Cmpt3 />

export const jsEventLoop = {
  title: 'Event loop in JavaScript',
  date: '2021.12.31',
  tagsArr: ['js', 'basics'],
  postParts: [
    {
      val: <h3>Event loop</h3>,
    },
    {
      val: <ul>
      <li>JS execution flow is based on an <i>event loop</i></li>
      <li>It's endless loop</li>
      <li>JS executes tasks one by one starting from the oldest</li>
      <li>When there are no tasks anymore JS waits for new ones</li>
      <li>Task may come while the engine is busy, then it’s queued</li>
      <li>Queue of tasks is called <i>macrotask queue</i></li>
      <li>Rendering never happens while the engine executes a task</li>
      <li>Changes to the DOM are painted only after the task is complete</li>
      <li>If a task takes long, the browser is blocked & raises an alert like "page unresponsive”</li>
      </ul>,
    },
    {
      val: <h3>Macrotasks</h3>,
    },
    {
      val: <ul>
      <li>Scripts we call</li>
      <li>Event handlers</li>
      <li>Scripts added to the end of the <i>macrotask queue</i> by <CodeSpan>{'setTimeout(() => func)'}</CodeSpan> with no delay</li>
      </ul>,
    },
    {
      val: <h3>Microtasks</h3>,
    },
    {
      val: <ul>
      <li>After every macrotask all tasks from microtask queue are executed</li>
      <li>It's done before running other macrotasks or rendering or event handling</li>
      <li>It guarantees that the environment is the same between microtasks (no mouse coordinate changes, no new network data, etc) </li>
      <li>Microtask is a script called by <CodeSpan>promises.then()</CodeSpan> and <CodeSpan>queueMicrotask()</CodeSpan></li>
      <li>Execution of <code>.then/catch/finally</code> handler becomes a microtask</li>
      <li>Microtasks are used “under the cover” of <code>await</code> as well</li>
      <li><CodeSpan>queueMicrotask(func)</CodeSpan> - queues <code>func</code> in the microtask queue</li>
      </ul>,
    },
    {
      val: <h5>queueMicrotask()</h5>,
    },
    {
      val: <>So if  we’d like to execute a function asynchronously (after the current code), but before changes are rendered or new events handled, we can schedule it with 
      <CodeSpan>{"queueMicrotask(() => { console.log('hi') })"}</CodeSpan></>,
    },
    {
      val: <h3>Event loop sequence</h3>,
    },
    {
      val: <>
        1. macrotask (script, event handler) <br />
        2. microtask (promises.then(func) & queueMicrotask(func)) <br />
        3. render <br />
        4. setTimeout func
      </>,
    },
    {
      val: <h3>Web workers</h3>,
    },
    {
      val: <ul>
      <li>For calculations that shouldn’t block the event loop, we can use Web Workers.</li>
      <li>That’s a way to run code in another, parallel thread.</li>
      <li>Web Workers can exchange messages with the main process</li>
      <li>They have their own variables, and their own event loop.</li>
      <li>Web Workers do not have access to DOM</li>
      <li>They are useful, mainly, for calculations, to use multiple CPU cores simultaneously</li>
      </ul>,
    },
    {
      val: <h3>in NodeJS</h3>,
    },
    {
      val: <ul>
      <li><CodeSpan>process.nextTick(func)</CodeSpan> -  execute on the current iteration of the event loop, after the current operation ends, before <CodeSpan>setTimeout()</CodeSpan> and <CodeSpan>setImmediate()</CodeSpan></li>
      <li><CodeSpan>setImmediate(func)</CodeSpan> same as <CodeSpan>setTimeout(func, 0)</CodeSpan> - execute in the next iteration of the event loop, as soon as possible</li>
      </ul>,
    },
    {
      val: <h3>Examples</h3>,
    },
    {
      val: <h5>Sequence</h5>,
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
      val: <h5>Microtask runs before render</h5>,
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
      val: <h5>Count to billion with progress indication</h5>,
    },
    {
      val: <ul>
      <li>changes to DOM are painted after running task is completed</li>
      <li>so we’ll see only the last value instead of progress</li>
      <li>code freezes the browser</li>
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
      val: <ul>
      <li>Split long counting into parts and queue them</li>
      <li>1 mln + 1 mln + ... up to 1 bln</li>
      <li>Split the task into pieces with setTimeout, then changes are painted out in-between</li>
      <li>If an onclick event appears while the engine is busy it is queued mixed together with main counting tasks</li>
      <li>Page is responsive</li>
      <li>There’s in-browser minimal delay of 4ms for many nested setTimeout calls</li>
      <li>Because of that earlier we schedule task via setTimeout – the faster it runs</li>
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
      
        return (
          <div>
            <div ref={ref}>0</div>
            <button onClick={countToBln}>Click</button>
          </div>
        )
      }
      const toRender3 = <Cmpt3 />
      `,
    },
    {
      val: <h5>Let event bubble</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // postpone some actions until the event bubbled up and was handled on all levels.
      menu.onclick = function() {
        // create a custom event with the clicked menu item data
        let customEvent = new CustomEvent("menu-open", { bubbles: true })
        // dispatch the custom event asynchronously
        setTimeout(() => menu.dispatchEvent(customEvent))
      }
  
      // used in event handlers to schedule an action after the event is fully handled
      `,
    },
  ],
}
