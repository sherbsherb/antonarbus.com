import { CodeSpan } from '../../../components/CodeSpan'
import img from './img.png'

function jsxToStr(el) {
  if (!el) return ''
  if (typeof el === 'string') return el
  const children = el.props && el.props.children
  if (children instanceof Array) return children.map(jsxToStr).join('')
  return jsxToStr(children)
}

// console.dir(<>Hello <strong>Mike</strong></>)
const toRender = jsxToStr(<>Hello <strong>Mike</strong></>)

export const jsxToString = {
  title: 'JSX to string',
  date: '2021.10.08',
  tagsArr: ['react', 'jsx', 'string', 'type', 'conversion', 'mine', 'function'],
  postParts: [
    {
      type: 'text',
      val: <>
        We can not use <CodeSpan>el.innerText</CodeSpan> to retrieve text from JSX because it is not an HTML element.
      </>,
    },
    {
      type: 'text',
      val: <>
        Let's put a simple JSX in the dev tool's console <CodeSpan>{'console.dir(<>Hello <strong>Mike</strong></>)'}</CodeSpan>
      </>,
    },
    {
      type: 'img',
      src: img,
      width: '50%',
      alt: 'console.log of jsx element'
    },
    {
      type: '',
      // val: <Img src={img} width={'50%'} alt="" />
    },
    {
      type: 'text',
      val: <>
        We got the nested object with <CodeSpan>children</CodeSpan> in <CodeSpan>props</CodeSpan>.
      </>,
    },
    {
      type: 'text',
      val: <>
        Let's recursively go through it and take all the text out.
      </>,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function jsxToStr(el) {
          if (!el) return '';
          if (typeof el === 'string') return el;
          const children = el.props && el.props.children;
          if (children instanceof Array) return children.map(jsxToStr).join('');
          return jsxToStr(children);
        }
        
        console.dir(<>Hello <strong>Mike</strong></>)
        const toRender = jsxToStr(<>Hello <strong>Mike</strong></>);
      `,
    },
    {
      type: 'text',
      val: <>
        With this function we can get text from JSX tags.
      </>,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      type: 'text',
      val: <>
        Note that we get text from the static JSX, but not from the component function result after JSX call.
      </>,
    },
  ],
}
