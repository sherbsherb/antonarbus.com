import React from 'react';
import { CodeSpan } from '../components/PostsFeed/components/CodeSpan';
import { Lnk } from '../components/PostsFeed/components/Lnk';
import { MdOutlineMenuBook } from 'react-icons/md';
import { FaRedhat as HatIcon } from 'react-icons/fa';
const icon = React.createElement(MdOutlineMenuBook)
const styles = { verticalAlign: 'middle', fill: 'red', fontSize: '100px', width: '100px', height: 'auto', margin: '3px', color: 'blue', opacity: '.5', strokeWidth: '10px' }

function Component() {
  return (
    <>
      <div> --- <MdOutlineMenuBook /> --- </div> 
      <div> --- {icon} --- </div>
      <div> --- <HatIcon style={styles}/> --- </div>
    </>
  );
}

const toRender = <Component />;

export const reactIcons = {
  title: 'React icons package',
  date: '2021.10.28',
  tagsArr: ['react', 'icons', 'svg'],
  postParts: [
    {
      type: 'text',
      val:<>
        <Lnk path={'https://www.npmjs.com/package/react-icons'}>React-icons</Lnk> package can be installed 
        with <CodeSpan>npm i react-icons</CodeSpan> from terminal.
      </>,
    },
    {
      type: 'text',
      val:<>
        Whole set of icons can be checked <Lnk path={'https://react-icons.github.io/react-icons'}>here</Lnk>.
      </>,
    },
    {
      type: 'text',
      val:<>
        We can use icons as JSX components <CodeSpan>{'<Icon />'}</CodeSpan> or pass in 
        variables <CodeSpan>{'const iconVar = React.createElement(Icon)'}</CodeSpan>.
      </>,
    },
    {
      type: 'text',
      val:<>
        Styles can be applied on svg <CodeSpan>{'<MdOutlineMenuBook style={styles}/>'}</CodeSpan>.
      </>,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import { MdOutlineMenuBook } from 'react-icons/md';
        import { FaRedhat as HatIcon } from 'react-icons/fa';
        const icon = React.createElement(MdOutlineMenuBook)
        const styles = { verticalAlign: 'middle', fill: 'red', fontSize: '100px', width: '100px', height: 'auto', margin: '3px', color: 'blue', opacity: '.5', strokeWidth: '10px' }
        
        function Component() {
          return (
            <>
              <div> --- <MdOutlineMenuBook /> --- </div> 
              <div> --- {icon} --- </div>
              <div> --- <HatIcon style={styles}/> --- </div>
            </>
          );
        }
        
        const toRender = <Component />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};