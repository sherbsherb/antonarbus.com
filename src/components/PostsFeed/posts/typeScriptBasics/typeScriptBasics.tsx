import React from 'react';
import { CodeSpan } from '../../components/CodeSpan';

interface propsTypes1 {
  name: string;
  lastName?: string;
  likesNum: string | number;
}
function Msg1(props: propsTypes1): JSX.Element {
  return (
    <div>
      Hello {props.name}
      {props.lastName && ' ' + props.lastName}, you have received{' '}
      {props.likesNum} likes.
    </div>
  );
}
const toRender1 = <Msg1 name="John" likesNum={5} />;

type propTypes2 = {
  name: string;
  company?: string;
  likesNum: string | number;
  isLogged: boolean;
  spouseName: {
    name: string;
    lastName: string;
  };
  cars: string[];
};
function Msg2(props: propTypes2): JSX.Element {
  return (
    <>
      Hello {props.name} {props.company && 'from ' + props.company}
      {props.isLogged && ', you have received ' + props.likesNum + ' likes.'} We
      wish you and {props.spouseName.name} {props.spouseName.lastName} a good
      day. Your following cars have unpaid fine tickets:{' '}
      {props.cars.map((car, i) => {
        const ending = i !== props.cars.length - 1 ? ' & ' : '';
        return car + ending;
      })}
    </>
  );
}
const toRender2 = (
  <Msg2
    isLogged={true}
    name="John"
    likesNum={'five'}
    spouseName={{ name: 'Jane', lastName: 'Dow' }}
    cars={['bmw', 'vw', 'audi']}
  />
);

type propTypes3 = {
  status: 'downloading' | 'completed' | 'error';
};
function Msg3(props: propTypes3): JSX.Element {
  return (
    <>
      Status is "{props.status}"
    </>
  );
}
const toRender3 = <Msg3 status={'completed'} />;



export const typeScriptBasics = {
  title: <>TypeScript in React</>,
  date: '2021.11.25',
  tagsArr: ['react', 'typescript', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Import typescript into existing project with{' '}
          <CodeSpan type="markup">
            {
              'npm install --save typescript @types/node @types/react @types/react-dom @types/jest'
            }
          </CodeSpan>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Or create a new react project with typescript with{' '}
          <CodeSpan>npx create-react-app my-app --template typescript</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      
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
    {
      type: 'output',
      val: toRender3,
    },
  ],
};
