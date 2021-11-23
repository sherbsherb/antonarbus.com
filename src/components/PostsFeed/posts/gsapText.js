import React, { useEffect, useRef } from 'react';
import { Lnk } from '../components/Lnk';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function Cmpt() {
  const textRef = useRef()
  const cursorRef = useRef()

  //blink cursor
  useEffect(() => {
    gsap.to(cursorRef.current, { opacity: 0, ease: 'power2.inOut', repeat: -1, duration: .9 })
  }, [])

  const replaceByCharacters = () =>{
    textRef.current.innerText = ""
    gsap.to(textRef.current, {
      duration: 2,
      text: {
        value: 'This is the new text',
        delimiter: '',
      },
      ease: 'none',
    });
  }

  return (
    <>
      <button onClick={replaceByCharacters}>Type text</button> <br />
      <span ref={textRef}></span><span ref={cursorRef} style={{marginLeft:"1px"}}>|</span>
    </>
  )
}

const toRender = <Cmpt />

export const gsapText = {
  title: 'GSAP TextPlugin',
  date: '2021.11.23',
  tagsArr: ['gsap', 'animation'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Lnk path="https://greensock.com/docs/v3/Plugins/TextPlugin">GSAP TextPlugin</Lnk> can put or replaces text characters or words.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          It is probably the simplest text animation typewriting tool.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      import React, { useEffect, useRef } from 'react';
      import { gsap } from 'gsap';
      import { TextPlugin } from 'gsap/TextPlugin';
      
      gsap.registerPlugin(TextPlugin);
      
      function Cmpt() {
        const textRef = useRef()
        const cursorRef = useRef()
      
        //blink cursor
        useEffect(() => {
          gsap.to(cursorRef.current, { opacity: 0, ease: 'power2.inOut', repeat: -1, duration: .9 })
        }, [])
      
        const replaceByCharacters = () =>{
          textRef.current.innerText = ""
          gsap.to(textRef.current, {
            duration: 2,
            text: {
              value: 'This is the new text',
              delimiter: '',
            },
            ease: 'none',
          });
        }
      
        return (
          <>
            <button onClick={replaceByCharacters}>Type text</button> <br />
            <span ref={textRef}></span><span ref={cursorRef} style={{marginLeft:"1px"}}>|</span>
          </>
        )
      }
      
      const toRender = <Cmpt />
      `,
    },
    {
      type: 'output',
      val: toRender
    },
  ],
};