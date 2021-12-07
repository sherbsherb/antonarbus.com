import React, { useEffect, useRef, useState } from 'react'
import { Lnk } from './../components/Lnk'
import { gsap } from 'gsap'
import { CodeSpan } from '../components/CodeSpan'
import CocaColaSvg from './svgPics/cocaCola.svg'
import randomNumFromTo from './../../../helpers/functions/randomNumFromTo'

const style = {
  width: '200px',
  height: '50px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

function Cmpt1() {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const allEls = useRef([])

  useEffect(() => {
    allEls.current = [ref1.current, ref2.current, ref3.current, ref4.current]
  }, [])

  const animate = () => {
    gsap.set([allEls.current, '#id450, .class564, div span.class498'], {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      backgroundColor: 'transparent',
      borderRadius: '0%',
      border: '1px solid black',
    })
    gsap.to(ref1.current, { duration: 1, x: 300 })
    gsap.to('#id450', { duration: 2, x: 300 })
    gsap.to('.class564', { duration: 3, rotation: 360, scale: 0.5 })
    gsap.to('div span.class498', { duration: 1, opacity: 0.1 })
    gsap.to([ref2.current, ref3.current, ref4.current], {
      duration: 4,
      x: 50,
      y: 20,
      backgroundColor: 'purple',
      borderRadius: '50%',
      border: '5px solid orange',
    })
  }

  return (
    <>
      <div ref={ref1} style={style}>
        ref1
      </div>
      <div id="id450" style={style}>
        #id450
      </div>
      <div className="class564" style={style}>
        .class564
      </div>
      <div className="class564" style={style}>
        .class564
      </div>
      <div style={style}>
        <span className="class498">div span.class498</span>
      </div>
      <div ref={ref2} style={style}>
        ref2
      </div>
      <div ref={ref3} style={style}>
        ref3
      </div>
      <div ref={ref4} style={style}>
        ref4
      </div>

      <button onClick={animate}>Animate</button>
    </>
  )
}
const toRender1 = <Cmpt1 />

function Cmpt2() {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const allEls = useRef([])

  useEffect(
    () =>
      (allEls.current = [
        ref1.current,
        ref2.current,
        ref3.current,
        ref4.current,
      ]),
    [],
  )

  const animate = () => {
    gsap.set(allEls.current, { x: 0 })
    gsap.to(ref1.current, { duration: 2, x: 100, ease: 'bounce.in' })
    gsap.to(ref2.current, { duration: 2, x: 100, ease: 'bounce.out' })
    gsap.to(ref3.current, { duration: 2, x: 100, ease: 'bounce.inOut' })
    gsap.to(ref4.current, { duration: 2, x: 100, ease: 'steps(12)' })
  }

  return (
    <>
      <div ref={ref1} style={style}>
        bounce.in
      </div>
      <div ref={ref2} style={style}>
        bounce.out
      </div>
      <div ref={ref3} style={style}>
        bounce.inOut
      </div>
      <div ref={ref4} style={style}>
        steps(12)
      </div>

      <button onClick={animate}>Animate</button>
    </>
  )
}
const toRender2 = <Cmpt2 />

function Cmpt3() {
  const ref = useRef()
  const animate = () => {
    gsap.set(ref.current, { transformOrigin: '50% 50%', rotation: 0, scale: 2 })
    gsap.to(ref.current, { duration: 3, rotation: 360, scale: 0.1 })
  }
  const animate2 = () => {
    gsap.to(ref.current, { duration: 3, startAt: { scale: 2 }, scale: 0.1 })
  }
  return (
    <>
      {/* eslint-disable-next-line */}
      <img ref={ref} src={CocaColaSvg} style={{ width: '100px' }} />
      <div>
        <button onClick={animate}>Animate with gsap.set()</button>
      </div>
      <div>
        <button onClick={animate2}>Animate with startAt property</button>
      </div>
    </>
  )
}
const toRender3 = <Cmpt3 />

function Cmpt4() {
  const myObject = { count: 0 }
  const [start, setStart] = useState('')
  const [update, setUpdate] = useState('')
  const [complete, setComplete] = useState('')
  const reset = () => {
    setStart('')
    setUpdate('0')
    setComplete('')
    myObject.count = 0
  }
  const animate = () => {
    reset()
    gsap.to(myObject, {
      duration: 5,
      count: 1000,
      onStart: () => setStart('gsap started'),
      onUpdate: () => setUpdate(myObject.count.toString()),
      onComplete: () => setComplete('gsap completed'),
    })
  }

  return (
    <>
      <div>Custom object property animation & callback functions</div>
      <div>{start}</div>
      <div>{update}</div>
      <div>{complete}</div>
      <div>
        <button onClick={animate}>Animate</button>
      </div>
    </>
  )
}
const toRender4 = <Cmpt4 />

function Cmpt5() {
  const ref = useRef()

  const animateFrom = () => {
    gsap.set(ref.current, { transformOrigin: '50% 50%', scale: 1, opacity: 1 })
    gsap.from(ref.current, { duration: 3, scale: 0.1, opacity: 0.1 })
  }
  const animateTo = () => {
    gsap.set(ref.current, { transformOrigin: '50% 50%', scale: 1, opacity: 1 })
    gsap.to(ref.current, { duration: 3, scale: 0.1, opacity: 0.1 })
  }
  const animateFromTo = () => {
    gsap.fromTo(
      ref.current,
      { duration: 3, scale: 0.5, opacity: 0.5 },
      { duration: 3, scale: 1.5, opacity: 1 },
    )
  }

  return (
    <>
      <img ref={ref} src={CocaColaSvg} style={{ width: '100px' }} />{' '}
      {/* eslint-disable-line */}
      <div>
        <button onClick={animateFrom}>AnimateFrom</button>
      </div>
      <div>
        <button onClick={animateTo}>AnimateTo</button>
      </div>
      <div>
        <button onClick={animateFromTo}>AnimateFromTo</button>
      </div>
    </>
  )
}
const toRender5 = <Cmpt5 />

const Circle = React.forwardRef((props, ref) => {
  const style = {
    display: 'inline-block',
    margin: '10px',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: props.clr,
  }
  return <div style={style} className="circle945" ref={ref} {...props} />
})
Circle.displayName = 'Circle custom name'

function Cmpt6() {
  const ref = useRef()
  const circles = useRef()
  useEffect(
    () => (circles.current = ref.current.querySelectorAll('.circle945')),
    [],
  )
  const resetAnimation = () =>
    gsap.set(circles.current, { scale: '.2', opacity: '.2', y: '-50' })
  const animate = () =>
    gsap.to(circles.current, { duration: 1, scale: 1, opacity: 1, y: 0 })
  const animateWithStagger = () =>
    gsap.to(circles.current, {
      duration: 1,
      scale: 1,
      opacity: 1,
      y: 0,
      stagger: 0.25,
    })
  const animateWithFunc = () =>
    gsap.to(circles.current, {
      duration: 1,
      scale: 1,
      opacity: 1,
      y: () => randomNumFromTo(0, 50),
    })

  return (
    <div ref={ref}>
      <Circle clr="grey" />
      <Circle clr="green" />
      <Circle clr="blue" />
      <Circle clr="purple" />
      <Circle clr="orange" />
      <div>
        <button
          onClick={() => {
            resetAnimation()
            animate()
          }}
        >
          Animate
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            resetAnimation()
            animateWithStagger()
          }}
        >
          Animate with stagger
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            resetAnimation()
            animateWithFunc()
          }}
        >
          Animate with callback func
        </button>
      </div>
    </div>
  )
}
const toRender6 = <Cmpt6 />

