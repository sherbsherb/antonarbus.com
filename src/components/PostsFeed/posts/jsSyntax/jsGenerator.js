import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'

export const jsGenerator = {
  title: 'Generator in JavaScript',
  date: '2021.12.22',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <ul>
      <li>Regular function returns single value or nothing</li>
      <li>Generator can return multiple values, one after another by calling <code>yield</code></li>
      <li>Generator function needs to have a <code>*</code> symbol: <code>function*</code></li>
      <li>Generator function creates a generator object <code>[object Generator]</code></li>
      <li>Code execution does not start on generator creation, but on <CodeSpan>.next()</CodeSpan> call</li>
      <li>Result of <CodeSpan>.next()</CodeSpan> is an object with two properties: <CodeSpan>{'{value: 1, done: false}'}</CodeSpan></li>
      </ul>,
    },
    {
      val: <H3>Syntax</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function* generateSequence1() {
        yield 1
        yield 2
        yield 3
      }
  
      let generator1 = generateSequence1() // generateSequence {<suspended>}
      let one = generator1.next() // {value: 1, done: false}
      let two = generator1.next() // {value: 2, done: false}
      let three = generator1.next() // {value: 3, done: false}
      let four = generator1.next() // {value: undefined, done: true}

      // with return
      function* generateSequence2() {
        yield 1
        yield 2
        return 3
      }
  
      let generator2 = generateSequence2() 
      let one = generator2.next() // {value: 1, done: false}
      let two = generator2.next() // {value: 2, done: false}
      let three = generator2.next() // {value: 3, done: true}
      let four = generator2.next() // {value: undefined, done: true}
      `,
    },
    {
      val: <H3>Generator is iterable</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // without return
      for(let value of generator1) {
        console.log(value) // 1, 2, 3
      }

      // with return
      for(let value of generator2) {
        console.log(value) // 1, 2
      }
      `,
    },
    {
      val: <H3>Spread syntax</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      [...generator1] // [1, 2, 3]
      `,
    },
    {
      val: <H3>Iterable object based on generator</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let range = {
        from: 1,
        to: 5,
      
        *[Symbol.iterator]() {
          for(let value = this.from; value <= this.to; value++) {
            yield value;
          }
        }
      };
      
      alert( [...range] ); // 1,2,3,4,5
      `,
    },
    {
      val: <H3>Generator inside generator - <code>yield*</code></H3>,
    },
    {
      val: <><code>yield*</code> directive delegates the execution to another generator</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function* generateSequence(start, end) {
        for (let i = start; i <= end; i++) yield i;
      }

      function* generatePasswordCodes() {
        yield* generateSequence(48, 57) // 0..9 // for (let i = 48; i <= 57; i++) yield i;
        yield* generateSequence(65, 90) // A..Z
        yield* generateSequence(97, 122) // a..z
      }

      let str = ''
      for(let code of generatePasswordCodes()) {
        str += String.fromCharCode(code)
      }
      alert(str) // 0..9A..Za..z
      `,
    },
    {
      val: <H3>Pass values from <code>next</code> to <code>yield</code></H3>,
    },
    {
      val: <><code>yield</code> not only returns the result to the outside, but can pass the value inside the generator</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function* gen() {
        let ask1 = yield "2 + 2 = ?"
        alert(ask1) // 4
        let ask2 = yield "3 * 3 = ?"
        alert(ask2) // 9
      }
      
      let generator = gen()
      alert( generator.next().value ) // "2 + 2 = ?" // first next() should be always w/o arg 
      alert( generator.next(4).value ) // "3 * 3 = ?"
      alert( generator.next(9).done ) // true
      `,
    },
    {
      val: <H3>Throw error into generator</H3>,
    },
    {
      val: <>Outer code may pass error into a generator</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function* gen() {
        try {
          yield "start"
          alert("not reach here")
          yield "end"
        } catch(e) {
          alert(e) // shows the error
        }
      }
      
      let generator = gen()
      alert(generator.next().value)
      generator.throw(new Error("error"))
      alert(generator.next().value)
      // start // error // undefined
      `,
    },
  ],
}
