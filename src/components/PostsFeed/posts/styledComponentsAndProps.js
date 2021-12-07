import React from 'react'
import styled from 'styled-components'
import { CodeSpan } from '../components/CodeSpan'
import { Lnk } from '../components/Lnk'

const DivStyled = styled.div`
  display: inline-block;
  padding: 10px;
  margin: 10px;
  color: ${props => props.color || 'white'};
  background: grey;
`

function Component1() {
  const fontColor = 'blue'
  return <DivStyled color={fontColor}>I am div</DivStyled>
}

const toRender1 = <Component1 />

const DivExtended = styled(DivStyled)`
  display: inline-block;
  padding: 10px;
  margin: 10px;
  background: ${props => props.bgColor};
`

function Component2() {
  const [colorState, setColorState] = React.useState('red')
  return (
    <>
      <DivExtended bgColor={colorState}>I am div</DivExtended>
      <button
        onClick={() => {
          setColorState(colorState === 'red' ? 'green' : 'red')
        }}
      >
        Change color
      </button>
    </>
  )
}

const toRender2 = <Component2 />

const Img = styled.img.attrs(props => ({
  src: props.path,
  alt: 'some text',
  width: props.width || '100%',
  height: 'auto',
}))`
  border: 4px solid black;
  @media screen and (max-width: 800px) {
    min-width: 100%;
  }
`

function Component3() {
  return (
    <Img
      path={
        'https://i2-prod.walesonline.co.uk/topics/topic-teamdogs/article21399905.ece/ALTERNATES/s615/0_GettyImages-1297368113.jpg'
      }
      width={'50%'}
    />
  )
}

const toRender3 = <Component3 />

export const styledComponentsAndProps = {
  title: 'Styled components & props',
  date: '2021.10.11',
  tagsArr: ['react', 'css', 'props', 'styled', 'component', 'style'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          With{' '}
          <Lnk url={'https://styled-components.com/'}>Styled components</Lnk>{' '}
          we can create a react component and attach css/sass via JS.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          The benefit of a styled component is the ability to take props and
          make conditional styling via JS.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Firstly we need to insall library via npm <CodeSpan>{'npm install --save styled-components'}</CodeSpan> <br/><br/>
          Then add it to our file <CodeSpan>{"import styled from 'styled-components'"}</CodeSpan>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          01. In the first example we just pass static color value to the css via props.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const DivStyled = styled.div\`
          display: inline-block;
          padding: 10px;
          margin: 10px;
          color: \${props => props.color || 'white'};
          background: grey;
        \`;
        
        function Component1() {
          const fontColor = 'blue';
          return <DivStyled color={fontColor}>I am div</DivStyled>;
        }
        
        const toRender1 = <Component1 />;
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
          02. Here we extend our previous styled component and pass the color value to our css as a state. <br /><br />
          We change the state via click event on the button and it will affect the background color.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const DivExtended = styled(DivStyled)\`
          display: inline-block;
          padding: 10px;
          margin: 10px;
          background: \${props => props.bgColor};
        \`;
        
        function Component2() {
          const [colorState, setColorState] = React.useState('red');
          return (
            <>
              <DivExtended bgColor={colorState}>I am div</DivExtended>
              <button
                onClick={() => {
                  setColorState(colorState === 'red' ? 'green' : 'red');
                }}
              >
                Change color
              </button>
            </>
          );
        }
        
        const toRender2 = <Component2 />;
      `,
    },
    {
      type: 'output',
      val: toRender2,
    },
    {
      type: 'text',
      val: (
        <>
          03. At the following example we pass props to the element's attributes.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const Img = styled.img.attrs(props => ({
          src: props.path,
          alt: 'some text',
          width: props.width || '100%',
          height: 'auto',
        }))\`
          border: 4px solid black;
          @media screen and (max-width: 480px) {
            min-width: 100%;
          }
        \`;
        
        function Component3() {
          return (
            <Img
              path={
                'https://i2-prod.walesonline.co.uk/topics/topic-teamdogs/article21399905.ece/ALTERNATES/s615/0_GettyImages-1297368113.jpg'
              }
              width={'50%'}
            />
          );
        }
        
        const toRender3 = <Component3 />;
      `,
    },
    {
      type: 'output',
      val: toRender3,
    },
  ],
}
