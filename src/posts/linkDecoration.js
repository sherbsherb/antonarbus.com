import React from 'react';
import styled from 'styled-components';
import { CodeSpan } from '../components/post/CodeSpan';

const Component0 = () => <Div0><a href="https://google.com" target="_blank">google.com</a></Div0>
const Div0 = styled.div`
  a, a:hover, a:active, a:visited { 
    all: revert;
  }
`;
const toRender0 = <Component0 />;

const Component1 = () => <Div1><a href="https://google.com" target="_blank">google.com</a></Div1>
const Div1 = styled.div`
  a, a:hover, a:active, a:visited { 
    all: revert;
    text-decoration: none;
  }
`;
const toRender1 = <Component1 />;

const Component2 = () => <Div2><a href="https://google.com" target="_blank">google.com</a></Div2>
const Div2 = styled.div`
  a, a:active, a:visited {
    color: #0083bf;
    text-decoration-color: transparent;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 0.09em;
    &:hover {
      transition: text-decoration-color 300ms;
      text-decoration-color: #0495d7;
    }
  }
`;
const toRender2 = <Component2 />;

const Component3 = () => <Div3><a href="https://google.com" target="_blank">google.com</a></Div3>
const Div3 = styled.div`
  a {
    color: #0083bf;
    text-decoration: none;
    position: relative;
    padding: 0.2em 0;
  }

  a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: #0083bf;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  a:hover::after,
  a:focus::after {
    opacity: 1;
    transform: translateY(0.15em);
  }
`;
const toRender3 = <Component3 />;

const Component4 = () => <Div4><a href="https://google.com" target="_blank">google.com</a></Div4>
const Div4 = styled.div`
  a {
    color: #0083bf;
    text-decoration: none;
    display: inline-block;
    position: relative;
    /* https://stackoverflow.com/questions/20566710/overflowhidden-displayinline-block-moves-text-upwards */
    overflow: hidden; 
    vertical-align: bottom;
  }

  a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.1em;
    background-color: #0083bf;
    transform: translateX(-100%) translateY(1em);
  }

  a:hover::after,
  a:focus::after {
    transform: translateX(0%) translateY(1em);
    transition: transform 300ms;
  }
`;
const toRender4 = <Component4 />;

const Component5 = () => <Div5><a href="https://google.com" target="_blank">google.com</a></Div5>
const Div5 = styled.div`
  a {
    color: #0083bf;
    text-decoration: none;
    display: inline-block;
    position: relative;
  }

  a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .1em;
    background-color: #0083bf;
  }

  a::after {
    transform: scale(0);
    transform-origin: center;
  }

  a:hover::after,
  a:focus::after{
    transform: scale(1);
    transition:  transform 300ms;
  }
`;
const toRender5 = <Component5 />;



export const linkDecoration = {
  title: 'Link style',
  date: '2021.11.04',
  tagsArr: ['css'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Let's reset all styles to the user agent default ones and see how link
          looks like.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const Component1 = () => <Div1><a href="https://google.com" target="_blank">google.com</a></Div1>
        const Div1 = styled.div\`
          a, a:hover, a:active, a:visited { 
            all: revert;
          }
        \`;
      `,
    },
    {
      type: 'output',
      val: toRender0,
    },
    {
      type: 'text',
      val: <>
        To remove the line from the link change property 
        from <CodeSpan>{'{text-decoration: underline;}'}</CodeSpan> to <CodeSpan>{'{text-decoration: none;}'}</CodeSpan>
      </>,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const Component1 = () => <Div1><a href="https://google.com" target="_blank">google.com</a></Div1>
        const Div1 = styled.div\`
          a, a:hover, a:active, a:visited { 
            all: revert;
            text-decoration: none;
          }
        \`;
      `,
    },
    {
      type: 'output',
      val: toRender1,
    },
    {
      type: 'text',
      val: <>Simple styles can be applied for an anchor tag to make it look nicer.</>,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const Component2 = () => <Div2><a href="https://google.com" target="_blank">google.com</a></Div2>
        const Div2 = styled.div\`
          a, a:active, a:visited {
            color: #0083bf;
            text-decoration-color: transparent;
            text-decoration-line: underline;
            text-decoration-style: solid;
            text-decoration-thickness: 0.09em;
            &:hover {
              transition: text-decoration-color 300ms;
              text-decoration-color: #0495d7;
            }
          }
        \`;
      `,
    },
    {
      type: 'output',
      val: toRender2,
    },
    {
      type: 'text',
      val: <>We can also imitate underline by pseudo class.</>,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const Component3 = () => <Div3><a href="https://google.com" target="_blank">google.com</a></Div3>
        const Div3 = styled.div\`
          a {
            color: #0083bf;
            text-decoration: none;
            position: relative;
            padding: 0.2em 0;
          }
        
          a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0.1em;
            background-color: #0083bf;
            opacity: 0;
            transition: opacity 300ms, transform 300ms;
          }
        
          a:hover::after,
          a:focus::after {
            opacity: 1;
            transform: translateY(0.15em);
          }
        \`;
      `,
    },
    {
      type: 'output',
      val: toRender3,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const Component4 = () => <Div4><a href="https://google.com" target="_blank">google.com</a></Div4>
        const Div4 = styled.div\`
          a {
            color: #0083bf;
            text-decoration: none;
            display: inline-block;
            position: relative;
            /* https://stackoverflow.com/questions/20566710/overflowhidden-displayinline-block-moves-text-upwards */
            overflow: hidden; 
            vertical-align: bottom;
          }
        
          a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1.1em;
            background-color: #0083bf;
            transform: translateX(-100%) translateY(1em);
          }
        
          a:hover::after,
          a:focus::after {
            transform: translateX(0%) translateY(1em);
            transition: transform 300ms;
          }
        \`;
      `,
    },
    {
      type: 'output',
      val: toRender4,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const Component5 = () => <Div5><a href="https://google.com" target="_blank">google.com</a></Div5>
        const Div5 = styled.div\`
          a {
            color: #0083bf;
            text-decoration: none;
            display: inline-block;
            position: relative;
          }
        
          a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: .1em;
            background-color: #0083bf;
          }
        
          a::after {
            transform: scale(0);
            transform-origin: center;
          }
        
          a:hover::after,
          a:focus::after{
            transform: scale(1);
            transition:  transform 300ms;
          }
        \`;
      `,
    },
    {
      type: 'output',
      val: toRender5,
    },
  ],
};