function Cmpt7() {
  const ref = useRef()
  const circles = useRef()
  useEffect(
    () => (circles.current = ref.current.querySelectorAll('.circle945')),
    [],
  )
  const animate = () =>
    gsap.from(circles.current, {
      duration: 1,
      scale: 0.5,
      opacity: 1,
      y: 'random(-100,100)',
    })

  return (
    <div ref={ref}>
      <Circle clr="grey" />
      <Circle clr="green" />
      <Circle clr="blue" />
      <Circle clr="purple" />
      <Circle clr="orange" />
      <div>
        <button
          onClick={() => {
            animate()
          }}
        >
          Animate
        </button>
      </div>
    </div>
  )
}
const toRender7 = <Cmpt7 />

function Cmpt8() {
  const ref1 = useRef()
  const ref2 = useRef()
  const animate = () => {
    gsap.set([ref1.current, ref2.current], { x: 0 })
    gsap.to([ref1.current, ref2.current], { duration: 1, x: 50 })
    gsap.to([ref2.current], { duration: 1, x: 100, delay: 1 })
  }
  return (
    <>
      <Circle clr="grey" ref={ref1} />
      <Circle clr="green" ref={ref2} />
      <div>
        <button
          onClick={() => {
            animate()
          }}
        >
          Animate
        </button>
      </div>
    </>
  )
}
const toRender8 = <Cmpt8 />

function Cmpt9() {
  const tl = gsap.timeline()
  const ref1 = useRef()
  const ref2 = useRef()
  const animate = () => {
    gsap.set([ref1.current, ref2.current], { x: 0 })
    tl.to([ref1.current, ref2.current], { duration: 1, x: 50 })
    tl.to(ref1.current, { duration: 1, opacity: 0 })
    tl.to(ref2.current, { duration: 1, x: 100 })
  }
  return (
    <>
      <Circle clr="grey" ref={ref1} />
      <Circle clr="green" ref={ref2} />
      <div>
        <button
          onClick={() => {
            animate()
          }}
        >
          Animate
        </button>
      </div>
    </>
  )
}
const toRender9 = <Cmpt9 />

function Cmpt10() {
  const style = { width: '10px', height: '2px', margin: '10px' }
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const tl = gsap.timeline()
  const animate = () => {
    gsap.set([ref1.current, ref2.current, ref3.current], { width: '10px' })
    tl.to([ref1.current, ref2.current, ref3.current], {
      duration: 1,
      width: '100px',
    })
    tl.to(ref1.current, { duration: 1, width: '200px' }, 3)
    tl.to(ref2.current, { duration: 1, width: '200px' }, '+=1')
    tl.to(ref3.current, { duration: 1, width: '200px' }, '-=2')
  }
  return (
    <>
      <div ref={ref1} style={{ ...style, background: 'red' }}></div>
      <div ref={ref2} style={{ ...style, background: 'green' }}></div>
      <div ref={ref3} style={{ ...style, background: 'orange' }}></div>
      <div>
        <button
          onClick={() => {
            animate()
          }}
        >
          Animate
        </button>
      </div>
    </>
  )
}
const toRender10 = <Cmpt10 />

function Cmpt11() {
  const style = { width: '10px', height: '2px', margin: '10px' }
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const tl = gsap.timeline()
  const animate = () => {
    gsap.set([ref1.current, ref2.current, ref3.current], { width: '10px' })
    tl.to([ref1.current, ref2.current, ref3.current], {
      duration: 1,
      width: '100px',
    })
    tl.to(ref1.current, { duration: 1, width: '200px' }, 3)
    tl.to(ref2.current, { duration: 1, width: '200px' }, '+=1')
    tl.addLabel('label', '-=2')
    tl.to(ref3.current, { duration: 1, width: '200px' }, 'label')
  }
  return (
    <>
      <div ref={ref1} style={{ ...style, background: 'red' }}></div>
      <div ref={ref2} style={{ ...style, background: 'green' }}></div>
      <div ref={ref3} style={{ ...style, background: 'orange' }}></div>
      <div>
        <button
          onClick={() => {
            animate()
          }}
        >
          Animate
        </button>
      </div>
    </>
  )
}
const toRender11 = <Cmpt11 />

