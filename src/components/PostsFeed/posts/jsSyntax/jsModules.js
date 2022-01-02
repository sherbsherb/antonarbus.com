import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'

export const jsModules = {
  title: 'Modules in JavaScript',
  date: '2021.12.30',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <ul>
        <li>Module is just a file <CodeSpan lang="html">{'<script type="module"></script>'}</CodeSpan></li>
        <li>Script is treated as a module, by using the attribute <code>type="module"</code></li>
        <li>Modules work only via HTTP(s), not locally. Use http (live) server to work with modules.</li>
        <li>Modules "use strict" by default</li>
        <li>Modules have its own scope</li>
        <li>To make a global variable we can assign it to a window property <CodeSpan>window.user = "John"</CodeSpan> </li>
        <li>Module script can import other modules</li>
      </ul>,
    },
    {
      val: <H3>Import is evaluated ones</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // 📁 hi.js
      alert("hi!")

      // 📁 main.js
      import './hi.js' // hi!
      import './hi.js' // (shows nothing)
      `,
    },
    {
      val: <H3>Scripts duplicates are ignored</H3>,
    },
    {
      type: 'code',
      lang: 'html',
      val: `
      // 'my.js' is fetched and executed only once
      <script type="module" src="my.js"></script>
      <script type="module" src="my.js"></script>
      `,
    },
    {
      val: <H3>External scripts + CORS</H3>,
    },
    {
      val: <ul>
        <li>CORS headers are needed for external imports</li>
        <li>another-site.com must supply 'Access-Control-Allow-Origin' response header</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'html',
      val: `
      <script type="module" src="http://another-site.com/their.js"></script>
      `,
    },
    {
      val: <H3>Global variable</H3>,
    },
    {
      val: <>To make a global variable we can assign it to a window property <CodeSpan>window.user = "John"</CodeSpan>, but it is not recommended.</>,
    },
    {
      val: <H3>Defer, async</H3>,
    },
    {
      val: <ul>
        <li>Module scripts are deferred by default and wait until the HTML document is fully ready</li>
        <li>Module doesn’t block HTML processing, they load in parallel with other resources.</li>
        <li>Possible to use the <code>async</code> attribute in <CodeSpan>{'<script type="module" async>'}</CodeSpan></li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'html',
      val: `
      <script type="module">
        alert(typeof button); // object: the script can 'see' the button below
        // as modules are deferred, the script runs after the whole page is loaded
      </script>

      Compare to regular script below:

      <script>
        alert(typeof button); // button is undefined, the script can't see elements below
        // regular scripts run immediately, before the rest of the page is processed
      </script>

      <button id="button">Button</button>
      `,
    },
    {
      val: <H3><code>this</code> in module</H3>,
    },
    {
      val: <ul>
        <li><code>this</code> on top level in module is <code>undefined</code></li>
        <li><code>this</code> in non-module javascript file on top level is <code>window</code> object</li>
      </ul>,
    },
    {
      val: <H3>Relative or absolute path</H3>,
    },
    {
      val: <ul>
        <li><code>{`import {sayHi} from 'sayHi.js'`}</code> - not working in browser</li>
        <li><code>{`import {sayHi} from './sayHi.js'`}</code> - works</li>
        <li>Node.js or bundle tools allow bare modules, w/o any path</li>
      </ul>,
    },
    {
      val: <H3>Different exports/imports</H3>,
    },
    {
      val: <H5>whole file</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // 📁 from.js
      alert("hi!")
      
      // 📁 to.js
      import './hi.js' // hi!
      `,
    },
    {
      val: <H5>specific variables, functions, classes</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // 📁 from.js
      export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      export const MODULES_BECAME_STANDARD_YEAR = 2015;
      export class User {
        constructor(name) {
          this.name = name;
        }
      }
      export function sayHi(user) {
        alert(\`Hello, \${user}!\`);
      } // no ';' at the end
      
      // 📁 to.js
      import {months, MODULES_BECAME_STANDARD_YEAR, User, sayHi} from './from.js';
      sayHi('John'); // Hello, John!
      `,
    },
    {
      val: <H5>export apart from declarations</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // 📁 from.js
      let arr = [1, 2, 3];
      function func() { alert('I am function') }
      export {arr, func}; 
      
      // 📁 to.js
      import {arr, func} from './from.js';
      func();
      `,
    },
    {
      val: <H5>import * all</H5>,
    },
    {
      val: <>Bad for bundle optimizers such as webpack's “tree-shaking”</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // 📁 from.js
      export let arr = [1, 2, 3];
      export function func() { alert('I am function') }
      
      // 📁 to.js
      import * as importObj from './from.js';
      importObj.arr; // [1, 2, 3]
      importObj.func(); // 'I am function'
      `,
    },
    {
      val: <H5>export as</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // 📁 from.js
      let arr = [1, 2, 3];
      function func() { alert('I am function') }
      export {func as exportedFunc, arr as exportedArr};
      
      // 📁 to.js
      import * as importObj from './from.js';
      importObj.exportedArr; // [1, 2, 3]
      importObj.exportedFunc(); // 'I am function'
      `,
    },
    {
      val: <H5>import as</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // 📁 from.js
      export let arr = [1, 2, 3];
      export function func() { alert('I am function') }
      
      // 📁 to.js
      import {func as importedFunc, arr as importedArr} from './from.js';
      importedArr; // [1, 2, 3]
      importedFunc(); // 'I am function'
      `,
    },
    {
      val: <H5>export default</H5>,
    },
    {
      val: <ul>
        <li>syntax makes the “one thing per module” way look better</li>
        <li>no need for curly braces</li>
        <li>there’s a rule that imported variables should correspond to file names <CodeSpan>{'import LoginForm from "./loginForm.js"'}</CodeSpan></li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // 📁 from.js
      export default function func() { alert('I am function') }
      
      // 📁 to.js
      import func from './from.js';
      func(); // 'I am function'
      `,
    },
    {
      val: <>Mix of default & named exports</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // 📁 from.js
      export default class User {
        constructor(name) {
          this.name = name;
        }
      }
      export function sayHi(user) {
        alert(\`Hello, \${user}!\`);
      }

      // 📁 to.js
      import {default as User, sayHi} from './from.js';
      new User('John');
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // 📁 from.js
      export default class User {
        constructor(name) {
          this.name = name;
        }
      }
      export function sayHi(user) {
        alert(\`Hello, \${user}!\`);
      }

      // 📁 to.js
      import * as user from './from.js';
      let User = user.default; // the default export
      new User('John');
      `,
    },
    {
      val: <H3>Re-export</H3>,
    },
    {
      val: <>We may import things and immediately export them</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      import {login, logout} from './helpers.js';
      export {login, logout};

      // or shorter
      export {login, logout} from './helpers.js';

      // default export needs separate handling when re-exporting
      // 📁 user.js
      export default class User { }

      export * from './user.js'; // to re-export named exports
      export {default} from './user.js'; // to re-export the default export
      `,
    },
    {
      val: <H3>Dynamic imports</H3>,
    },
    {
      val: <ul>
      <li>Dynamic imports work in regular scripts, they don’t require <code>script type="module"</code></li>
      <li><CodeSpan>import()</CodeSpan> looks like a function call, but it is not, it’s a special syntax</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let modulePath = prompt("Which module to load?");
      import(modulePath)
        .then(obj => {})
        .catch(err => {})
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // 📁 say.js
      export function hi() { alert('Hello') }
      export function bye() { alert('Bye') }
      let {hi, bye} = await import('./say.js');
      hi();
      bye();
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // 📁 say.js
      export default function() {
        alert("Module loaded (export default)!");
      }

      let obj = await import('./say.js');
      let say = obj.default;
      // or, in one line: let {default: say} = await import('./say.js');
      say();
      `,
    },
  ],
}
