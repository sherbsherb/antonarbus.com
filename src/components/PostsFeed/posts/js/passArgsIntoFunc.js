import { CodeSpan } from '../../components/CodeSpan'

export const passArgsIntoFunc = {
  title: 'Pass arguments into function',
  date: '2021.10.30',
  tagsArr: ['vanilla', 'JavaScript'],
  postParts: [
    {
      type: 'text',
      val: 'The most common way to pass parameters to a function is to put them inside parenthesis separated by comma.',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function mail(msg, to) {
          return '"' + msg + '" sent to "' + to + '"'
        }
        mail('Hello', 'John@mail.com') // "Hello" sent to "John@mail.com"
      `,
    },
    {
      type: 'text',
      val: 'We can assign default values inside a function.',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function mail(msg, to) {
          msg = msg || 'Hello'
          to = to || 'John@mail.com'
          return '"' + msg + '" sent to "' + to + '"'
        }
        mail() // "Hello" sent to "John@mail.com"
        mail('Bye') // "Bye" sent to "John@mail.com"
        mail('Bye', 'Kris@mail.com') // "Bye" sent to "Kris@mail.com"   
      `,
    },
    {
      type: 'text',
      val: 'Or we can assign default values right in parenthesis.',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function mail(msg = 'Hello', to = 'John@mail.com') {
          return '"' + msg + '" sent to "' + to + '"'
        }
      `,
    },
    {
      type: 'text',
      val: 'We can pass arguments by spreading array values.',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const arr = ['Hello', 'John@mail.com']
        mail(...arr) // "Hello" sent to "John@mail.com"
      `,
    },
    {
      type: 'text',
      val: 'More parameters than supposed can be passed. Function will take only first ones.',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        mail('Hi', 'John@mail.com', 1, 2, 3) // "Hi" sent to "John@mail.com"
      `,
    },
    {
      type: 'text',
      val: (
        <>
          All arguments are accessed within function inside a special iterable{' '}
          <CodeSpan>arguments</CodeSpan> variable. In arrow function{' '}
          <CodeSpan>arguments</CodeSpan> variable doesn't exist.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function func() { return arguments }
        func(1, 2, 3) //  [Iterator]  0: 1, 1: 2, 2: 3

        const func = () =>  arguments
        func(1, 2, 3) // arguments is not defined
        `,
    },
    {
      type: 'text',
      val: `
        Pass arguments to a function separated by comma is ok, but we have to 
        remember the sequence of arguments. Instead we can pass arguments in an object.
      `,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function mail(obj) {
          return '"' + obj.msg + '" sent to "' + obj.to + '"'
        }
        mail({ msg: 'Hello', to:'John@mail.com' }) // "Hello" sent to "John@mail.com"
        mail({ to:'John@mail.com', msg: 'Hello' }) // "Hello" sent to "John@mail.com"
      `,
    },
    {
      type: 'text',
      val: `
        Object can be destructed.
      `,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function mail({ msg, to }) {
          return '"' + msg + '" sent to "' + to + '"'
        }
        mail({ msg: 'Hello', to:'John@mail.com' }) // "Hello" sent to "John@mail.com"
      `,
    },
    {
      type: 'text',
      val: `
        And default values can be assigned.
      `,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function mail({ msg = 'Hello', to = 'John@mail.com' }) {
          return '"' + msg + '" sent to "' + to + '"'
        }
        mail({}) // "Hello" sent to "John@mail.com"
        mail({ msg: 'Bye' }) // "Bye" sent to "John@mail.com"
        mail() // Cannot read property 'msg' of undefined
      `,
    },
    {
      type: 'text',
      val: `
        Destructuring assumes that function has an argument. 
        If we want all values by default, then we should specify an empty object.
      `,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function mail({ msg = 'Hello', to = 'John@mail.com' } = {}) {
          return '"' + msg + '" sent to "' + to + '"'
        }
        mail() // "Hello" sent to "John@mail.com"
      `,
    },
    {
      type: 'text',
      val: (
        <>
          But it looks bulky and there is a more <b>straight forward</b>{' '}
          approach.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function mail(args){
          let defaults = { msg: 'Hello', to: 'John@mail.com' };
          let params = {...defaults, ...args};  
          const { msg, to } = params;
          return '"' + msg + '" sent to "' + to + '"'
        }
        mail({}) // "Hello" sent to "John@mail.com"
        mail({ msg: 'Bye' }) // "Bye" sent to "John@mail.com"
        mail() // "Hello" sent to "John@mail.com"
      `,
    },
    {
      type: 'text',
      val: 'Or even shorter.',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function mail(args){
        const { msg, to } = { msg: 'Hello', to: 'John@mail.com', ...args};
        return '"' + msg + '" sent to "' + to + '"'
      }
      `,
    },
  ],
}
