import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const jsLoops = {
  title: 'Loops in JavaScript',
  date: '2021.12.22',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <h5>For</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        for (let i=0; i < 10; i++) {
          console.log('Loop ' + i);
        }

        // or in one line
        for (let i=0; i < 10; i++) console.log('Loop ' + i);
      `,
    },
    {
      val: <h5>For without arguments</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let i = 0; // we have i already declared and assigned
        for (; i < 3; i++) { // no need for "begin"
          alert( i ); // 0, 1, 2
        }

        // same as while (i < 3)
        let i = 0;
        for (; i < 3;) {
          alert( i++ );
        }
      `,
    },
    {
      val: <h5>Continue & break</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        for (let i=0; i < 10; i++) {
          if (i == 3) continue; // skip
          if (i == 9) break; // end loop
          console.log('Loop ' + i);
        }
      `,
    },
    {
      val: <h5>While</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let i = 0;
      while (i < 3) {
        i++; // 0, 1, 2
        console.log(i);
      }
      `,
    },
    {
      val: <h5>Do</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let i = 0;
      do {
        i++;
        console.log(i);
      } while (i < 10) 
      `,
    },
    {
      val: <h5>Labels for break/continue</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        // break out from nested loops
        outer:
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            if (j == 5) break outer;
            console.log(i, j);
          }
        }
        console.log('done');
      `,
    },
    {
      val: <h5>for...in</h5>,
    },
    {
      val: <>Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols)</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let obj = { name: "John", age: 30, isAdmin: true };
      
      // iterates over properties of an object
      for (let key in obj) {
        console.log( key, obj[key] );  // name John, age 30, isAdmin true
      }
      `,
    },
    {
      val: <h5>for...of</h5>,
    },
    {
      val: <>Iterates over iterable objects</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      const arr = ['a', 'b', 'c'];

      for (const element of arr) {
        console.log(element); // a b c
      }
      `,
    },
    {
      val: <h5>forEach</h5>,
    },
    {
      val: <>Executes a provided function once for each array element</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      const arr = ['a', 'b', 'c'];
      arr.forEach(element => console.log(element)); // a b c
      `,
    },
  ],
}
