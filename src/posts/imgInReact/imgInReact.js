import React from 'react';
import { CodeSpan } from '../../components/post/CodeSpan';
import { Img } from '../../components/post/Img';
import { Link } from '../../components/post/Link';
import imgFile from './img.jpg';

const Component = () => (
  <img
    src={imgFile}
    style={{ display: 'block', margin: '0 auto', maxWidth: '300px' }}
  />
);

export const imgInReact = {
  title: 'Add image in React',
  date: '2021.10.08',
  tagsArr: ['react', 'jsx', 'image'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          In HTML we add image url into <CodeSpan>scr</CodeSpan> attribute{' '}
          <CodeSpan>{'<img src="img.jpg">'}</CodeSpan>, but that will not work
          in react.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Instead we need to import an image{' '}
          <CodeSpan>{"import img from './img.jpg'"}</CodeSpan> and use it in{' '}
          <CodeSpan>scr</CodeSpan> attribute as{' '}
          <CodeSpan>{'<img src=img>'}</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      val: `
        import imgFile from './img.jpg';
        const Component = () => (
          <img
            src={imgFile}
            style={{ display: 'block', margin: '0 auto', maxWidth: '300px' }}
          />
        );
      `,
    },
    {
      type: 'output',
      val: <Component></Component>,
    },
  ],
};
