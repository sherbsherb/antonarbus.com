import React from 'react'
import { CodeSpan } from '../components/CodeSpan'

export const jsVsJsx = {
  title: 'JS vs JSX',
  date: '2021.09.23',
  tagsArr: ['react', 'jsx', 'createElement', 'basics'],
  postParts: [
    {
      type: 'text',
      val: <>
        In React we generate html by javascript. We can use
        <CodeSpan>React.createElement()</CodeSpan> function from the React
        library to add an HTML element or we can use JSX syntax.
      </>
    },
    {
      type: 'text',
      val: <>
        Native <span style={{ fontWeight: 600 }}> JS </span>
      </>
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React from 'react';

        React.createElement('div', {},
          React.createElement(
            'button', 
            {
              disabled: false,
              onClick: () => {
                alert('clicked')
              } 
            }, 
            'Click me'
          )
        )
      `
    },
    {
      type: 'output',
      val: React.createElement('div', {},
        React.createElement(
          'button',
          {
            disabled: false,
            onClick: () => {
              alert('clicked')
            }
          },
          'Click me'
        )
      )
    },
    {
      type: 'text',
      val: 'JSX'
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React from 'react';

        <div>
          <button 
            disabled={false} 
            onClick={() => alert('clicked')}
          >
            Click me
          </button>
        </div>
      `
    },
    {
      type: 'output',
      val:
        <div>
          <button
            disabled={false}
            onClick={() => alert('clicked')}
          >
            Click me
          </button>
        </div>
    },
  ],
}
