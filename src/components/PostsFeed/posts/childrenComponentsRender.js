import { useRef, useState } from 'react'
import { CodeSpan } from '../components/CodeSpan'
import { Lnk } from '../components/Lnk'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

const style = {
  border: '2px solid grey',
  padding: '10px',
  margin: '10px',
  maxWidth: '500px',
}

function ParentComponent(props) {
  const [parentState, setParentState] = useState(0)
  const ref = useRef()

  if (ref.current) { ref.current.innerHTML += '<div>ParentComponent triggered</div>' }

  return (
    <div style={style}>
      <H3>{props.text}</H3>
      <button onClick={() => setParentState(parentState + 1)}>Change state</button>
      <div ref={ref}></div>
      <ChildComponent text={'Child component 1 - included in Parent'}/>
      <ChildComponent text={'Child component 2 - included in Parent'}/>
      {props.children}
    </div>
  )
}

function ChildComponent(props) {
  const [childState, setChildState1] = useState(0)
  const ref = useRef()
  if (ref.current) { ref.current.innerHTML += '<div>ChildComponent triggered</div>' }

  return (
    <div style={style}>
      <H3>{props.text}</H3>
      <button onClick={() => setChildState1(childState + 1)}>Change state</button>
      <div ref={ref}></div>
    </div>
  )
}

const toRender = (
  <>
    <ParentComponent text={'Parent component'}>
      <ChildComponent text={'Child component 3 - passed as props.children'}/>
      <ChildComponent text={'Child component 4 - passed as props.children'}/>
    </ParentComponent>
  </>
)

export const childrenComponentsRender = {
  title: 'Children components render',
  date: '2021.10.11',
  tagsArr: ['react', 'component', 'useState', 'hook', 'render', 'basics'],
  postParts: [
    {
      type: 'text',
      val: <>
        Have read the <Lnk path={'https://felixgerschau.com/react-rerender-components/#when-does-react-re-render'}>article</Lnk> which
        says <q>... all its subsequent child components will re-render, regardless of whether their props have changed or not.</q>
      </>,
    },
    {
      type: 'text',
      val: `
        Tried to prove it, but it is not 100% true. 
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
          maxWidth: '500px',
        };
        
        function ParentComponent(props) {
          const [parentState, setParentState] = useState(0);
          const ref = useRef()
        
          if (!!ref.current)
            ref.current.innerHTML += '<div>ParentComponent triggered</div>';
        
          return (
            <div style={style}>
              <H3>{props.text}</H3>
              <button onClick={() => setParentState(parentState + 1)}>Change state</button>
              <div ref={ref}></div>
              <ChildComponent text={'Child component 1 - included in Parent'}/>
              <ChildComponent text={'Child component 2 - included in Parent'}/>
              {props.children}
            </div>
          );
        }
        
        function ChildComponent(props) {
          const [childState, setChildState1] = useState(0);
          const ref = useRef()
          if (!!ref.current)
            ref.current.innerHTML += '<div>ChildComponent triggered</div>';
        
          return (
            <div style={style}>
              <H3>{props.text}</H3>
              <button onClick={() => setChildState1(childState + 1)}>Change state</button>
              <div ref={ref}></div>
            </div>
          );
        }
        
        const toRender = (
          <>
            <ParentComponent text={'Parent component'}>
              <ChildComponent text={'Child component 3 - as props.children'}/>
              <ChildComponent text={'Child component 4 - as props.children'}/>
            </ParentComponent>
          </>
        );
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      type: 'text',
      val: `
        Parent component's state change triggers render of himself. It concerns states declared 
        inside a component.
      `,
    },
    {
      type: 'text',
      val: <>
        If children components are included directly into the Parent then
        they will be rendered too as component function executed.
      </>,
    },
    {
      type: 'text',
      val: <>
        But Parent's render does not trigger a render of components inside its tags passed as <CodeSpan>props.children</CodeSpan>.
      </>,
    },
  ],
}