function Cmpt12() {
  const style = {
    width: '10px',
    height: '2px',
    margin: '10px',
    background: 'red',
  }
  const ref = useRef()

  const animateRepeat = () => {
    const tl = gsap.timeline({ repeat: 2, repeatDelay: 0.5 })
    gsap.set(ref.current, { width: '10px', background: 'red' })
    tl.to(ref.current, { duration: 1, width: '100px' })
    tl.to(ref.current, { duration: 1, width: '200px', background: 'orange' })
  }
  const animateRepeatYoyo = () => {
    const tl = gsap.timeline({ repeat: 2, repeatDelay: 0.5, yoyo: true })
    gsap.set(ref.current, { width: '10px', background: 'red' })
    tl.to(ref.current, { duration: 1, width: '100px' })
    tl.to(ref.current, { duration: 1, width: '200px', background: 'orange' })
  }
  const animateInfinitely = () => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
    gsap.set(ref.current, { width: '10px', background: 'red' })
    tl.to(ref.current, { duration: 1, width: '100px' })
    tl.to(ref.current, { duration: 1, width: '200px', background: 'orange' })
  }

  return (
    <>
      <div ref={ref} style={style}></div>
      <div>
        <button onClick={animateRepeat}>Animate with repeat</button>
      </div>
      <div>
        <button onClick={animateRepeatYoyo}>Animate with repeat & yoyo</button>
      </div>
      <div>
        <button onClick={animateInfinitely}>Animate infinitely</button>
      </div>
    </>
  )
}
const toRender12 = <Cmpt12 />

function Cmpt13() {
  const style = {
    width: '10px',
    height: '2px',
    margin: '10px',
    background: 'red',
  }
  const ref = useRef()
  const tl = gsap.timeline({ paused: true })
  useEffect(() => {
    tl.to(ref.current, { duration: 1, width: '100px' })
    tl.to(ref.current, { duration: 1, width: '200px', background: 'orange' }, 1)
  }, [tl])

  return (
    <>
      <div ref={ref} style={style}></div>
      <button onClick={() => tl.play()}>tl.play()</button>
      <button onClick={() => tl.pause()}>tl.pause()</button>
      <button onClick={() => tl.resume()}>tl.resume()</button>
      <button onClick={() => tl.reverse()}>tl.reverse()</button>
      <button onClick={() => tl.restart()}>tl.restart()</button>
      <button onClick={() => tl.timeScale(5)}>tl.timeScale(5)</button>
      <button onClick={() => tl.timeScale(1)}>tl.timeScale(1)</button>
      <button onClick={() => tl.timeScale(0.5)}>tl.timeScale(0.5)</button>
      <button onClick={() => tl.progress(0.25)}>tl.progress(0.25)</button>
      <button onClick={() => tl.kill()}>tl.kill()</button>
    </>
  )
}
const toRender13 = <Cmpt13 />

function Cmpt14() {
  const style = {
    width: '10px',
    height: '2px',
    margin: '10px',
    background: 'red',
  }
  const ref = useRef()

  const animate = () => {
    const tl = gsap.timeline()
    tl.fromTo(
      ref.current,
      { width: '10px', background: 'red' },
      { duration: 1, width: '100px' },
    ).to(ref.current, { duration: 1, width: '200px', background: 'orange' })
  }

  return (
    <>
      <div ref={ref} style={style}></div>
      <div>
        <button onClick={animate}>Animate</button>
      </div>
    </>
  )
}
const toRender14 = <Cmpt14 />

function Cmpt15() {
  const style = {
    width: '10px',
    height: '2px',
    margin: '10px',
    background: 'red',
  }
  const ref = useRef()

  const animate = () => {
    const tl = gsap.timeline({ defaults: { duration: 1 } })
    tl.fromTo(
      ref.current,
      { width: '10px', background: 'red' },
      { width: '100px' },
    ).to(ref.current, { width: '200px', background: 'orange' })
  }

  return (
    <>
      <div ref={ref} style={style}></div>
      <div>
        <button onClick={animate}>Animate</button>
      </div>
    </>
  )
}
const toRender15 = <Cmpt15 />

function Cmpt16() {
  const ref = useRef()
  const showMessage = (msg1, msg2) => {
    alert(msg1)
    alert(msg2)
  }

  const animate = () => {
    gsap.to(ref.current, {
      duration: 1,
      x: 100,
      opacity: 1,
      onComplete: showMessage,
      onCompleteParams: ['I am A', 'I am B'],
    })
  }

  return (
    <>
      {/* eslint-disable-next-line */}
      <img ref={ref} src={CocaColaSvg} style={{ width: '100px' }} />
      <div>
        <button onClick={animate}>Animate</button>
      </div>
    </>
  )
}
const toRender16 = <Cmpt16 />

