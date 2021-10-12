import React, { useState } from 'react';
import menuPic from './menu.png';
import textSplash from './text splash.png';
import pageSplash from './page splash.png';

function Component() {
  const [state, setState] = useState('');
  return (
    <>
      <button onClick={() => setState(state + ' + some text')}>Add text</button>
      <br />
      <br />
      <div>Text{state}</div>
    </>
  );
}

const toRender = <Component />;

export const domRenderInDevTools = {
  title: 'DOM render in dev tools',
  date: '2021.10.12',
  tagsArr: ['DOM', 'render', 'tools', 'browser'],
  postParts: [
    {
      type: 'text',
      val: <>In browser's dev tools we can observe render splashes.</>,
    },
    {
      type: 'text',
      val: (
        <>
          To enable it press <kbd>F12</kbd> - <kbd>Customize</kbd> -{' '}
          <kbd>More tools</kbd> - <kbd>Rendering</kbd> - tick "Paint flashing".
        </>
      ),
    },
    {
      type: 'img',
      path: menuPic,
      width: '80%'
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component() {
          const [state, setState] = useState('');
          return (
            <>
              <button onClick={() => setState(state + ' + some text')}>Add text</button>
              <br /><br />
              <div>Text{state}</div>
            </>
          );
        }
        
        const toRender = <Component />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      type: 'text',
      val: 'By button pressing we see how text line is highlighted.',
    },
    {
      type: 'img',
      path: textSplash,
    },
    {
      type: 'text',
      val: 'If we click until new line is added the whole window is splashed. It seems the browser has to render the complete page to add a new line.',
    },
    {
      type: 'img',
      path: pageSplash,
      width: '80%'
    },
  ],
};
