import React from 'react';
import styled from 'styled-components';
import img from './headphones.jpg';

const style = {height: "200px", display: "flex", justifyContent: 'center', alignItems: 'center'}

function Cmpt1() {
  return (
    <Div1 style={style}>
      {`background-image: url(\${img})`}
    </Div1>
  )
}

const Div1 = styled.div `
  background-image: url(${img});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  color: black;

`
const toRender1 = <Cmpt1 />

function Cmpt2() {
  return (
    <Div2 style={style}>
      {`background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(\${img})`}
    </Div2>
  )
}
const Div2 = styled.div `
  background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${img});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  color: white;

`
const toRender2 = <Cmpt2 />

export const dimBackgroundImg = {
  title: 'Dim background image',
  date: '2021.11.19',
  tagsArr: ['css', 'style'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Several background images separated by comma can be applied. 
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          There is a CSS trick how we can dim an image putting a bit transparent gradient without gradient in front.
        </>
      ),
    },
    {
      type: 'output',
      val: toRender1
    },
    {
      type: 'output',
      val: toRender2
    },
    
  ],
};