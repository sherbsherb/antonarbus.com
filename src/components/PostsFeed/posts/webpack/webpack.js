import { Lnk } from '../../components/Lnk'
// import babeledFile from './babeledFile.png'

export const webpack = {
  title: 'Webpack',
  date: '2021.13.09',
  tagsArr: ['tools', 'js'],
  postParts: [
    {
      val: (
        <>
          <Lnk path="https://webpack.js.org/">Webpack</Lnk> is a module bundler,
          which generates static assets from modules with HTML, JS, CSS, images
          etc...
        </>
      ),
    },
    {
      val: (
        <>
          Webpack analyses the project with all imports and build bundle files,
          which are connected to <i>index.html</i>. All our modules are attached
          in organized right order in <i>bundle.js</i> file
        </>
      ),
    },
    {
      val: (
        <>
          Webpack solves some problems:
          <ul>
            <li>circular imports</li>
            <li>run SASS</li>
            <li>run Babel</li>
          </ul>
        </>
      ),
    },
    {
      val: (
        <>
          Webpack uses <i>loaders</i> to compile code:
          <ul>
            <li>js-loader</li>
            <li>style-loader</li>
            <li>other-loaders</li>
          </ul>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'json',
      val: `

      `,
    },
    {
      type: 'img',
      // src: babeledFile,
    },
  ],
}
