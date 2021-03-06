import styled from 'styled-components'
import { CodeSpan } from '../../components/CodeSpan'
import { Lnk } from '../../components/Lnk'

const Cmpt0 = () => <Div0><a href="https://google.com" target="_blank" rel="noreferrer">google.com</a></Div0>
const Div0 = styled.div`
  a, a:hover, a:active, a:visited { 
    all: revert;
  }
`
const toRender0 = <Cmpt0 />

const Cmpt1 = () => <Div1><a href="https://google.com" target="_blank" rel="noreferrer">google.com</a></Div1>
const Div1 = styled.div`
  a, a:hover, a:active, a:visited { 
    all: revert;
    text-decoration: none;
  }
`
const toRender1 = <Cmpt1 />

const Cmpt2 = () => <Div2><a href="https://google.com" target="_blank" rel="noreferrer">google.com</a></Div2>
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
`
const toRender2 = <Cmpt2 />

const Cmpt3 = () => <Div3><a href="https://google.com" target="_blank" rel="noreferrer">google.com</a></Div3>
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
    height: 0.05em;
    background-color: #0083bf;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  a:hover::after,
  a:focus::after {
    opacity: 1;
    transform: translateY(0.15em);
  }
`
const toRender3 = <Cmpt3 />

const Cmpt4 = () => <Div4><a href="https://google.com" target="_blank" rel="noreferrer">google.com</a></Div4>
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
    height: 1.05em;
    background-color: #0083bf;
    transform: translateX(-100%) translateY(1em);
  }

  a:hover::after,
  a:focus::after {
    transform: translateX(0%) translateY(1em);
    transition: transform 300ms;
  }
`
const toRender4 = <Cmpt4 />

const Cmpt5 = () => <Div5><a href="https://google.com" target="_blank" rel="noreferrer">google.com</a></Div5>
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
    height: .05em;
    background-color: #0083bf;
  }

  a::after {
    transform: scale(0);
    transform-origin: center;
  }

  a:hover::after,
  a:focus::after {
    transform: scale(1);
    transition:  transform 300ms;
  }
`
const toRender5 = <Cmpt5 />

export const linkDecoration = {
  title: 'Link style',
  date: '2021.11.04',
  tagsArr: ['css'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Post is inspired by{' '}
          <Lnk path="https://michellebarker.co.uk/">Michelle Barker's</Lnk>{' '}
          great{' '}
          <Lnk path="https://css-irl.info/animating-underlines/">article</Lnk>.
        </>
      ),
    },
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
        const Cmpt1 = () => <Div1><a href="https://google.com" target="_blank" rel="noreferrer">google.com</a></Div1>
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
      val: (
        <>
          To remove the line below the link change property from{' '}
          <CodeSpan>{'{text-decoration: underline}'}</CodeSpan> to{' '}
          <CodeSpan>{'{text-decoration: none}'}</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const Cmpt1 = () => <Div1><a href="https://google.com" target="_blank" rel="noreferrer">google.com</a></Div1>
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
      val: (
        <>
          Simple styles can be applied for an anchor tag to make it look nicer.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const Cmpt2 = () => <Div2><a href="https://google.com" target="_blank" rel="noreferrer">google.com</a></Div2>
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
        const Cmpt3 = () => <Div3><a href="https://google.com" target="_blank" rel="noreferrer">google.com</a></Div3>
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
        const Cmpt4 = () => <Div4><a href="https://google.com" target="_blank" rel="noreferrer">google.com</a></Div4>
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
        const Cmpt5 = () => <Div5><a href="https://google.com" target="_blank" rel="noreferrer">google.com</a></Div5>
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
}
