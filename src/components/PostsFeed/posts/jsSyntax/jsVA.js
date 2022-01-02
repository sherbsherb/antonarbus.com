import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'

export const jsVA = {
  title: 'Various in JavaScript',
  date: '2021.12.22',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <H3>Comments</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        // This comment occupies a line of its own

        /*
          An example with two messages.
          This is a multiline comment.
        */
      `,
    },
    {
      val: <H3>Debugger</H3>,
    },
    {
      val: <>Debugger pauses the code</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function hello(name) {
        let phrase = \`Hello, \${name}!\`;
        debugger;  // <-- the debugger stops here
        say(phrase);
      }
      `,
    },
    {
      val: <H3>Console</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      console.log(val) // prints value
      console.dir(obj) // displays an interactive list of the properties 

      // others
      console.assert(false, 'msg') // writes an error message to the console if the assertion is false
      console.clear() // clears the console if the environment allows
      console.count('msg') // logs the number of this count() calls has been called
      console.countReset('msg') // resets counter used with console.count()
      console.error('msg') // outputs an error message
      console.info('msg') // outputs an informational message 
      console.warn('msg') // outputs a warning message 
      console.table(objOrArr) // displays tabular data as a table
      console.trace(objOrMsg) // outputs a stack trace
      console.time(timerName) // starts a timer
      console.timeLog(timerName) // logs the current value of a timer
      console.timeEnd(timerEnd) // stops a timer
      `,
    },
  ],
}
