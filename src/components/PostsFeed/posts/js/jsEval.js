import { CodeSpan } from '../../components/CodeSpan'

export const jsEval = {
  title: 'Eval in JavaScript',
  date: '2021.12.29',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <ul>
        <li><CodeSpan>eval()</CodeSpan> function allows to execute a string of code</li>
        <li>Minifiers badly work with <CodeSpan>eval()</CodeSpan>, do not use it</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let code = 'alert("Hello")'
      eval(code) // Hello

      let value = eval('1+1')
      value // 2
      `,
    },
    {
      val: <ul>
        <li>Eval’ed code is executed in the current lexical environment</li>
        <li>In strict mode, <CodeSpan>eval()</CodeSpan> has its own lexical environment</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let a = 1
      function f() {
        let a = 2
        eval('alert(a)') 
      }
      f() // 2
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'use strict'
      eval("let x = 5; function f() {}")
      alert(typeof x) // undefined 
      `,
    },
    {
      val: <>If eval’ed code doesn’t use outer variables, call <CodeSpan>eval()</CodeSpan> as <CodeSpan>window.eval()</CodeSpan></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let x = 1
      {
        let x = 5
        window.eval('alert(x)') // 1 (global variable)
      }
      `,
    },
    {
      val: <>If eval’ed code needs local variables, change <CodeSpan>eval()</CodeSpan> to <CodeSpan>new Function()</CodeSpan> and pass them as arguments</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let f = new Function('a', 'alert(a)')
      f(5) // 5
      `,
    }
  ],
}
