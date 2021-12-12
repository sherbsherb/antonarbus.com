import { Lnk } from '../../components/Lnk'
// import loaders from './loaders.png'

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
          Webpack uses Node.js package to generate files.
        </>
      ),
    },
    {
      val: (
        <>
          Webpack analyses the project with all imports and build bundle files,
          which are connected to <i>index.html</i>. All our modules are attached
          in organized order in <i>bundle.js</i> file.
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
          Webpack uses <i>loaders</i> & <i>plugins</i>to compile code:
          <ul>
            <li>js-loader</li>
            <li>style-loader</li>
            <li>other-loaders</li>
          </ul>
        </>
      ),
    },
    {
      val: (
        <>
          Let's make a simple ES6 javascript with SCSS files, which we want to transpile into ES5 and to attach to an html file.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        // hello.js
        export const hello = (str = 'John') => alert(str)
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        // style.scss
        body {
          background: rgb(20 136 68 / 26%);
          h1 {
            color: brown;
          }
        }
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        // js.js
        import { hello } from './hello'
        import './style.scss'
        hello()
      `,
    },
    {
      val: (
        <>
          Install webpack with <code>npm i -D webpack webpack-cli</code>
        </>
      ),
    },
    {
      val: (
        <>
          Install babel loader <code>npm i -D babel-loader @babel/core @babel/preset-env webpack</code>
        </>
      ),
    },
    {
      val: (
        <>
          Install css loader + sass plugin <code>npm i -D style-loader css-loader sass-loader sass mini-css-extract-plugin</code>
        </>
      ),
    },
    {
      val: (
        <>
          Configure a <i>webpack</i> script in <code>package.json</code> file.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        "scripts": {
          "start": "react-scripts start",
          "webpack": "webpack --config src/components/PostsFeed/posts/webpack/webpack.config.js --watch"
        }
      `,
    },
    {
      val: (
        <>
          Create configuration file <code>webpack.config.js</code>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        const path = require('path')
        const MiniCssExtractPlugin = require('mini-css-extract-plugin')
        
        module.exports = {
          mode: 'none',
          entry: path.resolve(__dirname, 'input', 'js.js'),
          // devtool: 'eval-source-map',
          output: {
            path: path.resolve('public', 'webpack'),
            // filename: 'bundle.[contenthash].js',
            filename: 'bundle.js',
          },
          plugins: [
            new MiniCssExtractPlugin({
              filename: 'styles.css',
            }),
          ],
          module: {
            rules: [
              {
                test: /\\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  },
                },
              },
              {
                test: /\\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
              {
                test: /\\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
              },
            ],
          },
        }
      `,
    },
    {
      val: (
        <>
          Run the script by <code>npm run webpack</code>
        </>
      ),
    },
    {
      val: (
        <>
          All files are bundled from the main entry point <code>'/input/js.js'</code> file into <code>'public/webpack/bundle.js'</code> file.
        </>
      ),
    },
    {
      val: (
        <>
          <i>MiniCssExtractPlugin</i> creates the <code>styles.css</code> file.
        </>
      ),
    },
    {
      val: (
        <>
          Html file <Lnk path="https://antonarbus.com/webpack/webpack.html">webpack.html</Lnk> includes the <code>bundle.js</code> & <code>styles.css</code> files.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'html',
      val: `
        <!-- webpack.html -->
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>Webpack</title>
            <link rel="stylesheet" href="styles.css">
          </head>
          <body>
            <h1>Webpack</h1>
            <script src="./bundle.js"></script>
          </body>
        </html>
      `,
    },
    {
      type: 'code',
      lang: 'css',
      val: `
        /* styles.css */ 
        body {
          background: rgba(20, 136, 68, 0.26);
        }
        body h1 {
          color: brown;
        }
        
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        // bundle.js 
        /******/ (function() { // webpackBootstrap
        /******/ 	"use strict";
        /******/ 	var __webpack_modules__ = ([
        /* 0 */,
        /* 1 */
        /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */   "hello": function() { return /* binding */ hello; }
        /* harmony export */ });
        var hello = function hello() {
          var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'John';
          return alert(str);
        };
        
        /***/ }),
        /* 2 */
        /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin
        
        
        /***/ })
        /******/ 	]);
        /************************************************************************/
        /******/ 	// The module cache
        /******/ 	var __webpack_module_cache__ = {};
        /******/ 	
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
        /******/ 		// Check if module is in cache
        /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
        /******/ 		if (cachedModule !== undefined) {
        /******/ 			return cachedModule.exports;
        /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = __webpack_module_cache__[moduleId] = {
        /******/ 			// no module.id needed
        /******/ 			// no module.loaded needed
        /******/ 			exports: {}
        /******/ 		};
        /******/ 	
        /******/ 		// Execute the module function
        /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/ 	
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
        /******/ 	
        /************************************************************************/
        /******/ 	/* webpack/runtime/define property getters */
        /******/ 	!function() {
        /******/ 		// define getter functions for harmony exports
        /******/ 		__webpack_require__.d = function(exports, definition) {
        /******/ 			for(var key in definition) {
        /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        /******/ 				}
        /******/ 			}
        /******/ 		};
        /******/ 	}();
        /******/ 	
        /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
        /******/ 	!function() {
        /******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
        /******/ 	}();
        /******/ 	
        /******/ 	/* webpack/runtime/make namespace object */
        /******/ 	!function() {
        /******/ 		// define __esModule on exports
        /******/ 		__webpack_require__.r = function(exports) {
        /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/ 			}
        /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
        /******/ 		};
        /******/ 	}();
        /******/ 	
        /************************************************************************/
        var __webpack_exports__ = {};
        // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
        !function() {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        /* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
        
        
        (0,_hello__WEBPACK_IMPORTED_MODULE_0__.hello)();
        }();
        /******/ })()
        ;
      `,
    },
  ],
}
