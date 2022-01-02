import styled from 'styled-components'
import { CodeSpan } from '../../components/CodeSpan'
import img from './linearGradient.png'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'

const style = { height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }

function Cmpt1() {
  return (
    <Div1 style={style}>
      linear-gradient(red, green)
    </Div1>
  )
}
const Div1 = styled.div`
  background: linear-gradient(red, green);
`
const toRender1 = <Cmpt1 />

function Cmpt2() {
  return (
    <Div2 style={style}>
      linear-gradient(to top right, red, green)
    </Div2>
  )
}
const Div2 = styled.div`
  background: linear-gradient(to top right, red, green);
`
const toRender2 = <Cmpt2 />

function Cmpt3() {
  return (
    <Div3 style={style}>
      linear-gradient(0deg, red, green)
    </Div3>
  )
}
const Div3 = styled.div`
  background: linear-gradient(0deg, red, green);
`
const toRender3 = <Cmpt3 />

function Cmpt4() {
  return (
    <Div4 style={style}>
      linear-gradient(45deg, red, green)
    </Div4>
  )
}
const Div4 = styled.div`
  background: linear-gradient(45deg, red, green);
`
const toRender4 = <Cmpt4 />

function Cmpt5() {
  return (
    <Div5 style={style}>
      linear-gradient(red, white, green)
    </Div5>
  )
}
const Div5 = styled.div`
  background: linear-gradient(red, white, green);
`
const toRender5 = <Cmpt5 />

function Cmpt6() {
  return (
    <Div6 style={style}>
      linear-gradient(to right, red 0%, white 10%, green 50%)
    </Div6>
  )
}
const Div6 = styled.div`
  background: linear-gradient(to right, red 0%, white 10%, green 50%);
`
const toRender6 = <Cmpt6 />

function Cmpt7() {
  return (
    <Div7 style={style}>
      linear-gradient(red, green);
    </Div7>
  )
}
const Div7 = styled.div`
  height: 600px !important;
  background: linear-gradient(red, green);
`
const toRender7 = <Cmpt7 />

function Cmpt8() {
  return (
    <Div8 style={style}>
      linear-gradient(red, green); background-attachment: fixed;
    </Div8>
  )
}
const Div8 = styled.div`
  height: 600px !important;
  background: linear-gradient(red, green);
  background-attachment: fixed;
`
const toRender8 = <Cmpt8 />

export const gradients = {
  title: 'Gradients',
  date: '2021.11.18',
  tagsArr: ['css', 'style'],
  postParts: [
    {
      val: (
        <>
        We will speak only about linear gradient here, but there are more.
        <ul>
          <li>Linear gradient (goes down/up/left/right/diagonally)</li>
          <li>Radial gradient (defined by their center)</li>
          <li>Conic gradient (rotated around a center point)</li>
        </ul>

        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Gradient is an image, not a color. <br />

          We can assign it to <CodeSpan code='css'>background-image: linear-gradient(red, green)</CodeSpan>.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          CSS is smart enough to understand if you declare gradient to a shorthand <CodeSpan code='css'>background: linear-gradient(red, green)</CodeSpan>.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          By default the gradient line goes from the top to the bottom. Prev. example looks like.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        background: linear-gradient(red, green)
      `,
    },
    {
      type: 'output',
      val: toRender1
    },
    {
      type: 'text',
      val: (
        <>
          We can specify the direction of the gradient line.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        background: linear-gradient(to top right, red, green)
      `,
    },
    {
      type: 'output',
      val: toRender2
    },
    {
      type: 'text',
      val: (
        <>
          Or use an angle.
        </>
      ),
    },
    {
      type: 'img',
      path: img
    },
    {
      type: 'text',
      val: (
        <>
          Line goes through the center of the box.
          The colors of the gradient are determined by several points.
          Start & end points are defined by the intersection the line with a perpendiculars from the box corners.
          Start & end points are symmetrical from center.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        background: linear-gradient(0deg, red, green)
      `,
    },
    {
      type: 'text',
      val: (
        <>
          Or use an angle. Note that as far as the div shape is not square, the line doesn't go diagonally.
        </>
      ),
    },
    {
      type: 'output',
      val: toRender3
    },
    {
      type: 'text',
      val: (
        <>
          Or use an angle. Note that as far as the div shape is not square, the line doesn't go diagonally.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        background: linear-gradient(45deg, red, green)
      `,
    },
    {
      type: 'output',
      val: toRender4
    },
    {
      type: 'text',
      val: (
        <>
          We can have multiple comma separated colors.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        background: linear-gradient(red, white, green)
      `,
    },
    {
      type: 'output',
      val: toRender5
    },
    {
      type: 'text',
      val: (
        <>
          You can set a start point for a color.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        background: linear-gradient(to right, red 0%, white 10%, green 50%);
      `,
    },
    {
      type: 'output',
      val: toRender6
    },
    {
      type: 'text',
      val: (
        <>
          Background image can span across the whole container or can be fixed. Check the difference.
        </>
      ),
    },
    {
      type: 'output',
      val: toRender7
    },
    {
      type: 'output',
      val: toRender8
    },
  ],
}
