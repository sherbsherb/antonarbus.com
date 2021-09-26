import React, { useState, useEffect } from 'react';
import { Link, CodeInline } from '../../components/post components/Post';

export const jsVsJsx = {
  title: 'JS vs JSX',
  date: '2021.09.23',
  tagsArr: ['react', 'jsx', 'createElement', 'basics'],
  abstract: 'abstract from the article',
  articlesArr: [
    {
      type: 'text',
      val: <>
        In React we generate html by javascript. We can use <CodeInline>React.createElement()</CodeInline> function from the React library to add an HTML element or we can use JSX syntax.
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