function Cmpt17() {
  const ref = useRef()
  let tween
  useEffect(function() {
    /* eslint-disable-next-line */
    tween = gsap.to(ref.current, {
      duration: 10,
      x: 200,
      repeat: -1,
      paused: true,
      immediateRender: false,
      delay: 0.5,
    })
  }, [])

  return (
    <>
      {/* eslint-disable-next-line */}
      <img ref={ref} src={CocaColaSvg} style={{ width: '100px' }} />
      <div>
        <button onClick={() => tween.play()}>tween.play()</button>
      </div>
      <div>getters</div>
      <button onClick={() => alert(tween.time())}>tween.time()</button>
      <button onClick={() => alert(tween.progress())}>tween.progress()</button>
      <button onClick={() => alert(tween.duration())}>tween.duration()</button>
      <button onClick={() => alert(tween.delay())}>tween.delay()</button>
      <button onClick={() => alert(tween.timeScale())}>
        tween.timeScale()
      </button>
      <div>setters</div>
      <button onClick={() => tween.time(parseFloat(prompt('', '5')))}>
        tween.time(arg)
      </button>
      <button onClick={() => tween.progress(parseFloat(prompt('', '0.9')))}>
        tween.progress(arg)
      </button>
      <button onClick={() => tween.duration(parseFloat(prompt('', '1')))}>
        tween.duration(arg)
      </button>
      <button
        onClick={() => tween.delay(parseFloat(prompt('', '1'))).restart(true)}
      >
        tween.delay(arg)
      </button>
      <button onClick={() => tween.timeScale(parseFloat(prompt('', '5')))}>
        tween.timeScale(arg)
      </button>
    </>
  )
}
const toRender17 = <Cmpt17 />

function Cmpt18() {
  const ref = useRef()

  const animate = () => {
    gsap.to(ref.current, {
      duration: 1,
      x: 100,
      opacity: 1,
      onComplete: function() {
        // get first tweened el to the console
        const elem = this.targets()[0]
        alert(`x: ${gsap.getProperty(elem, 'x')}`)
      },
    })
  }

  return (
    <>
      {/* eslint-disable-next-line */}
      <img ref={ref} src={CocaColaSvg} style={{ width: '100px' }} />
      <div>
        <button onClick={animate}>Animate</button>
      </div>
    </>
  )
}
const toRender18 = <Cmpt18 />

function Cmpt19() {
  const ref = useRef()

  const animate = () => {
    gsap.fromTo(
      ref.current.children,
      {
        opacity: 1,
      },
      {
        opacity: function(i, el, els) {
          console.log(i, el, els)
          return 1 - 0.1 * i
        },
        stagger: 0.25,
      },
    )
  }

  return (
    <>
      <div ref={ref}>
        <span>h</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
        <span> </span>
        <span>g</span>
        <span>s</span>
        <span>a</span>
        <span>p</span>
      </div>
      <div>
        <button onClick={animate}>Animate</button>
      </div>
    </>
  )
}
const toRender19 = <Cmpt19 />

