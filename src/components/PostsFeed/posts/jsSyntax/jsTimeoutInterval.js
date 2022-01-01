import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const jsTimeoutInterval = {
  title: 'setTimeout & setInterval in JavaScript',
  date: '2021.12.28',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <h3>setTimeout()</h3>,
    },
    {
      val: <ul>
      <li>runs a function after some time</li>
      <li>runs a function after the current code has finished</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function sayHi() { alert('Hello');}
      setTimeout(sayHi, 1000);
      // or
      setTimeout(() => alert('Hello'), 1000);
      // but not
      setTimeout(sayHi(), 1000); // wrong! // Pass a function, but don’t run it
      `,
    },
    {
      val: <h5>Pass parameters</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function sayHi(phrase, who) {
        alert( phrase + ', ' + who );
      }
      setTimeout(sayHi, 1000, "Hello", "John"); // pass params as 3rd arg
      `,
    },
    {
      val: <h5>No delay</h5>,
    },
    {
      val: <ul>
      <li><CodeSpan>setTimeout()</CodeSpan> adds function to the end of a <i>call stack</i></li>
      <li>Function is scheduled to run “right after” the current script</li>
      <li>HTML5 standard says: “after five nested timers, the interval is forced to be at least 4 milliseconds.”</li>
      <li>For server-side JavaScript, that limitation does not exist.</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      const func = () => console.log('I am function')
      func();
      setTimeout(() => console.log('I am console'))
      func();

      // I am function
      // I am function
      // I am console
      `,
    },
    {
      val: <h5>Canceling with clearTimeout</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let timerId = setTimeout(() => alert("never happens"), 1000);
      clearTimeout(timerId);
      `,
    },
    {
      val: <h3>setInterval()</h3>,
    },
    {
      val: <ul>
      <li>run a function regularly, starting after the interval</li>
      <li>same syntax as <CodeSpan>setTimeout()</CodeSpan></li>
      <li>call <CodeSpan>clearInterval(timerId)</CodeSpan> to stop further calls</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // repeat with the interval of 2 seconds
      let timerId = setInterval(() => alert('tick'), 2000); 
      // after 5 seconds stop
      setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000); 
      `,
    },
    {
      val: <h3>Nested setTimeout()</h3>,
    },
    {
      val: <ul>
        <li>Similar to setInterval()</li>
        <li>More flexible</li>
        <li>Allows to set the delay more precisely</li>
        <li>Guarantees the fixed delay, but setInterval() doesn't</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let timerId = setTimeout(function tick() {
        alert('tick');
        timerId = setTimeout(tick, 2000); 
      }, 2000);
      `,
    },
    {
      val: <h3>Garbage collection</h3>,
    },
    {
      val: <ul>
        <li>A function references the outer lexical environment</li>
        <li>While timeout/interval live,  lexical environment lives and outer variables live too</li>
        <li>They may take much more memory than the function itself</li>
        <li>Thus when we don’t need the scheduled function anymore, better to cancel it</li>
      </ul>,
    },
  ],
}
