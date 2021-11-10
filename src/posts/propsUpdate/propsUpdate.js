import React from 'react';
import { CodeSpan } from '../../components/Post/CodeSpan';
import { Img } from '../../components/Post/Img';
import consolePic from './console.png';
import errorPic from './error.png';

const style = {
  border: '2px solid grey',
  padding: '10px',
  margin: '10px',
  maxWidth: '500px',
};

function ParentComponent() {
  let a = 0;

  return (
    <div style={style}>
      <h3>Parent component</h3>
      <br />
      <div>Variable lives in the Parent component</div>
      <h3>
        a = <span>{a}</span>
      </h3>
      <button
        onClick={() => {
          a++;
          console.log(a);
        }}
      >
        Update variable
      </button>
      <ChildComponent variable={a} />
    </div>
  );
}

function ChildComponent(props) {
  return (
    <div style={style}>
      <h3>Child component</h3>
      <br />
      <div>Variable comes from the Parent component in props</div>
      <h3>
        props.a = <span>{props.variable}</span>
      </h3>
      <button
        onClick={() => {
          props.a++;
          console.log(props.a);
        }}
      >
        Update variable
      </button>
    </div>
  );
}

const toRender = <ParentComponent />;

export const propsUpdate = {
  title: 'Props update',
  date: '2021.10.12',
  tagsArr: ['react', 'component', 'props', 'render', 'basics'],
  postParts: [
    {
      type: 'text',
      val: 'In short, passed props are immutable and can not be changed.',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const style = {
          border: '2px solid grey',
          padding: '10px',
          margin: '10px',
          maxWidth: '500px',
        };
        
        function ParentComponent() {
          let x = 0;
        
          return (
            <div style={style}>
              <h3>Parent component</h3>
              <br />
              <div>Var lives in the Parent component</div>
              <h3>
                var = <span>{x}</span>
              </h3>
              <button
                onClick={() => {
                  x++;
                  console.log(x);
                }}
              >
                Update variable
              </button>
              <ChildComponent variable={x} />
            </div>
          );
        }
        
        function ChildComponent(props) {
          return (
            <div style={style}>
              <h3>Child component</h3>
              <br />
              <div>Var comes from the Parent component in props</div>
              <h3>
                var = <span>{props.variable}</span>
              </h3>
              <button
                onClick={() => {
                  props.x++;
                  console.log(props.x);
                }}
              >
                Update variable
              </button>
            </div>
          );
        }
        
        const toRender = <ParentComponent />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      type: 'text',
      val: (
        <>
          Variable <CodeSpan>a = 0;</CodeSpan> is defined in Parent component.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We can change it by the button and see a new value in the console, but
          it is not rendered in UI, because variable is not associated with a
          state.
          <Img path={consolePic} />
        </>
      ),
    },

    {
      type: 'text',
      val: (
        <>
          On the component render we passed the variable to the child component
          via props <CodeSpan>{'<ChildComponent variable={x} />'}</CodeSpan> and
          we see its initial value in the child component.
        </>
      ),
    },

    {
      type: 'text',
      val: (
        <>
          If we try to update the passed prop by the button in the child component we get an error in development mode.
          <Img path={errorPic} />
        </>
      ),
    },

    
  ],
};