export const gsapBasics = {
  title: 'GSAP basics',
  date: '2021.11.15',
  tagsArr: ['react', 'animation', 'gsap'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Main aspects of GSAP are taken from the{' '}
          <Lnk path="https://greensock.com/get-started/">guideline</Lnk>.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          All properties in one{' '}
          <Lnk path="https://greensock.com/cheatsheet/">cheatsheet</Lnk>.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <b>Target elements.</b> We can access elements in gsap by reference &
          query selector. We also can have an array of target elements.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          GSAP converts parameters into inline style parameters and animate
          them.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
import React, { useEffect, useRef, useState } from 'react';
import { Lnk } from './../components/Lnk';
import { gsap } from "gsap";
import { CodeSpan } from '../components/CodeSpan';
import CocaColaSvg from './svgPics/cocaCola.svg';
import TelegramSvg from './svgPics/telegram.svg';
import randomNumFromTo from './../../../helpers/functions/randomNumFromTo'

const style = {width: '200px', height: '50px', margin: '10px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center'}

function Cmpt1() {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const allEls = useRef([]);

  useEffect(() => allEls.current = [
    ref1.current, ref2.current, ref3.current, ref4.current
  ], [])
  
  const animate = () => {
    gsap.set([allEls.current, '#id450, .class564, div span.class498'], { 
      x: 0, y: 0, scale: 1, opacity: 1, backgroundColor: "transparent", 
      borderRadius: '0%', border: "1px solid black"
    })
    gsap.to(ref1.current, { duration: 1, x: 300 });
    gsap.to('#id450', { duration: 2, x: 300 });
    gsap.to('.class564', { duration: 3, rotation: 360, scale: 0.5 });
    gsap.to('div span.class498', { duration: 1, opacity: 0.1 });
    gsap.to([ref2.current, ref3.current, ref4.current], {
      duration: 4, x: 50, y: 20, backgroundColor: 'purple', 
      borderRadius: '50%', border: "5px solid orange"
    });
  };

  return (
    <>
      <div ref={ref1} style={style}>ref1</div>
      <div id="id450" style={style}>#id450</div>
      <div className="class564" style={style}>.class564</div>
      <div className="class564" style={style}>.class564</div>
      <div style={style}><span className="class498">div span.class498</span></div>
      <div ref={ref2} style={style}>ref2</div>
      <div ref={ref3} style={style}>ref3</div>
      <div ref={ref4} style={style}>ref4</div>

      <button onClick={animate}>Animate</button>
    </>
  );
}
      `,
    },
    {
      type: 'output',
      val: toRender1,
    },
    {
      type: 'text',
      val: (
        <>
          <b>Ease functions</b> can be applied. All sets of ease can be found{' '}
          <Lnk path="https://greensock.com/ease-visualizer/">here</Lnk>.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt2() {
        const ref1 = useRef()
        const ref2 = useRef()
        const ref3 = useRef()
        const ref4 = useRef()
        const allEls = useRef([]);
      
        useEffect(() => allEls.current = [
          ref1.current, ref2.current, ref3.current, ref4.current
        ], [])
      
        const animate = () => {
          gsap.set(allEls.current, { x: 0 })
          gsap.to(ref1.current, { duration: 2, x: 100, ease: 'bounce.in' });
          gsap.to(ref2.current, { duration: 2, x: 100, ease: 'bounce.out' });
          gsap.to(ref3.current, { duration: 2, x: 100, ease: 'bounce.inOut' });
          gsap.to(ref4.current, { duration: 2, x: 100, ease: 'steps(12)' });
        };
      
        return (
          <>
            <div ref={ref1} style={style}>bounce.in</div>
            <div ref={ref2} style={style}>bounce.out</div>
            <div ref={ref3} style={style}>bounce.inOut</div>
            <div ref={ref4} style={style}>steps(12)</div>
      
            <button onClick={animate}>Animate</button>
          </>
        );
      }
      const toRender2 = <Cmpt2 />;  
      `,
    },
    {
      type: 'output',
      val: toRender2,
    },
    {
      type: 'text',
      val: (
        <>
          <b>
            <CodeSpan>{'gsap.set(target, propertiesObj)'}</CodeSpan>
          </b>{' '}
          can be used to set initial state{' '}
          <Lnk path="https://greensock.com/docs/v3/GSAP/gsap.set">
            properties
          </Lnk>
          .
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Also <CodeSpan>startAt</CodeSpan> property of a tween can set initial
          state.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt3() {
        const ref = useRef()
        const animate = () => {
          gsap.set(ref.current, { transformOrigin: '50% 50%', rotation: 0, scale: 2 });
          gsap.to(ref.current, { duration: 3, rotation: 360, scale: 0.1 });
        };
        const animate2 = () => {
          gsap.to(ref.current, { duration: 3, startAt: { scale: 2 }, scale: 0.1 });
        };
        return (
          <>
            <img ref={ref} src={CocaColaSvg} style={{width: '100px'}} /> 
            <div><button onClick={animate}>Animate with gsap.set()</button></div>
            <div><button onClick={animate2}>Animate with startAt property</button></div>
          </>
        );
      }
      const toRender3 = <Cmpt3 />;
      `,
    },
    {
      type: 'output',
      val: toRender3,
    },
    {
      type: 'text',
      val: (
        <>
          <b>Custom object</b> property can be animated with gsap. We may pass
          custom callbacks into gsap properties <CodeSpan>onStart</CodeSpan>,{' '}
          <CodeSpan>onUpdate</CodeSpan>, <CodeSpan>onComplete</CodeSpan>,{' '}
          <CodeSpan>onRepeat</CodeSpan>, <CodeSpan>onReverseComplete</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt4() {
        const myObject = { count: 0 }
        const [start, setStart] = useState('')
        const [update, setUpdate] = useState('')
        const [complete, setComplete] = useState('')
        const reset = () => {
          setStart('')
          setUpdate('0')
          setComplete('')
          myObject.count = 0
        }
        const animate = () => {
          reset();
          gsap.to(myObject, {
            duration: 5,
            count: 1000,
            onStart: () => setStart('gsap started'),
            onUpdate: () => setUpdate(myObject.count.toString()),
            onComplete: () => setComplete('gsap completed'),
          });
        };
      
        return (
          <>
            <div>{start}</div>
            <div>{update}</div>
            <div>{complete}</div>
            <div><button onClick={animate}>Animate</button></div>
          </>
        );
      }
      const toRender4 = <Cmpt4 />;   
      `,
    },
    {
      type: 'output',
      val: toRender4,
    },
    {
      type: 'text',
      val: (
        <>
          <b>
            <CodeSpan>gsap.to()</CodeSpan> vs <CodeSpan>gsap.from()</CodeSpan>{' '}
            vs <CodeSpan>gsap.fromTo()</CodeSpan>
          </b>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt5() {
        const ref = useRef()
      
        const animateFrom = () => {
          gsap.set(ref.current, { transformOrigin: "50% 50%", scale: 1, opacity: 1 })
          gsap.from(ref.current, { duration: 3, scale: .1, opacity: .1 });
        }
        const animateTo = () => {
          gsap.set(ref.current, { transformOrigin: "50% 50%", scale: 1, opacity: 1 })
          gsap.to(ref.current, { duration: 3, scale: .1, opacity: .1 });
        }
        const animateFromTo = () => {
          gsap.fromTo(
            ref.current, 
            { duration: 3, scale: .5, opacity: .5 },
            { duration: 3, scale: 1.5, opacity: 1 }
          );
        }
      
        return (
          <>
            <img ref={ref} src={CocaColaSvg} style={{width: '100px'}} />
            <div><button onClick={animateFrom}>AnimateFrom</button></div>
            <div><button onClick={animateTo}>AnimateTo</button></div>
            <div><button onClick={animateFromTo}>AnimateFromTo</button></div>
          </>
        );
      }
      const toRender5 = <Cmpt5 />;    
      `,
    },
    {
      type: 'output',
      val: toRender5,
    },
    {
      type: 'text',
      val: (
        <>
          <b>
            <CodeSpan>stagger</CodeSpan>
          </b>{' '}
          property puts a delay between animations.
          <Lnk path="https://greensock.com/docs/v3/Staggers">
            {' '}
            Advanced
          </Lnk>{' '}
          stagger object can be applied.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We also can set a property with a callback function instead of a fixed
          value.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
const Circle = React.forwardRef((props, ref) => {
  const style = { display: 'inline-block', margin: '10px', width: '30px', height: '30px', borderRadius: '50%', background: props.clr }
  return <div style={style} className="circle945" ref={ref} {...props}/>
})
function Cmpt6() {
  const ref = useRef()
  const circles = useRef()
  useEffect(() => circles.current = ref.current.querySelectorAll('.circle945'), [])
  const resetAnimation = () =>  gsap.set(circles.current, {scale: '.2', opacity: '.2', y: '-50'})
  const animate = () => gsap.to(circles.current, {duration: 1, scale: 1, opacity: 1, y: 0})
  const animateWithStagger = () => gsap.to(circles.current, {duration: 1, scale: 1, opacity: 1, y: 0, stagger: .25})
  const animateWithFunc = () => gsap.to(circles.current, {duration: 1, scale: 1, opacity: 1, y: () => randomNumFromTo(0, 50)})

  return (
    <div ref={ref}>
      <Circle clr="grey"/><Circle clr="green"/><Circle clr="blue"/><Circle clr="purple"/><Circle clr="orange"/>
      <div><button onClick={() => { resetAnimation(); animate(); }} >Animate</button></div>
      <div><button onClick={() => { resetAnimation(); animateWithStagger(); }}>Animate with stagger</button></div>
      <div><button onClick={() => { resetAnimation(); animateWithFunc(); }} >Animate with callback func</button></div>
    </div>
  );
}
const toRender6 = <Cmpt6 />;     
      `,
    },
    {
      type: 'output',
      val: toRender6,
    },
    {
      type: 'text',
      val: (
        <>
          <b>random</b> property exists in string form in GSAP{' '}
          <CodeSpan>'random(-200, 200)'</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt7() {
        const ref = useRef()
        const circles = useRef()
        useEffect(() => circles.current = ref.current.querySelectorAll('.circle945'), [])
        const animate = () => gsap.from(circles.current, {duration: 1, scale: .5, opacity: 1, y: "random(-100,100)"})
      
        return (
          <div ref={ref}>
            <Circle clr="grey"/><Circle clr="green"/><Circle clr="blue"/><Circle clr="purple"/><Circle clr="orange"/>
            <div><button onClick={() => { animate(); }} >Animate</button></div>
          </div>
        );
      }
      const toRender7 = <Cmpt7 />;     
      `,
    },
    {
      type: 'output',
      val: toRender7,
    },
    {
      type: 'text',
      val: (
        <>
          GSAP has a <b>delay</b> property to control the start time of a tween.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt8() {
        const ref1 = useRef()
        const ref2 = useRef()
        const animate = () => {
          gsap.set([ref1.current, ref2.current], {x: 0})
          gsap.to([ref1.current, ref2.current], {duration: 1, x: 50})
          gsap.to([ref2.current], {duration: 1, x: 100, delay: 1})
        }
        return (
          <>
            <Circle clr="grey" ref={ref1}/><Circle clr="green" ref={ref2}/>
            <div><button onClick={() => { animate(); }} >Animate</button></div>
          </>
        );
      }
      const toRender8 = <Cmpt8 />;     
      `,
    },
    {
      type: 'output',
      val: toRender8,
    },
    {
      type: 'text',
      val: (
        <>
          <b>Timeline.</b> We can put different animations on a single timeline
          and control them in whole. Timeline can be created with{' '}
          <CodeSpan>gsap.timeline()</CodeSpan>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Tweens are added to the end of the timeline, so the second tween
          starts on the end of the first tween. No delays are needed anymore.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          With a delay we can shift our tweens on the timeline, but better to
          use a third{' '}
          <Lnk path="https://greensock.com/position-parameter/">
            position parameter
          </Lnk>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt9() {
        const tl = gsap.timeline()
        const ref1 = useRef()
        const ref2 = useRef()
        const animate = () => {
          gsap.set([ref1.current, ref2.current], {x: 0})
          tl.to([ref1.current, ref2.current], {duration: 1, x: 50})
          tl.to(ref1.current, {duration: 1, opacity: 0})
          tl.to(ref2.current, {duration: 1, x: 100})
        }
        return (
          <>
            <Circle clr="grey" ref={ref1}/><Circle clr="green" ref={ref2}/>
            <div><button onClick={() => { animate(); }} >Animate</button></div>
          </>
        );
      }
      const toRender9 = <Cmpt9 />;     
      `,
    },
    {
      type: 'output',
      val: toRender9,
    },
    {
      type: 'text',
      val: (
        <>
          <b>Position parameter</b> can be an absolute or relative value.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt10() {
        const style = {width: "10px", height: "2px", margin: "10px"}
        const ref1 = useRef()
        const ref2 = useRef()
        const ref3 = useRef()
        const tl = gsap.timeline()
        const animate = () => {
          gsap.set([ref1.current, ref2.current, ref3.current], {width: "10px"})
          tl.to([ref1.current, ref2.current, ref3.current], {duration: 1, width: "100px"})
          tl.to(ref1.current, {duration: 1, width: "200px"}, 3)
          tl.to(ref2.current, {duration: 1, width: "200px"}, "+=1")
          tl.to(ref3.current, {duration: 1, width: "200px"}, "-=2")
        }
        return (
          <>
            <div ref={ref1} style={{...style, background: "red"}}></div> 
            <div ref={ref2} style={{...style, background: "green"}}></div>
            <div ref={ref3} style={{...style, background: "orange"}}></div>
            <div><button onClick={() => { animate(); }} >Animate</button></div>
          </>
        );
      }
      const toRender10 = <Cmpt10 />;     
      `,
    },
    {
      type: 'output',
      val: toRender10,
    },
    {
      type: 'text',
      val: (
        <>
          <b>Label.</b> Instead of using a <i>position</i> parameter we can
          refer to a specific tween by creating a <i>label</i> and position our
          tween at a label.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          To create a label use a{' '}
          <CodeSpan>tl.addLabel('name', '+=1')</CodeSpan> method.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt11() {
        const style = {width: "10px", height: "2px", margin: "10px"}
        const ref1 = useRef()
        const ref2 = useRef()
        const ref3 = useRef()
        const tl = gsap.timeline()
        const animate = () => {
          gsap.set([ref1.current, ref2.current, ref3.current], {width: "10px"})
          tl.to([ref1.current, ref2.current, ref3.current], {duration: 1, width: "100px"})
          tl.to(ref1.current, {duration: 1, width: "200px"}, 3)
          tl.to(ref2.current, {duration: 1, width: "200px"}, "+=1")
          tl.addLabel('label', "-=2")
          tl.to(ref3.current, {duration: 1, width: "200px"}, "label")
        }
        return (
          <>
            <div ref={ref1} style={{...style, background: "red"}}></div> 
            <div ref={ref2} style={{...style, background: "green"}}></div>
            <div ref={ref3} style={{...style, background: "orange"}}></div>
            <div><button onClick={() => { animate(); }} >Animate</button></div>
          </>
        );
      }
      const toRender11 = <Cmpt11 />;     
      `,
    },
    {
      type: 'output',
      val: toRender11,
    },
    {
      type: 'text',
      val: (
        <>
          <b>Repeat.</b> Tween or timeline can be repeated with a delay, yoyoed
          or infinite.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt12() {
        const style = {width: "10px", height: "2px", margin: "10px", background: 'red'}
        const ref = useRef()
        
        const animateRepeat = () => {
          const tl = gsap.timeline({repeat: 2, repeatDelay: .5})
          gsap.set(ref.current, {width: "10px",background: 'red'})
          tl.to(ref.current, {duration: 1, width: "100px"})
          tl.to(ref.current, {duration: 1, width: "200px", background: "orange"})
        }
        const animateRepeatYoyo = () => {
          const tl = gsap.timeline({repeat: 2, repeatDelay: .5, yoyo: true})
          gsap.set(ref.current, {width: "10px",background: 'red'})
          tl.to(ref.current, {duration: 1, width: "100px"})
          tl.to(ref.current, {duration: 1, width: "200px", background: "orange"})
        }
        const animateInfinitely = () => {
          const tl = gsap.timeline({repeat: -1, repeatDelay: .5})
          gsap.set(ref.current, {width: "10px",background: 'red'})
          tl.to(ref.current, {duration: 1, width: "100px"})
          tl.to(ref.current, {duration: 1, width: "200px", background: "orange"})
        }
      
        return (
          <>
            <div ref={ref} style={style}></div> 
            <div><button onClick={animateRepeat} >Animate with repeat</button></div>
            <div><button onClick={animateRepeatYoyo} >Animate with repeat & yoyo</button></div>
            <div><button onClick={animateInfinitely} >Animate infinitely</button></div>
          </>
        );
      }
      const toRender12 = <Cmpt12 />;     
      `,
    },
    {
      type: 'output',
      val: toRender12,
    },
    {
      type: 'text',
      val: (
        <>
          <b>Control.</b> Timeline or tween can be controlled with methods{' '}
          <CodeSpan>play()</CodeSpan>, <CodeSpan>pause()</CodeSpan>,{' '}
          <CodeSpan>resume()</CodeSpan>, <CodeSpan>reverse()</CodeSpan>,{' '}
          <CodeSpan>restart()</CodeSpan>, <CodeSpan>timeScale()</CodeSpan>,{' '}
          <CodeSpan>progress()</CodeSpan>, <CodeSpan>kill()</CodeSpan>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Note that timeline is initiated in a paused state{' '}
          <CodeSpan>{'tl = gsap.timeline({paused: true})'}</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt13() {
        const style = {width: "10px", height: "2px", margin: "10px", background: 'red'}
        const ref = useRef()
        const tl = gsap.timeline({paused: true})
        useEffect(() => {
          tl.to(ref.current, {duration: 1, width: "100px"})
          tl.to(ref.current, {duration: 1, width: "200px", background: "orange"}, 1)
        },[tl] )
      
        return (
          <>
            <div ref={ref} style={style}></div> 
            <button onClick={() => tl.play()} >tl.play()</button>
            <button onClick={() => tl.pause()} >tl.pause()</button>
            <button onClick={() => tl.resume()} >tl.resume()</button>
            <button onClick={() => tl.reverse()} >tl.reverse()</button>
            <button onClick={() => tl.restart()} >tl.restart()</button>
            <button onClick={() => tl.timeScale(5)} >tl.timeScale(5)</button>
            <button onClick={() => tl.timeScale(1)} >tl.timeScale(1)</button>
            <button onClick={() => tl.timeScale(0.5)} >tl.timeScale(0.5)</button>
            <button onClick={() => tl.progress(0.25)} >tl.progress(0.25)</button>
            <button onClick={() => tl.kill()} >tl.kill()</button>
          </>
        );
      }
      const toRender13 = <Cmpt13 />;
      `,
    },
    {
      type: 'output',
      val: toRender13,
    },
    {
      type: 'text',
      val: (
        <>
          <b>Chaining.</b> Methods of timeline can be chained.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt14() {
        const style = {width: "10px", height: "2px", margin: "10px", background: 'red'}
        const ref = useRef()
        
        const animate = () => {
          const tl = gsap.timeline()
          gsap.set(ref.current, {width: "10px",background: 'red'})
          tl
            .fromTo(ref.current, {width: "10px",background: 'red'}, {duration: 1, width: "100px"})
            .to(ref.current, {duration: 1, width: "200px", background: "orange"})
        }
      
        return (
          <>
            <div ref={ref} style={style}></div> 
            <div><button onClick={animate} >Animate</button></div>
          </>
        );
      }
      const toRender14 = <Cmpt14 />;   
      `,
    },
    {
      type: 'output',
      val: toRender14,
    },
    {
      type: 'text',
      val: (
        <>
          <b>Defaults.</b> Repetitive properties of tweens in a timeline can be
          centrally assigned to defaults{' '}
          <CodeSpan>
            {'tl = gsap.timeline({ defaults: { duration: 1 } })'}
          </CodeSpan>
          .
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt15() {
        const style = {width: "10px", height: "2px", margin: "10px", background: 'red'}
        const ref = useRef()
        
        const animate = () => {
          const tl = gsap.timeline({ defaults: { duration: 1 } })
          tl
            .fromTo(ref.current, {width: "10px",background: 'red'}, {width: "100px"})
            .to(ref.current, {width: "200px", background: "orange"})
        }
      
        return (
          <>
            <div ref={ref} style={style}></div> 
            <div><button onClick={animate} >Animate</button></div>
          </>
        );
      }
      const toRender15 = <Cmpt15 />;
      `,
    },
    {
      type: 'output',
      val: toRender15,
    },
    {
      type: 'text',
      val: (
        <>
          <b>Callback parameters.</b> Parameters to a callback function should
          be passed in an array in a special properties:
          <CodeSpan>onStartParams: [params]</CodeSpan> ,
          <CodeSpan>onCompleteParams: [params]</CodeSpan> ,
          <CodeSpan>onRepeatParams: [params]</CodeSpan> ,
          <CodeSpan>onReverseCompleteParams: [params]</CodeSpan> ,
          <CodeSpan>onUpdateParams: [params]</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt16() {
        const ref = useRef()
        const showMessage = (msg1, msg2) => {
          alert(msg1)
          alert(msg2)
        }
      
        const animate = () => {
          gsap.to(ref1.current, { 
            duration: 1, 
            x: 100, 
            onComplete: showMessage, 
            onCompleteParams: ["I am A", "I am B"] 
          });
        };
      
        return (
          <>
            <img ref={ref1} src={CocaColaSvg} style={{width: '100px'}} /> 
            <div><button onClick={animate}>Animate</button></div>
          </>
        );
      }
      const toRender16 = <Cmpt16 />;
      `,
    },
    {
      type: 'output',
      val: toRender16,
    },
    {
      type: 'text',
      val: (
        <>
          <b>Getters & setters.</b> With some methods like{' '}
          <CodeSpan>time()</CodeSpan>, <CodeSpan>progress()</CodeSpan>,{' '}
          <CodeSpan>duration()</CodeSpan>, <CodeSpan>delay()</CodeSpan>,{' '}
          <CodeSpan>timeScale()</CodeSpan> we can both get and set values.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt17() {
        const ref = useRef()
        let tween
        useEffect(function() {
          tween = gsap.to(
            ref.current, 
            {duration: 10, x: 200, repeat: -1, paused: true, immediateRender: false, delay:.5 }
          );
        }, [])
      
        return (
          <>
            <img ref={ref} src={CocaColaSvg} style={{width: '100px'}} /> 
            <div><button onClick={() => tween.play()}>tween.play()</button></div>
            <div>getters</div>
            <button onClick={() => alert(tween.time())}>tween.time()</button>
            <button onClick={() => alert(tween.progress())}>tween.progress()</button>
            <button onClick={() => alert(tween.duration())}>tween.duration()</button>
            <button onClick={() => alert(tween.delay())}>tween.delay()</button>
            <button onClick={() => alert(tween.timeScale())}>tween.timeScale()</button>
            <div>setters</div>
            <button onClick={() => tween.time(parseFloat(prompt('', '5')))}>tween.time(arg)</button>
            <button onClick={() => tween.progress(parseFloat(prompt('', '0.9')))}>tween.progress(arg)</button>
            <button onClick={() => tween.duration(parseFloat(prompt('', '1')))}>tween.duration(arg)</button>
            <button onClick={() => tween.delay(parseFloat(prompt('', '1'))).restart(true)}>tween.delay(arg)</button>
            <button onClick={() => tween.timeScale(parseFloat(prompt('', '5')))}>tween.timeScale(arg)</button>
          </>
        );
      }
      const toRender17 = <Cmpt17 />;
      `,
    },
    {
      type: 'output',
      val: toRender17,
    },
    {
      type: 'text',
      val: (
        <>
          <b>Property value of animated element </b> can be taken within a
          non-arrow callback function accessing{' '}
          <CodeSpan>this.targets()</CodeSpan>.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          To get a current property at any point of time we may use{' '}
          <CodeSpan>gsap.getProperty(elem, "x")</CodeSpan> method.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt18() {
        const ref = useRef()
      
        const animate = () => {
          gsap.to(ref.current, { 
            duration: 1, 
            x: 100,
            opacity: 1,
            onComplete: function() {
              // get first tweened el to the console
              let elem = this.targets()[0];
              alert(\`x: \${gsap.getProperty(elem, "x")}\`)
            } 
          });
        };
      
        return (
          <>
            <img ref={ref} src={CocaColaSvg} style={{width: '100px'}} /> 
            <div><button onClick={animate}>Animate</button></div>
          </>
        );
      }
      const toRender18 = <Cmpt18 />;
      `,
    },
    {
      type: 'output',
      val: toRender18,
    },
    {
      type: 'text',
      val: (
        <>
          May use a <b>function</b> instead of a number/string for almost any
          property. Func will be called for each target. Returned value by the
          function will be set as the property value.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          GSAP will pass the following parameters into the function: - index -
          element being affected - An array of all elements affected by the
          tween
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function Cmpt19() {
        const ref = useRef()
      
        const animate = () => {
          gsap.fromTo(
            ref.current.children, 
            { 
              opacity: 1,
            },
            { 
              opacity: function(i,el,els) {
                console.log(i, el, els)
                return 1 - 0.1*i
              },
              stagger: .25
            },
          );
        };
      
        return (
          <>
            <div ref={ref}> 
              <span>h</span><span>e</span><span>l</span><span>l</span><span>o</span><span>{' '}</span>
              <span>g</span><span>s</span><span>a</span><span>p</span>
            </div>
            <div><button onClick={animate}>Animate</button></div>
          </>
        );
      }
      const toRender19 = <Cmpt19 />;
      `,
    },
    {
      type: 'output',
      val: toRender19,
    },
  ],
}
