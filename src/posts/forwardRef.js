import React from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Link } from '../components/post/Link';

const Input = React.forwardRef((props, ref) => <input ref={ref} {...props} />);

function InputWithFocus() {
  const refContainer = React.useRef();
  const focus = () => refContainer.current.focus();

  return (
    <>
      <Input
        ref={refContainer}
        placeholder="my input"
        style={{ padding: '5px', margin: '5px' }}
      />
      <button onClick={focus}>Focus</button>
    </>
  );
}

const toRender = <InputWithFocus />;

export const forwardRef = {
  title: (
    <>
      <CodeSpan>forwardRef()</CodeSpan> hook & input focus
    </>
  ),
  date: '2021.09.26',
  tagsArr: [
    'react',
    'useRef',
    'forwardRef',
    'input',
    'focus',
    'basics',
    'hook',
    'DOM',
  ],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          To pass a reference to a DOM element into a custom component via{' '}
          <CodeSpan>React.useRef()</CodeSpan> we need to wrap a custom component
          into <CodeSpan>React.forwardRef()</CodeSpan>{' '}
          <Link link={'https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components'}
            text={'function'}
          />.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
        val: `
          const Input = React.forwardRef((props, ref) => <input ref={ref} {...props} />);

          function InputWithFocus() {
            const refContainer = React.useRef();
            const focus = () => refContainer.current.focus();
          
            return (
              <>
                <Input
                  ref={refContainer}
                  placeholder="my input"
                  style={{ padding: '5px', margin: '5px' }}
                />
                <button onClick={focus}>Focus</button>
              </>
            );
          }
          
          const toRender = <InputWithFocus />;
        `,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      type: 'text',
      val:''
    }
  ],
};
