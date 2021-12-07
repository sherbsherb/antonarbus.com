/* eslint-disable */

import { CodeSpan } from '../../components/CodeSpan'
import { Lnk } from '../../components/Lnk'
import functionWithESLintProblems from './functionWithESLintProblems.png'
import ESLintProblemsInTerminal from './ESLintProblemsInTerminal.png'
import ESLintInit from './ESLintInit.png'

function Component() {
  var x = 'hello'
  let y = x + ' John'

  if (x) {
  }

  return y
}

export const esLint = {
  title: 'ESLint in React',
  date: '2021.12.07',
  tagsArr: ['ESLint'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Lnk path="https://eslint.org/">ESLint</Lnk> is a package to find
          problematic code.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <i>ESLint</i> comes with{' '}
          <CodeSpan>create-react-app app-name</CodeSpan> by default.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We can extent{' '}
          <Lnk path="https://eslint.org/docs/rules/">ESLint rules</Lnk> by
          adding them into <CodeSpan>package.json</CodeSpan> file under{' '}
          <i>rules</i>.
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
          Rule may have 3 flags: <CodeSpan>"off"</CodeSpan>,{' '}
          <CodeSpan>"warn"</CodeSpan> & <CodeSpan>"error"</CodeSpan>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>"error"</CodeSpan> rule does not permit to compile a React
          project until it is resolved.
        </>
      ),
    },
    {
      type: 'text',
      val: <>We have following function.</>,
    },
    {
      type: 'img',
      src: functionWithESLintProblems,
    },
    {
      type: 'text',
      val: (
        <>
          If we install{' '}
          <Lnk path="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">
            ESLint VS Code extension
          </Lnk>{' '}
          we can see errors and warning highlight right in the editor.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Or run ESLint check in terminal by typing{' '}
          <CodeSpan>eslint 'path'</CodeSpan>, for ex. check errors for this file{' '}
          <CodeSpan>
            eslint src/components/PostsFeed/posts/esLint/esLint.js
          </CodeSpan>
        </>
      ),
    },
    {
      type: 'img',
      src: ESLintProblemsInTerminal,
    },
    {
      type: 'text',
      val: (
        <>
          ESLint may try to fix problems with{' '}
          <CodeSpan>eslint 'path' --fix</CodeSpan>, for ex. fix errors for this
          file{' '}
          <CodeSpan>
            eslint ./src/components/PostsFeed/posts/esLint/esLint.js --fix
          </CodeSpan>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We can use{' '}
          <Lnk path="https://github.com/standard/standard">standard</Lnk> style
          guide or from{' '}
          <Lnk path="https://github.com/airbnb/javascript">Airbnb</Lnk> or{' '}
          <Lnk path="https://github.com/google/eslint-config-google">
            Google
          </Lnk>
          . There are many guidelines how to add them into a project, but only
          following worked for me.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Install ESLint globally <CodeSpan>npm install -g eslint</CodeSpan> and
          then we may initialize configuration by{' '}
          <CodeSpan> eslint --init</CodeSpan> command.
        </>
      ),
    },
    {
      type: 'text',
      val: <>Answer questions in terminal.</>,
    },
    {
      type: 'img',
      src: ESLintInit,
    },
    {
      type: 'text',
      val: (
        <>
          Many dev dependencies are inserted into the{' '}
          <CodeSpan>package.json</CodeSpan> file and configuration file{' '}
          <CodeSpan>.eslintrc.js</CodeSpan> is generated. To use
          in-build ESLint in React just remove all these lines and files.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'json',
      val: `
        // package.json
        "devDependencies": {
          "eslint": "^7.32.0",
          "eslint-config-airbnb": "^19.0.2",
          "eslint-config-standard": "^16.0.3",
          "eslint-plugin-import": "^2.25.3",
          "eslint-plugin-jsx-a11y": "^6.5.1",
          "eslint-plugin-node": "^11.1.0",
          "eslint-plugin-promise": "^5.2.0",
          "eslint-plugin-react": "^7.27.1",
          "eslint-plugin-react-hooks": "^4.3.0"
        }
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        // .eslintrc.js
        module.exports = {
          env: {
            browser: true,
            es2021: true
          },
          extends: [
            'plugin:react/jsx-runtime',
            'standard'
          ],
          parser: '@typescript-eslint/parser',
          parserOptions: {
            ecmaFeatures: {
              jsx: true
            },
            ecmaVersion: 12,
            sourceType: 'module'
          },
          plugins: [
            'react',
            '@typescript-eslint'
          ],
          rules: {
            'comma-dangle': ['error', 'only-multiline'],
            'react/no-unescaped-entities': 'off',
            'space-before-function-paren': ['error', 'never'],
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'no-template-curly-in-string': 'off',
            'no-use-before-define': 'off',
          },
          globals: {
            React: true,
            google: true,
            mount: true,
            mountWithRouter: true,
            shallow: true,
            shallowWithRouter: true,
            context: true,
            expect: true,
            jsdom: true,
            JSX: true,
          },
        }
      `,
    },
    {
      type: 'text',
      val: (
        <>
          If ESLint does not allow to start or build a project we may create <CodeSpan>.env</CodeSpan>{' '}
          file with following statement.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        // .env
        ESLINT_NO_DEV_ERRORS=true
        DISABLE_ESLINT_PLUGIN=true
      `,
    },
    {
      type: 'text',
      val: (
        <>
          Run batch error checking with <CodeSpan>eslint 'src/components/PostsFeed/posts/**js'</CodeSpan>
        </>
      ),
    },
  ],
}
