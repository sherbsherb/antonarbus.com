import { useState } from 'react'
import { CodeSpan } from '../components/CodeSpan'
import { Lnk } from '../components/Lnk'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

function Component() {
  const [showMessage, setShowMessage] = useState(true)
  const toggle = () => setShowMessage(!showMessage)
  return (
    <Div>
      <button onClick={toggle}>Toggle</button>
      <CSSTransition
        in={showMessage}
        classNames="xxx"
        // timeout={300}
        timeout={{
          appear: 2000,
          enter: 300,
          exit: 1000,
        }}
        appear = {true}
        unmountOnExit = {true}
      >
        <p>Hello</p>
      </CSSTransition>
    </Div>
  )
}

const Div = styled.div`
  .xxx-appear {
    background: yellow;
  }
  .xxx-appear-active {
    background: green;
    transition: background 2000ms;
  }
  .xxx-appear-done {
    background: blue;
  }
  .xxx-enter {
    opacity: 0;
    transform: scale(0);
  }
  .xxx-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms;
  }
  .xxx-enter-done {
    background: red;
    transition: all 5000ms;
  }
  .xxx-exit {
    opacity: 1;
    transform: scale(1);
  }
  .xxx-exit-active {
    opacity: 0;
    transform: scale(0);
    transition: all 1000ms;
  }
  p {
    border: 1px grey solid;
    margin: 5px;
    padding: 5px;
  }
`

const toRender = <Component />

export const ReactTransitionGroupCssTransition = {
  title: 'React transition group - CSSTransition',
  date: '2021.11.01',
  tagsArr: ['react', 'animation'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Install{' '}
          <Lnk path="https://reactcommunity.org/react-transition-group/">
            library
          </Lnk>{' '}
          from{' '}
          <Lnk path="https://www.npmjs.com/package/react-transition-group">
            npm
          </Lnk>{' '}
          via terminal <CodeSpan>npm i react-transition-group</CodeSpan>
        </>
      ),
    },
    {
      type: 'text',
      val: 'CSSTransition applies a pair of class names during the appear, enter, and exit states of the transition.',
    },
    {
      type: '',
      val: <>
        Classes are applied in following sequence:
        <ol>
          <li>*-appear, *-appear-active, *-appear-done</li>
          <li>*-enter, *-enter-active, *-enter-done</li>
          <li>*-exit, *-exit-active, *-exit-done</li>
        </ol>
      </>
      ,
    },
    {
      type: 'text',
      val: <>
        Following props exist:
      </>
      ,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        <CSSTransition
          in={showMessage}
          timeout={{
            appear: 2000,
            enter: 300,
            exit: 1000,
          }}
          classNames="xxx"
          appear={true}
          enter={true}
          exit={true}
          mountOnEnter={true}
          unmountOnExit={true}
          onEnter={func}
          onEntering={func}
          onEntered={func}
          onExit={func}
          onExiting={func}
          onExited={func}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false);
          }}
        >
          <p>Hello</p>
        </CSSTransition>
 
      `,
    },
    {
      type: 'text',
      val: <>
        Full code
      </>
      ,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useState } from 'react';
        import { CSSTransition } from 'react-transition-group';
        import styled from 'styled-components';
        
        function Component() {
          const [showMessage, setShowMessage] = useState(true);
          const toggle = () => setShowMessage(!showMessage)
          return (
            <Div>
              <button onClick={toggle}>Toggle</button>
              <CSSTransition
                in={showMessage}
                classNames="xxx"
                // timeout={300}
                timeout={{
                  appear: 2000,
                  enter: 300,
                  exit: 1000,
                }}
                appear = {true}
                unmountOnExit = {true}
              >
                <p>Hello</p>
              </CSSTransition>
            </Div>
          );
        }
        
        const Div = styled.div \`
          .xxx-appear {
            background: yellow;
          }
          .xxx-appear-active {
            background: green;
            transition: background 2000ms;
          }
          .xxx-appear-done {
            background: blue;
          }
          .xxx-enter {
            opacity: 0;
            transform: scale(0);
          }
          .xxx-enter-active {
            opacity: 1;
            transform: scale(1);
            transition: all 300ms;
          }
          .xxx-enter-done {
            background: red;
            transition: all 5000ms;
          }
          .xxx-exit {
            opacity: 1;
            transform: scale(1);
          }
          .xxx-exit-active {
            opacity: 0;
            transform: scale(0);
            transition: all 1000ms;
          }
          p {
            border: 1px grey solid;
            margin: 5px;
            padding: 5px;
          }
        \`
        
        const toRender = <Component />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      type: 'text',
      val: <>
        If <i>appear</i> prop is on then <i>*-appear-done</i> & <i>*-enter-done</i> classes will be both applied.
      </>
      ,
    },
  ],
}
