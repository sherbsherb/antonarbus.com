// import styled, { keyframes, css } from 'styled-components';
import styled from 'styled-components/macro';
// import './styles.css';
import './../../../node_modules/prismjs/components/prism-jsx.js';
import './../../../node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import './prism.css';
import uuid from 'react-uuid';
import { Title } from './Title.js';
import { Section } from './Section.js';
import { Date } from './Date.js';
import { Num } from './Num.js';
import { Tags } from './Tags.js';
import { Text } from './Text.js';
import { Output } from './Output.js';
import { Code } from './Code.js';

export function jsxesFromPostParts(post) {
  return post.postParts.map((el, index) => {
    const id = post.id+'_part_'+index
    if (el.type === 'text') return <Text key={id}>{el.val}</Text>;
    if (el.type === 'code') return <Code key={id}>{el.val}</Code>;
    if (el.type === 'output') return <Output key={id}>{el.val}</Output>;
    return <div key={id}>{el.val}</div>;
  });
}

export function Post(props) {
  const post = props.post;
  const title = post.title;
  const num = post.sequentialNum;
  const tags = post.tagsArr;
  const date = post.date;

  return (
    <article className="post">
      <Title>{title}</Title>
      <Section>
        {jsxesFromPostParts(post)}
        <Num>{num}</Num>
        <Tags tags={tags}/>
        <Date>{date}</Date>
      </Section>
    </article>
  );
}