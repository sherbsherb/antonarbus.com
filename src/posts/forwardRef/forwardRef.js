import React from 'react';
import { CodeInline, Link } from '../../components/post components/Post';

const Input = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

function InputWithFocus() {
  const ref = React.useRef();
  const focus = () => ref.current.focus();

  return (
    <>
      <Input
        ref={ref}
        placeholder="my input"
        style={{ padding: '5px', margin: '5px' }}
      />
      <button onClick={focus}>Focus</button>
    </>
  );
}

const toRender = <InputWithFocus />

export const forwardRef = {
  title: (
    <>
      <CodeInline>forwardRef()</CodeInline> & input + focus
    </>
  ),
  date: '2021.09.26',
  tagsArr: ['react', 'useRef', 'forwardRef', 'input', 'focus', 'basics', 'hook', 'DOM'],
  abstract: 'abstract from the article',
  articlesArr: [
    {
      type: 'text',
      val: <>
        To pass DOM element to a custom component via <CodeInline>React.useRef()</CodeInline> {' '}
        we need to wrap a component into <CodeInline>React.forwardRef()</CodeInline> {' '}
        <Link link={'https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components'} text={'function'}/>.
      </>,
    },
    {
      type: 'code',
      val: `
        const Input = React.forwardRef((props, ref) => (
          <input ref={ref} {...props} />
        ));
        
        function InputWithFocus() {
          const ref = React.useRef();
          const focus = () => ref.current.focus();
        
          return (
            <>
              <Input
                ref={ref}
                placeholder="my input"
                style={{ padding: '5px', margin: '5px' }}
              />
              <button onClick={focus}>Focus</button>
            </>
          );
        }

        const toRender = <InputWithFocus />
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
