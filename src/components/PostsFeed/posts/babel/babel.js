import { CodeSpan } from '../../components/CodeSpan'
import { Lnk } from '../../components/Lnk'
import babelExample from './babelExample.png'

export const babel = {
  title: 'Babel',
  date: '2021.12.08',
  tagsArr: ['ESLint'],
  postParts: [
    {
      val: (
        <>
          <Lnk path="https://babeljs.io/">Babel</Lnk> is a code compiler, which
          can convert:
          <ol>
            <li>new JavaScript into old versions</li>
            <li>TypeScript in JavaScript</li>
            <li>JSX into JavaScript</li>
            <li>minify file</li>
          </ol>
        </>
      ),
    },
    {
      type: 'text',
      val: <>Here we can see how modern JS is converted into ES5 on <Lnk path="https://babeljs.io/repl">Babel site</Lnk>.</>,
    },
    {
      type: 'img',
      src: babelExample,
    },
    {
      type: 'text',
      val: <> <Lnk path="https://babeljs.io/setup#installation">Install</Lnk> Babel via <CodeSpan>npm install --save-dev @babel/core @babel/cli</CodeSpan></>
    },
  ],
}
