import React from 'react';
import { CodeInline } from '../../components/post components/Post';

function Parent() {
  const [state, setState] = React.useState(0);

  return (
    <div style={{ background: 'lightyellow', padding: '20px' }}>
      <h1>Parent Component</h1>
      <br />
      <div>Count state variable: {state}</div>
      <br />
      <Child state={state} setState={setState} />
    </div>
  );
}

function Child(props) {
  return (
    <div style={{ background: 'lightgrey', padding: '20px' }}>
      <h1>Child Component</h1>
      <br />
      <button onClick={() => props.setState(props.state + 1)}>
        Update from child component
      </button>
      <br />
    </div>
  );
}

const toRender = <Parent />;

export const updateValueFromChildComponent = {
  title: 'Update value from a child component',
  date: '2021.09.29',
  tagsArr: ['react', 'props', 'state', 'useState', 'component', 'child', 'parent', 'basics'],
  abstract: 'abstract from the article',
  articlesArr: [
    {
      type: 'text',
      val: <>To update the state in a Parent component from a Child component we need to pass <CodeInline>setState</CodeInline> function via props to a child component.</>,
    },
    {
      type: 'code',
      val: `
        function Parent() {
          const [state, setState] = React.useState(0);
        
          return (
            <div style={{ background: 'lightyellow', padding: '20px' }}>
              <h1>Parent Component</h1>
              <br />
              <div>Count state variable: {state}</div>
              <br />
              <Child state={state} setState={setState} />
            </div>
          );
        }
        
        function Child(props) {
          return (
            <div style={{ background: 'lightgrey', padding: '20px' }}>
              <h1>Child Component</h1>
              <br />
              <button onClick={() => props.setState(props.state + 1)}>
                Update from child component
              </button>
              <br />
            </div>
          );
        }
        
        const toRender = <Parent />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
