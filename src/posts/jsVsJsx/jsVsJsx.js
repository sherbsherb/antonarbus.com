import React from 'react';
import { CodeSpan } from '../../components/post components/CodeSpan';
import { Link } from '../../components/post components/Link';

export const jsVsJsx = {
  title: 'JS vs JSX',
  date: '2021.09.23',
  id: '5sdfg',
  tagsArr: ['react', 'jsx', 'createElement', 'basics'],
  abstract: 'abstract from the article',
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
};