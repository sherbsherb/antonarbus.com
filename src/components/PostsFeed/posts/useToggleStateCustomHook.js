import { CodeSpan } from '../components/CodeSpan'
import { Lnk } from '../components/Lnk'
import useToggleBooleanState from '../../../helpers/functions/useToggleBooleanState'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

function Component() {
  const [state, toggleState] = useToggleBooleanState(true)
  return (
    <>
      <div>{state.toString()}</div>
      <button onClick={toggleState}>Toggle state</button>
    </>
  )
}
const toRender = <Component />

export const useToggleBooleanStateCustomHook = {
  title: (
    <>
      <CodeSpan>useToggleBooleanState()</CodeSpan> custom hook
    </>
  ),
  date: '2021.10.24',
  tagsArr: ['react', 'custom', 'hook'],
  postParts: [
    {
      val: (
        <>
          <ul>
            <li>
              We often need to have a boolean <i>state</i> and switch between{' '}
              <i>true</i> & <i>false</i> to show/hide something on a screen
            </li>
            <li>
              We can put this simple logic into a separate custom hook and make
              components a bit cleaner
            </li>
          </ul>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // useToggleBooleanState.js
        import { useState } from 'react';

        export default function useToggleBooleanState(initVal = true) {
          const [state, setState] = useState(initVal);
          const toggleState = () => setState(prevVal => !prevVal);
          return [state, toggleState];
        }
      `,
    },
    {
      type: 'text',
      val: 'Usage',
    },
    {
      type: 'code',
      val: `
        function Component() {
          const [state, toggleState] = useToggleBooleanState(true)
          return (
            <>
              <div>{state.toString()}</div>
              <button onClick={toggleState}>Toggle state</button>
            </>
          );
        }
        const toRender = <Component />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      val: (
        <>
          Similar function can be found in the{' '}
          <Lnk path={'https://www.npmjs.com/package/react-use'}>
            react-use
          </Lnk>{' '}
          package under the{' '}
          <Lnk path="https://github.com/streamich/react-use/blob/HEAD/docs/useToggle.md">
            useToggle
          </Lnk>{' '}
          hook.
        </>
      ),
    },
  ],
}
