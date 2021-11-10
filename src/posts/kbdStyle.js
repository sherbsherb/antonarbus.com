import React from 'react';
import styled from 'styled-components';
import { CodeSpan } from '../components/Post/CodeSpan';

function Parent() {
  return (
    <Div>
      <kbd>Esc</kbd><kbd>F4</kbd><kbd>Alt</kbd><kbd>Ctrl</kbd><kbd>Tab</kbd>
    </Div>
  );
}

const Div = styled.div `
  kbd {
    margin: 0px 0.1em;
    padding: 0.1em 0.6em;
    border-radius: 3px;
    border: 1px solid rgb(204, 204, 204);
    color: rgb(51, 51, 51);
    line-height: 1.4;
    font-family: Arial,Helvetica,sans-serif;
    display: inline-block;
    box-shadow: 0px 1px 0px rgba(0,0,0,0.2), inset 0px 0px 0px 2px #ffffff;
    background-color: rgb(247, 247, 247);
    text-shadow: 0 1px 0 #fff;
    font-size: 12px;
  }
`

const toRender = <Parent />;

export const kbdStyle = {
  title: 'kbd tag style',
  date: '2021.10.29',
  tagsArr: ['css', 'style'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Keyboard keys <CodeSpan>{'<kbd>Tab</kbd>'}</CodeSpan> css style.
        </>
      ),
    },
    { 
      type: 'code', 
      lang: 'jsx',
      val: `
        function Parent() {
          return (
            <Div>
              <kbd>Esc</kbd><kbd>F4</kbd><kbd>Alt</kbd><kbd>Ctrl</kbd><kbd>Tab</kbd>
            </Div>
          );
        }
        
        const Div = styled.div \`
          kbd {
            margin: 0px 0.1em;
            padding: 0.1em 0.6em;
            border-radius: 3px;
            border: 1px solid rgb(204, 204, 204);
            color: rgb(51, 51, 51);
            line-height: 1.4;
            font-family: Arial,Helvetica,sans-serif;
            display: inline-block;
            box-shadow: 0px 1px 0px rgba(0,0,0,0.2), inset 0px 0px 0px 2px #ffffff;
            background-color: rgb(247, 247, 247);
            text-shadow: 0 1px 0 #fff;
            font-size: 12px;
          }
        \`
      `
    },
    { 
      type: 'output', 
      val: toRender
    },
  ],
};