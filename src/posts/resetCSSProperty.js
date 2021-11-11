import React from 'react';
import { CodeSpan } from '../components/PostsFeed/components/CodeSpan';

function Component() {
  return (
    <>
      <div style={{ background: 'grey', padding: '10px' }}>
        <CodeSpan lang="css">{'{background: grey}'}</CodeSpan><br /><br />
        <div style={{ background: 'beige', padding: '10px', border: '1px solid red',  }}>
          <CodeSpan lang="css">{'{background: beige}'}</CodeSpan>
        </div>
      </div>
      <br />
      <div style={{ background: 'grey', padding: '10px' }}>
        <CodeSpan lang="css">{'{background: grey}'}</CodeSpan><br /><br />
        <div style={{background: 'inherit', border: '1px solid red', padding: '10px' }}>
          <CodeSpan lang="css">{'{background: inherit}'}</CodeSpan> sets <i>background</i> property to the parent's color.
        </div>
      </div>
      <hr style={{ margin: '20px 0px' }} />
      We have <i>inline</i> styles & local <i>body</i> styles for an anchor tag.
      <br />
      <br />
      <CodeSpan lang="css">
        {
          '<a href="www.google.com" style={{ color: "red", fontSize: "30px"}}>Google</a>'
        }
      </CodeSpan>{' '}
      <br />
      <a href="https://google.com" target="_blank" rel="noreferrer" style={{ color: 'red', fontSize: '30px' }}>
        Google
      </a>
      <hr style={{ margin: '20px 0px' }} />
      <CodeSpan lang="css">{'{color: revert}'}</CodeSpan> sets color CSS
      property to the user agent stylesheet. <br />
      {/* eslint-disable-next-line */}
      <a
        href="https://google.com" target="_blank" rel="noreferrer"
        style={{ color: 'green', fontSize: '30px', color: 'revert' }} // eslint-disable-line
      >
        Google
      </a>
      <hr style={{ margin: '20px 0px' }} />
      <CodeSpan lang="css">{'{all: revert}'}</CodeSpan> sets all CSS properties
      to the user agent stylesheet.
      <br />
      <a
        href="https://google.com" target="_blank" rel="noreferrer"
        style={{ color: 'green', fontSize: '30px', all: 'revert' }}
      >
        Google
      </a>
      <hr style={{ margin: '20px 0px' }} />
      <CodeSpan lang="css">{'{color: initial}'}</CodeSpan> sets property back to
      the spec default.
      <br />
      <a
        href="https://google.com" target="_blank" rel="noreferrer"
        style={{ color: 'green', fontSize: '30px', all: 'initial' }}
      >
        Google
      </a>
      <hr style={{ margin: '20px 0px' }} />
      <CodeSpan lang="css">{'{color: unset}'}</CodeSpan> inherits from parent if
      possible or sets property back to the spec default.
      <br />
      <a
        href="https://google.com" target="_blank" rel="noreferrer"
        style={{ color: 'green', fontSize: '30px', all: 'unset' }}
      >
        Google
      </a>
    </>
  );
}

const toRender = <Component />;

export const resetCSSProperty = {
  title: 'Reset CSS property',
  date: '2021.11.03',
  tagsArr: ['css'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Let's show CSS properties: <CodeSpan>{'inherit'}</CodeSpan>
          {', '}
          <CodeSpan>{'revert'}</CodeSpan>, <CodeSpan>{'initial'}</CodeSpan>,{' '}
          <CodeSpan>{'unset'}</CodeSpan>
        </>
      ),
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
