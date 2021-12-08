import { Lnk } from '../../components/Lnk'
import babeledFile from './babeledFile.png'

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
      val: (
        <>
          <Lnk path="https://babeljs.io/setup#installation">Install</Lnk> Babel
          via <code>npm install --save-dev @babel/core @babel/cli</code>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Two dependencies are added into <code>package.json</code>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'json',
      val: `
      {
        "devDependencies": {
          "@babel/cli": "^7.0.0",
          "@babel/core": "^7.0.0"
        }
      }
      `,
    },
    {
      type: 'text',
      val: (
        <>
          Add Babel build script into <code>package.json</code>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'json',
      val: `
        "scripts": {
          "babel": "babel src/components/PostsFeed/posts/babel/unbabeled -d src/components/PostsFeed/posts/babel/babeled"
        },
      `,
    },
    {
      type: 'text',
      val: (
        <>
          Babel will take files from <code>unbabeled</code> folder & put compiled ones into{' '}
          <code>babeled</code> folder.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Create{' '}
          <Lnk path="https://babeljs.io/docs/en/config-files#file-relative-configuration">
            local configuration
          </Lnk>{' '}
          file <code>.babelrc.json</code> or{' '}
          <Lnk path="https://babeljs.io/docs/en/config-files#project-wide-configuration">
            root configuration
          </Lnk>{' '}
          <code>babel.config.json</code>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Add <Lnk path="https://babeljs.io/docs/en/plugins-list">plugins</Lnk>{' '}
          / <Lnk path="https://babeljs.io/docs/en/presets">presets</Lnk> into
          configuration file.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'json',
      val: `
        // .babelrc.json
        {
          "presets": ["@babel/preset-env", "minify"],
          "plugins": [
            [ 
              "@babel/plugin-transform-template-literals", { "loose": true }
            ]
          ]
        }
      `
    },
    {
      val: <>For minification install additional preset with <code>npm install babel-preset-minify --save-dev</code></>
    },
    {
      type: 'text',
      val: (
        <>
          Execute <code>npm run babel</code> & modern JS is converted into ES5 + minified.
        </>
      ),
    },
    {
      type: 'img',
      src: babeledFile,
    },
  ],
}
