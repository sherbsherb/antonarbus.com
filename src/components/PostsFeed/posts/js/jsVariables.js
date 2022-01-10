import { H5 } from '../../components/H5'

export const jsVariables = {
  title: 'Variables in JavaScript',
  date: '2021.12.22',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <H5>Naming</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let userName = 'John', age = 25, message = 'Hello', test123 = true;
        const myBirthday = '18.04.1982';
        const COLOR_RED = "#F00";
      `,
    },
    {
      val: <H5>Declaration (let, const, var)</H5>,
    },
    {
      val: (
        <ul>
          <li>
            <code>let</code> & <code>const</code> have block scope
          </li>
          <li>
            <code>var</code> has functional or global scoped, visible through blocks
          </li>
          <li>
            <code>var</code> variables can be declared below their use
          </li>
          <li>
            <code>var</code> tolerates re-declarations
          </li>
          <li>
            functions have block scope (in <code>"use strict"</code> at least)
          </li>
          <li>
            <code>if</code>, <code>for</code>, <code>while</code> are blocks{' '}
          </li>
        </ul>
      ),
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        {
          {
            let var1 = "var1" // only visible in this block
            const var2 = "var2" // only visible in this block
            var var3 = "var3" // visible outside
            console.log(var1) // "var1"
            console.log(var2) // "var2"
            console.log(var3) // "var3"
          }

          console.log(var1) // not defined
          console.log(var2) // not defined
          console.log(var3) // "var3"
        }

        {
          if (true) {
            let phrase = "Hello!";
            alert(phrase); // Hello!
          }
          alert(phrase); // Error, no such variable!
        }
        
        {
          function fn1() {
            var x = 1
            const y = 2
            let z = 3
          
            console.log(r, v, p) // not defined
            fn2() // works
          
            function fn2() {
              console.log(x, y, z) // 1 2 3
          
              var r = 666
              const v = 666
              let p = 666
            }
          }
          
          console.log(x, y, z) // not defined
          fn1() // works
          fn2() // not defined
        }

        if (true) {
          var test = true; 
        }
        test // true


        if (true) {
          let test = true; // use "let"
        }
        test // ReferenceError: test is not defined
      `,
    },
  ],
}
