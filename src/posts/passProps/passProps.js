import React, { useState } from 'react';
import { CodeInline, Link} from '../../components/post components/Post';

function Component1(props) {
  return (
    <div>
      props.prop1 = {props.prop1} <br/>
      props.prop2 = {props.prop2} <br/>
      props.prop3 = {props.prop3} <br/>
    </div>
  );
}

function Component2({ prop1, prop2, prop3 }) {
  return (
    <div>
      prop1 = {prop1} <br/>
      prop2 = {prop2} <br/>
      prop3 = {prop3} <br/>
    </div>
  );
}

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

export const passProps = {
  title: 'How to pass props',
  date: '2021.09.29',
  tagsArr: ['react', 'props', 'component', 'basics'],
  abstract: 'abstract from the article',
  articlesArr: [
    {
      type: 'text',
      val: (
        <>
          We can pass props into a component and take them from the <CodeInline>props</CodeInline> object.
        </>
      ),
    },
    {
      type: 'code',
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
      `,
    },
    {
      type: 'code',
      val: `
        <Component1 prop1='hello' prop2='my' prop3='friend' />
      `,
    },
    {
      type: 'output',
      val: (
        <Component1 prop1='hello' prop2='my' prop3='friend' />
      ),
    },

    {
      type: 'text',
      val: (
        <>
          <CodeInline>props</CodeInline> object can be destructured in a component.
        </>
      ),
    },
    {
      type: 'code',
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
      `,
    },
    {
      type: 'code',
      val: `
        <Component2 prop1='hello' prop2='my' prop3='friend'/>
      `,
    },
    {
      type: 'output',
      val: (
        <Component2 prop1='hello' prop2='my' prop3='friend'/>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We can pass wrapped props at ones using spread operator
          <CodeInline>{'{...props}'}</CodeInline>
          .
        </>
      ),
    },
    {
      type: 'code',
      val: `
        function Component3({ prop1, prop2, prop3 }) {
          return (
            <div>
              prop1 = {prop1} <br/> // hello
              prop2 = {prop2} <br/> // my
              prop3 = {prop3} <br/> // friend
            </div>
          );
        }
      `,
    },
    {
      type: 'code',
      val: `
        const userProps = {
          prop1: 'Hello',
          prop2: 'my',
          prop3: 'friend',
        }
      `
    },
    {
      type: 'code',
      val: `
        <Component3 {...userProps} />
      `,
    },
    {
      type: 'output',
      val: (
        <Component3 {...userProps} />
      ),
    },
  ],
};
