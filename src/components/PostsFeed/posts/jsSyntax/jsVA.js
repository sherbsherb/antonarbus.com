import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const jsVA = {
  title: 'Various in JavaScript',
  date: '2021.12.22',
  tagsArr: ['js', 'basics'],
  postParts: [
    {
      val: <h3>Comments</h3>,
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
      val: <h3>Debugger</h3>,
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
  ],
}
