import React, { useEffect, useRef } from 'react';
import { Lnk } from '../components/Lnk';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

function Cmpt() {
  const ref = useRef()
  const ref1 = useRef()

  useEffect(() => {
    const container = ref.current
    const box1 = ref1.current
    gsap.to(box1, {
      scrollTrigger: {
        scroller: container,
        trigger: box1,
        start: "center 20%", // 20% of scroller hits center of box
        end: "+=400", // 400px from the start
        markers: true,
        horizontal: false,
        scrub: 1, // links animation directly to scrollbar progress with 1s delay
        pin: box1, // stick box to starting position while the rest scrolling 
        onEnter: () => console.log('onEnter'),
        onEnterBack: () => console.log('onEnterBack'),
        onLeave: () => console.log('onLeave'),
        onLeaveBack: () => console.log('onLeaveBack'),
        onRefresh: () => console.log('onRefresh'),
        onUpdate: () => console.log('onUpdate'),
        onScrubComplete: () => console.log('onScrubComplete'),
        onSnapComplete: () => console.log('onSnapComplete'),
        onToggle: () => console.log('onToggle'),
        once: false,

      },
      duration: 5, // not applied here 'coz scrub is enabled
      rotate: 360*2,
      x: 300,
    });
  }, [])

  return (
    <div style={{overflow: "auto", height: "300px"}} ref={ref}>
      Scroll down
      <Box top={100} ref={ref1}>box1</Box>
      <Box top={350}>box2</Box>
    </div>
  )
}

const Box = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  top: ${props => props.top}px;
`

const toRender = <Cmpt />

export const gsapScrollTrigger = {
  title: 'GSAP ScrollTrigger plugin',
  date: '2021.11.23',
  tagsArr: ['gsap', 'animation'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Lnk path="https://greensock.com/docs/v3/Plugins/ScrollTrigger">GSAP ScrollTrigger</Lnk> plugin animates anything on scroll.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useEffect, useRef } from 'react';
        import { gsap } from 'gsap';
        import { ScrollTrigger } from 'gsap/ScrollTrigger';
        import styled from 'styled-components';

        gsap.registerPlugin(ScrollTrigger);

        function Cmpt() {
          const ref = useRef()
          const ref1 = useRef()

          useEffect(() => {
            const container = ref.current
            const box1 = ref1.current
            gsap.to(box1, {
              scrollTrigger: {
                scroller: container,
                trigger: box1,
                start: "center 20%", // 20% of scroller hits center of box
                end: "+=400", // 400px from the start
                markers: true,
                horizontal: false,
                scrub: 1, // links animation directly to scrollbar progress with 1s delay
                pin: box1, // stick box to starting position while the rest scrolling 
                onEnter: () => console.log('onEnter'),
                onEnterBack: () => console.log('onEnterBack'),
                onLeave: () => console.log('onLeave'),
                onLeaveBack: () => console.log('onLeaveBack'),
                onRefresh: () => console.log('onRefresh'),
                onUpdate: () => console.log('onUpdate'),
                onScrubComplete: () => console.log('onScrubComplete'),
                onSnapComplete: () => console.log('onSnapComplete'),
                onToggle: () => console.log('onToggle'),
                once: false,

              },
              duration: 5, // not applied here 'coz scrub is enabled
              rotate: 360*2,
              x: 300,
            });
          }, [])

          return (
            <div style={{overflow: "auto", height: "300px"}} ref={ref}>
              Scroll down
              <Box top={100} ref={ref1}>box1</Box>
              <Box top={250}>box2</Box>
            </div>
          )
        }

        const Box = styled.div \`
          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          border: 1px solid black;
          top: \${props => props.top}px;
        \`

        const toRender = <Cmpt />
      `,
    },
    {
      type: 'output',
      val: toRender
    },
  ],
};