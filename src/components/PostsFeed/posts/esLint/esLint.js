/* eslint-disable */

import { CodeSpan } from "../../components/CodeSpan";
import { Lnk } from "../../components/Lnk";
import functionWithESLintProblems from './functionWithESLintProblems.png'
import ESLintProblemsInTerminal from './ESLintProblemsInTerminal.png'

function Component() {
  var x = 'hello';
  let y = x + ' John';

  if (x) {

  }

  return y;
}

export const esLint = {
  title: 'ESLint in React',
  date: '2021.12.06',
  tagsArr: ['React', 'ESLint'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Lnk path="https://eslint.org/">ESLint</Lnk> is a package to to find problematic code.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <i>ESLint</i> comes with <CodeSpan>create-react-app app-name</CodeSpan> by default.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We can extent <Lnk path="https://eslint.org/docs/rules/">ESLint rules</Lnk> by adding them into <CodeSpan>package.json</CodeSpan> file under <i>rules</i>.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'json',
      val: `
        "eslintConfig": {
          "extends": [
            "react-app",
            "react-app/jest"
          ],
          "rules": {
            "no-unused-vars": "warn",
            "no-var": "error",
            "no-empty": "warn",
            "prefer-template": "warn",
            "prefer-const": "warn"
          }
        },
      `,
    },
    {
      type: 'text',
      val: (
        <>
          Rule may have 3 flags: <CodeSpan>"off"</CodeSpan>, <CodeSpan>"warn"</CodeSpan> & <CodeSpan>"error"</CodeSpan>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>"error"</CodeSpan> rule does not permit to compile a React project until it is resolved.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We have following function.
        </>
      ),
    },
    {
      type: 'img',
      src: functionWithESLintProblems
    },
    {
      type: 'text',
      val: (
        <>
          If we install <Lnk path="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">ESLint VS Code extension</Lnk> we can see errors and warning highlight right in the editor.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Or run ESLint check in terminal by typing <CodeSpan>eslint path</CodeSpan>, for ex. check errors for this file <CodeSpan>eslint src/components/PostsFeed/posts/esLint/esLint.js</CodeSpan>
        </>
      ),
    },
    {
      type: 'img',
      src: ESLintProblemsInTerminal
    },
    {
      type: 'text',
      val: (
        <>
          ESLint may try to fix problems with <CodeSpan>eslint path --fix</CodeSpan>, for ex. check errors for this file <CodeSpan>$ eslint "./src/components/PostsFeed/posts/esLint/esLint.js" --fix</CodeSpan>
        </>
      ),
    },
  ],
};
