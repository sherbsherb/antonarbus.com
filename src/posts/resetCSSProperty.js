import React from 'react';
import styled from 'styled-components';
import { CodeSpan } from '../components/post/CodeSpan';

function Component() {

  return (
    <>
      <div>color: "green", fontSize: "30px"</div>
      <div style={{ color: "green", fontSize: "30px"}}>ABC</div><hr />

      <div>color: "green", fontSize: "30px", color: "<span style={{color: "red"}}>revert</span>"</div>
      <div style={{ color: "green", fontSize: "30px", color: "revert"}}>ABC</div><hr />

      <div>color: "green", fontSize: "30px", <span style={{color: "red"}}>all</span>: "revert"</div>
      <div style={{ color: "green", fontSize: "30px", all: "revert"}}>ABC</div><hr />

      <div>color: "green", fontSize: "30px", all: "<span style={{color: "red"}}>initial</span>"</div>
      <div style={{ color: "green", fontSize: "30px", all: "initial"}}>ABC</div><hr />

      <div>background: "yellow"</div>
      <div style={{ background: "grey", border: "1px solid red", padding: "10px" }}>
        <div style={{ background: "yellow", border: "1px solid red", padding: "10px"}}>
          hi
        </div>
      </div>
      <div>background: "<span style={{color: "red"}}>inherit</span>"</div>
      <div style={{ background: "grey", border: "1px solid red", padding: "10px" }}>
        <div style={{ background: "inherit", border: "1px solid red", padding: "10px"}}>
          hi
        </div>
      </div>


    </>
  );
}

const toRender = <Component />;

export const resetCSSProperty = {
  title: 'Reset CSS property',
  date: '2021.11.03',
  tagsArr: ['css'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <CodeSpan lang="css">{'{all: revert}'}</CodeSpan> resets all CSS properties to the user agent stylesheet.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan lang="css">{'{color: revert}'}</CodeSpan> sets color property only. 
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan lang="css">{'{color: inherit}'}</CodeSpan> sets property to the parents one. 
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan lang="css">{'{color: initial}'}</CodeSpan> sets property back to the spec default. 
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan lang="css">{'{color: unset}'}</CodeSpan> for a property that is inherited (e.g. color) it means <i>inherit</i>, and for a property that isn’t inherited (e.g. float) it means <i>initial</i>.
        </>
      ),
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
