import React, { useState } from 'react';
import { IoSquareSharp } from 'react-icons/io5';
import { CodeSpan } from '../components/post/CodeSpan';
import { Link } from '../components/post/Link';

const style = {
  border: '2px solid grey',
  padding: '10px',
  margin: '10px',
  maxWidth: '300px',
};

function ParentComponent(props) {
  const [parentState, setParentState] = useState(0);

  const divForText = document.querySelector('#sdfghu234');
  if (!!divForText)
    divForText.outerHTML += '<div>ParentComponent triggered</div>';

  return (
    <div style={style}>
      <button onClick={() => setParentState(parentState + 1)}>
        Change parentState
      </button>
      {props.children}
    </div>
  );
}

function ChildComponent1() {
  const [childState1, setChildState1] = useState(0);
  const divForText = document.querySelector('#sdfghu234');
  if (!!divForText)
    divForText.outerHTML += '<div>ChildComponent1 triggered</div>';

  return (
    <div style={style}>
      <button onClick={() => setChildState1(childState1 + 1)}>
        Change childState1
      </button>
    </div>
  );
}

function ChildComponent2() {
  const [childState2, setChildState2] = useState(0);
  const divForText = document.querySelector('#sdfghu234');
  if (!!divForText)
    divForText.outerHTML += '<div>ChildComponent2 triggered</div>';

  return (
    <div style={style}>
      <button onClick={() => setChildState2(childState2 + 1)}>
        Change childState2
      </button>
    </div>
  );
}

const toRender1 = (
  <>
    <div id={'sdfghu234'}></div>
    <ParentComponent>
      <ChildComponent1 />
      <ChildComponent2 />
    </ParentComponent>
  </>
);

function ParentComponent2() {
  const [parentState, setParentState] = useState(0);

  const divForText = document.querySelector('#sdfghu234');
  if (!!divForText)
    divForText.outerHTML += '<div>ParentComponent triggered</div>';

  return (
    <div style={style}>
      <button onClick={() => setParentState(parentState + 1)}>
        Change parentState
      </button>
      <ChildComponent1 />
      <ChildComponent2 />
    </div>
  );
}

const toRender2 = (
  <ParentComponent2 />
);

export const childrenComponentsRender = {
  title: 'Children components render',
  date: '2021.10.11',
  tagsArr: ['react', 'component', 'useState', 'hook', 'render', 'basics'],
  postParts: [
    {
      type: 'text',
      val:<>
        Have read an <Link path={'https://felixgerschau.com/react-rerender-components/#when-does-react-re-render'}>article</Link> which 
        says <q>... all its subsequent child components will re-render, regardless of whether their props have changed or not.</q>
      </>,
    },
    {
      type: 'text',
      val: `
        Tried to prove it, but filed. 
      `,
    },
    
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const style = {
          border: '2px solid grey',
          padding: '10px',
          margin: '10px',
          maxWidth: '300px',
        };
        
        function ParentComponent(props) {
          const [parentState, setParentState] = useState(0);
        
          const divForText = document.querySelector('#sdfghu234');
          if (!!divForText)
            divForText.outerHTML += '<div>ParentComponent triggered</div>';
        
          return (
            <div style={style}>
              <button onClick={() => setParentState(parentState + 1)}>
                Change parentState
              </button>
              {props.children}
            </div>
          );
        }
        
        function ChildComponent1() {
          const [childState1, setChildState1] = useState(0);
          const divForText = document.querySelector('#sdfghu234');
          if (!!divForText)
            divForText.outerHTML += '<div>ChildComponent1 triggered</div>';
        
          return (
            <div style={style}>
              <button onClick={() => setChildState1(childState1 + 1)}>
                Change childState1
              </button>
            </div>
          );
        }
        
        function ChildComponent2() {
          const [childState2, setChildState2] = useState(0);
          const divForText = document.querySelector('#sdfghu234');
          if (!!divForText)
            divForText.outerHTML += '<div>ChildComponent2 triggered</div>';
        
          return (
            <div style={style}>
              <button onClick={() => setChildState2(childState2 + 1)}>
                Change childState2
              </button>
            </div>
          );
        }
        
        const toRender = (
          <>
            <div id={'sdfghu234'}></div>
            <ParentComponent>
              <ChildComponent1 />
              <ChildComponent2 />
            </ParentComponent>
          </>
        );
      `,
    },
    
    {
      type: 'text',
      val: `
        Components are rendered when state declared inside is changed. 
      `,
    },
    {
      type: 'text',
      val: `
        Parent component's state change does not trigger children components to render. 
      `,
    },
    {
      type: 'text',
      val: <>
        Parent component's render does not trigger render of components passed as <CodeSpan>props.children</CodeSpan>. 
      </>,
    },
    {
      type: 'text',
      val: <>
        But if we include the children components directly into the parent (not in <CodeSpan>props.children</CodeSpan>) then
        parent component render will trigger render of children components also. 
      </>,
    },
    {
      type: 'code',
      val: `
        function ParentComponent2() {
          const [parentState, setParentState] = useState(0);
        
          const divForText = document.querySelector('#sdfghu234');
          if (!!divForText)
            divForText.outerHTML += '<div>ParentComponent triggered</div>';
        
          return (
            <div style={style}>
              <button onClick={() => setParentState(parentState + 1)}>
                Change parentState
              </button>
              <ChildComponent1 />
              <ChildComponent2 />
            </div>
          );
        }
        
        const toRender2 = (
          <ParentComponent2 />
        );
      `,
    },
    {
      type: 'output',
      val: toRender1,
    },
    {
      type: 'output',
      val: toRender2,
    },
    
  ],
};
