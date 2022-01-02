import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Lnk } from '../components/Lnk'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

gsap.registerPlugin(MotionPathPlugin)
const path = [{ x: 30, y: 100 }, { x: 100, y: 150 }, { x: 200, y: 100 }, { x: 300, y: 50 }, { x: 400, y: 100 }]

function Cmpt() {
  const ref = useRef()

  useEffect(() => {
    gsap.set(ref.current, { x: 30, y: 100, xPercent: -50, yPercent: -50, transformOrigin: '50% 50%' })
  }, [])

  function animate() {
    // gsap.set(ref.current, {x: 30, y: 100})
    gsap.set(ref.current, { x: 30, y: 100, xPercent: -50, yPercent: -50, transformOrigin: '50% 50%' })
    gsap.to(ref.current, {
      motionPath: {
        path: path,
        // align: path,
        autoRotate: true,
        // alignOrigin: [0.5, 0.5],
        start: 0,
        end: 1,
        curviness: 0.8,
      },
      transformOrigin: '50% 50%',
      duration: 5,
      immediateRender: true,
      ease: 'linear'
    })
  }

  return (
    <div style={{ height: '200px', position: 'relative' }}>
      <Div ref={ref}/>
      <div><button onClick={animate}>Animate</button></div>
      {path.map((o, i) => <Coords key={`cords ${i}`} style={{ top: o.y, left: o.x }}/>)}
    </div>
  )
}

function Coords(props) {
  return <Dot style={props.style} />
}

const toRender = <Cmpt />

const Div = styled.div`
  display: inline-block;
  height: 20px;
  width: 40px;
  background-color: #0080005c;
  /* border-radius: 50%; */
  border: 1px solid grey;
  position: absolute;
  
`
const Dot = styled.div`
  display: inline-block;
  height: 5px;
  width: 5px;
  border: 1px solid grey;
  border-radius: 50%;
  position: absolute;
  background-color: red;
`

export const gsapMotionPathPlugin = {
  title: 'GSAP MotionPathPlugin',
  date: '2021.11.22',
  tagsArr: ['gsap', 'animation'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          With <Lnk path="https://greensock.com/docs/v3/Plugins/MotionPathPlugin">GSAP MotionPathPlugin</Lnk> we can move an element along a curve.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useEffect, useRef } from 'react';
        import styled from 'styled-components';
        import { gsap } from 'gsap';
        import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

        gsap.registerPlugin(MotionPathPlugin);
        const path = [{x:0, y:100}, {x:100, y: 150}, {x:200, y:100}, {x:300, y:50}, {x:400, y:100}]

        function Cmpt() {
          const ref = useRef()
          
          useEffect(() => {
            gsap.set(ref.current, {x: 30, y: 100, xPercent:-50, yPercent:-50, transformOrigin: "50% 50%"})
          }, [])
          

          function animate() {
            // gsap.set(ref.current, {x: 30, y: 100})
            gsap.set(ref.current, {x: 30, y: 100, xPercent:-50, yPercent:-50, transformOrigin: "50% 50%"})
            gsap.to(ref.current, {
              motionPath: {
                path: path,
                // align: path,
                autoRotate: true,
                // alignOrigin: [0.5, 0.5],
                start: 0, 
                end: 1,
                curviness: 0.8,
              },
              transformOrigin: "50% 50%",
              duration: 5,
              ease: "linear"
            });
          }

          return (
            <div style={{height: "200px", position: "relative"}}>
              <Div ref={ref}/>
              <div><button onClick={animate}>Animate</button></div>
              {path.map(o => <Coords style={{top: o.y, left: o.x}}/>)}
            </div>
          )
        }

        function Coords(props) {
          return <Dot style={props.style} />
        }

        const toRender = <Cmpt />

        const Div = styled.div \`
          display: inline-block;
          height: 20px;
          width: 40px;
          background-color: #0080005c;
          /* border-radius: 50%; */
          border: 1px solid grey;
          position: absolute;
          
        \`
        const Dot = styled.div \`
          display: inline-block;
          height: 5px;
          width: 5px;
          border: 1px solid grey;
          border-radius: 50%;
          position: absolute;
          background-color: red;
        \`
      `,
    },
    {
      type: 'output',
      val: toRender
    },
    {
      type: 'text',
      val: (
        <>
          There is a great <Lnk path="https://greensock.com/docs/v3/Plugins/MotionPathHelper">MotionPathHelper</Lnk> tool to create a path curve, but unfortunately it is a paid tool.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          But we can create one on official <Lnk path="https://codepen.io/GreenSock/pen/aYYOdN">gsap codepen</Lnk> where all plugins are accessible.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Here is my simplified curve on <Lnk path="https://codepen.io/sherbsherb/pen/LYjoRNp">codepen</Lnk>.
        </>
      ),
    },
  ],
}
