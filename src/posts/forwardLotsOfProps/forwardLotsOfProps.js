import React from 'react';
import { CodeInline } from '../../components/post components/Post';

function ParentComponent(props) {
  return (
    <>
      Props of parent component: {JSON.stringify(props)} <br/>
      <ChildComponent {...props} />
    </>
  );
}

function ChildComponent(props) {
  return (
    <> 
      Props of child component: {JSON.stringify(props)}
    </>
  );
}

const toRender = <ParentComponent prop1='hello' prop2='my' prop3='friend' />

export const forwardLotsOfProps = {
  title: 'Forward lots of props',
  date: '2021.09.29',
  id: 'fhjdtrwe',
  tagsArr: ['react', 'props', 'component', 'basics'],
  abstract: 'abstract from the article',
  articlesArr: [
    {
      type: 'text',
      val: 
        <>
          Sometimes we need to pass tons of props from a component to a component.
          That can create a mess.<br/><br/>
          With spread {<CodeInline>...</CodeInline>} operator we can pass any number of props at ones.
        </>
      ,
    },
    {
      type: 'code',
      val: `
        function ParentComponent(props) {
          return (
            <>
              Props of parent component: {JSON.stringify(props)} <br/>
              <ChildComponent {...props} />
            </>
          );
        }
        
        function ChildComponent(props) {
          return (
            <> 
              Props of child component: {JSON.stringify(props)}
            </>
          );
        }

        const toRender = <ParentComponent prop1='hello' prop2='my' prop3='friend' />
      `,
    },
    {
      type: 'output',
      val: toRender,
    },

  
  ],
};
