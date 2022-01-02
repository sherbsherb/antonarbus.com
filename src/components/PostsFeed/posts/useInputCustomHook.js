import { useState } from 'react'
import { CodeSpan } from '../components/CodeSpan'
import useInput from '../../../helpers/functions/useInput'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

function Component1() {
  const [firstNameState, setFirstNameState] = useState('')
  const [lastNameState, setLastNameState] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    alert(`hello ${firstNameState} ${lastNameState}`)
    setFirstNameState('')
    setLastNameState('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          placeholder="First name"
          value={firstNameState}
          onChange={e => setFirstNameState(e.target.value)}
        />
        <input
          placeholder="Last name"
          value={lastNameState}
          onChange={e => setLastNameState(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

const toRender1 = <Component1 />

function Component2() {
  const [firstNameState, bindFirstName, resetFirstName] = useInput()
  const [lastNameState, bindLastName, resetLastName] = useInput()

  const submitHandler = e => {
    e.preventDefault()
    alert(`hello ${firstNameState} ${lastNameState}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input placeholder="First name" {...bindFirstName} />
        <input placeholder="Last name" {...bindLastName} />
        <button>Submit</button>
      </form>
    </div>
  )
}

const toRender2 = <Component2 />

export const useInputCustomHook = {
  title: (
    <>
      <CodeSpan>useInput()</CodeSpan> for input control
    </>
  ),
  date: '2021.10.23',
  tagsArr: ['react', 'custom', 'hook'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          With controlled component input values are always driven by the React
          state and we always need to create such logic for every input.
        </>
      ),
    },
    {
      val: (
        <>
          <ul>
            <li>We control input value via react state with <i>onChange</i> event</li>
            <li>On form submit we prevent the default action and do our logic</li>
            <li>After submission we reset input fields with initial empty string</li>
          </ul>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component1() {
          const [firstNameState, setFirstNameState] = useState('');
          const [lastNameState, setLastNameState] = useState('');
        
          const submitHandler = e => {
            e.preventDefault();
            alert(\`hello \${firstNameState} \${lastNameState}\`);
            setFirstNameState('');
            setLastNameState('');
          };
        
          return (
            <div>
              <form onSubmit={submitHandler}>
                <input
                  placeholder="First name"
                  value={firstNameState}
                  onChange={e => setFirstNameState(e.target.value)}
                />
                <input
                  placeholder="Last name"
                  value={lastNameState}
                  onChange={e => setLastNameState(e.target.value)}
                />
                <button>Submit</button>
              </form>
            </div>
          );
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
          Let's make a custom hook for an input control.
          We extract the logic into a separate file 'useInput.js' and export back
          array with input <i>value</i> & <i>onChange</i> attributes in an object and reset function.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // useInput.js
        import {useState} from 'react'
        
        export default function useInput(initVal = '') {
          const [val, setVal] = useState(initVal)
          const reset = () => setVal(initVal) 
          const bind = {
            value: val,
            onChange: e => setVal(e.target.value)
          }
          return [val, bind, reset]
        }
      `,
    },
    {
      type: 'text',
      val: <>In the main file we bring and destruct values from the custom hook.</>,
    },
    {
      type: 'text',
      val: (
        <>
          Note how we bring <i>value</i> and <i>onChange</i> attributes into an
          input element by spreading object into an input field.
        </>
      ),
    },
    {
      type: 'code',
      val: `
        import useInput from '../../../helpers/functions/useInput';

        function Component2() {
          const [firstNameState, bindFirstName, resetFirstName] = useInput();
          const [lastNameState, bindLastName, resetLastName] = useInput();
        
          const submitHandler = e => {
            e.preventDefault();
            alert(\`hello \${firstNameState} \${lastNameState}\`);
            resetFirstName();
            resetLastName();
          };
        
          return (
            <div>
              <form onSubmit={submitHandler}>
                <input placeholder="First name" {...bindFirstName} />
                <input placeholder="Last name" {...bindLastName} />
                <button>Submit</button>
              </form>
            </div>
          );
        }
        
        const toRender2 = <Component2 />;
      `,
    },
    {
      type: 'output',
      val: toRender2,
    },
  ],
}
