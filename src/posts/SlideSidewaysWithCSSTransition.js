import React, { useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Lnk } from '../components/post/Lnk';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

function Component() {
  const [state, setState] = useState(true);
  const toggle = () => setState(!state);
  const [radioValueState, setRadioValueState] = useState('forward');
  const onValueChange = e => setRadioValueState(e.target.value);
  return (
    <Div>
      <form>
        <p>Direction</p>
        <label>
          <input
            type="radio"
            name="name"
            value={'forward'}
            checked={radioValueState === 'forward'}
            onChange={onValueChange}
          />
          Forward
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="name"
            value={'backwards'}
            checked={radioValueState === 'backwards'}
            onChange={onValueChange}
          />
          Backwards
        </label>
        <br />
      </form>

      <button onClick={toggle}>Toggle</button>
      <CSSTransition
        in={state}
        classNames={radioValueState}
        timeout={{
          appear: 500,
          enter: 500,
          exit: 500,
        }}
        appear={true}
        unmountOnExit={true}
        mountOnEnter={false}
      >
        <div className={radioValueState}>1</div>
      </CSSTransition>
      <CSSTransition
        in={!state}
        classNames={radioValueState}
        timeout={{
          appear: 500,
          enter: 500,
          exit: 500,
        }}
        appear={true}
        unmountOnExit={true}
        mountOnEnter={false}
      >
        <div className={radioValueState}>2</div>
      </CSSTransition>
    </Div>
  );
}

const Div = styled.div`

  div {
    position: absolute;
    border: 1px grey solid;
    width: 50px;
    height: 50px;
    left: 50%;
    top: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .forward-appear {
    transform: translateX(-150%);
  }
  .forward-appear-active {
    transform: translateX(0%);
    transition: all 0.5s linear;
  }
  .forward-appear-done {
    transform: translateX(0%);
  }
  .forward-enter {
    transform: translateX(-150%);
  }
  .forward-enter-active {
    transform: translateX(0%);
    transition: all 0.5s linear;
  }
  .forward-enter-done {
    transform: translateX(0%);
  }
  .forward-exit {
    transform: translateX(0%);
  }
  .forward-exit-active {
    transform: translateX(150%);
    transition: all 0.5s linear;
  }
  .forward-exit-done {
    transform: translateX(150%);
  }


  .backwards-appear {
    transform: translateX(150%);
  }
  .backwards-appear-active {
    transform: translateX(0%);
    transition: all 0.5s linear;
  }
  .backwards-appear-done {
    transform: translateX(0%);
  }
  .backwards-enter {
    transform: translateX(150%);
  }
  .backwards-enter-active {
    transform: translateX(0%);
    transition: all 0.5s linear;
  }
  .backwards-enter-done {
    transform: translateX(0%);
  }
  .backwards-exit {
    transform: translateX(0%);
  }
  .backwards-exit-active {
    transform: translateX(-150%);
    transition: all 0.5s linear;
  }
  .backwards-exit-done {
    transform: translateX(-150%);
  }
`;

const toRender = <Component />;

export const SlideSidewaysWithCSSTransition = {
  title: 'Slide sideways with CSSTransition',
  date: '2021.11.02',
  tagsArr: ['react', 'animation'],
  postParts: [
    {
      type: 'text',
      val: <>Following approach is used in folded navigation menu slide animation on top of this page.</>,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useState } from 'react';
        import { CSSTransition } from 'react-transition-group';
        import styled from 'styled-components';

        function Component() {
          const [state, setState] = useState(true);
          const toggle = () => setState(!state);
          const [radioValueState, setRadioValueState] = useState('forward');
          const onValueChange = e => setRadioValueState(e.target.value);
          return (
            <Div>
              <form>
                <p>Direction</p>
                <label>
                  <input
                    type="radio"
                    name="name"
                    value={'forward'}
                    checked={radioValueState === 'forward'}
                    onChange={onValueChange}
                  />
                  Forward
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="name"
                    value={'backwards'}
                    checked={radioValueState === 'backwards'}
                    onChange={onValueChange}
                  />
                  Backwards
                </label>
                <br />
              </form>

              <button onClick={toggle}>Toggle</button>
              <CSSTransition
                in={state}
                classNames={radioValueState}
                timeout={{
                  appear: 500,
                  enter: 500,
                  exit: 500,
                }}
                appear={true}
                unmountOnExit={true}
                mountOnEnter={false}
              >
                <div className={radioValueState}>1</div>
              </CSSTransition>
              <CSSTransition
                in={!state}
                classNames={radioValueState}
                timeout={{
                  appear: 500,
                  enter: 500,
                  exit: 500,
                }}
                appear={true}
                unmountOnExit={true}
                mountOnEnter={false}
              >
                <div className={radioValueState}>2</div>
              </CSSTransition>
            </Div>
          );
        }

        const Div = styled.div\`

          div {
            position: absolute;
            border: 1px grey solid;
            width: 50px;
            height: 50px;
            left: 50%;
            top: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .forward-appear {
            transform: translateX(-150%);
          }
          .forward-appear-active {
            transform: translateX(0%);
            transition: all 0.5s linear;
          }
          .forward-appear-done {
            transform: translateX(0%);
          }
          .forward-enter {
            transform: translateX(-150%);
          }
          .forward-enter-active {
            transform: translateX(0%);
            transition: all 0.5s linear;
          }
          .forward-enter-done {
            transform: translateX(0%);
          }
          .forward-exit {
            transform: translateX(0%);
          }
          .forward-exit-active {
            transform: translateX(150%);
            transition: all 0.5s linear;
          }
          .forward-exit-done {
            transform: translateX(150%);
          }


          .backwards-appear {
            transform: translateX(150%);
          }
          .backwards-appear-active {
            transform: translateX(0%);
            transition: all 0.5s linear;
          }
          .backwards-appear-done {
            transform: translateX(0%);
          }
          .backwards-enter {
            transform: translateX(150%);
          }
          .backwards-enter-active {
            transform: translateX(0%);
            transition: all 0.5s linear;
          }
          .backwards-enter-done {
            transform: translateX(0%);
          }
          .backwards-exit {
            transform: translateX(0%);
          }
          .backwards-exit-active {
            transform: translateX(-150%);
            transition: all 0.5s linear;
          }
          .backwards-exit-done {
            transform: translateX(-150%);
          }
        \`;

        const toRender = <Component />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
    ,
  ],
};
