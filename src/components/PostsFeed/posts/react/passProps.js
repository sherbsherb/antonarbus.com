import { CodeSpan } from '../../components/CodeSpan'

function Component1(props) {
  return (
    <div>
      props.prop1 = {props.prop1} <br/>
      props.prop2 = {props.prop2} <br/>
      props.prop3 = {props.prop3} <br/>
    </div>
  )
}

const toRender1 = <Component1 prop1='hello' prop2='my' prop3='friend'/>

function Component2({ prop1, prop2, prop3 }) {
  return (
    <div>
      prop1 = {prop1} <br/>
      prop2 = {prop2} <br/>
      prop3 = {prop3} <br/>
    </div>
  )
}

const toRender2 = <Component2 prop1='hello' prop2='my' prop3='friend'/>

function Component3({ prop1, prop2, prop3 }) {
  return (
    <div>
      prop1 = {prop1} <br/>
      prop2 = {prop2} <br/>
      prop3 = {prop3} <br/>
    </div>
  )
}

const userProps = {
  prop1: 'Hello',
  prop2: 'my',
  prop3: 'friend',
}

const toRender3 = <Component3 {...userProps}/>

export const passProps = {
  title: 'How to pass props',
  date: '2021.09.29',
  tagsArr: ['react', 'props', 'component', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          We can pass props into a component and take them from the <CodeSpan>props</CodeSpan> object.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component1(props) {
          return (
            <div>
              props.prop1 = {props.prop1} <br/> // hello
              props.prop2 = {props.prop2} <br/> // my
              props.prop3 = {props.prop3} <br/> // friend
            </div>
          );
        }

        const toRender1 = <Component1 prop1='hello' prop2='my' prop3='friend'/>
      `,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        <Component1 prop1='hello' prop2='my' prop3='friend' />
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
          <CodeSpan>props</CodeSpan> object can be destructured in a component.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component2({ prop1, prop2, prop3 }) {
          return (
            <div>
              prop1 = {prop1} <br/> // hello
              prop2 = {prop2} <br/> // my
              prop3 = {prop3} <br/> // friend
            </div>
          );
        }

        const toRender2 = <Component2 prop1='hello' prop2='my' prop3='friend'/>
      `,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        <Component2 prop1='hello' prop2='my' prop3='friend'/>
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
          We can pass wrapped props at ones using spread operator
          <CodeSpan>{'{...props}'}</CodeSpan>
          .
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component3({ prop1, prop2, prop3 }) {
          return (
            <div>
              prop1 = {prop1} <br/>
              prop2 = {prop2} <br/>
              prop3 = {prop3} <br/>
            </div>
          );
        }
        
        const userProps = {
          prop1: 'Hello',
          prop2: 'my',
          prop3: 'friend',
        }
        
        const toRender3 = <Component3 {...userProps}/>
      `,
    },
    {
      type: 'output',
      val: toRender3,
    },
  ],
}
