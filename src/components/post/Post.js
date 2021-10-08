import { Title } from './Title.js';
import { Section } from './Section.js';
import { Date } from './Date.js';
import { Num } from './Num.js';
import { Tags } from './Tags.js';
import { Text } from './Text.js';
import { Output } from './Output.js';
import { Code } from './Code.js';
import { Img } from './Img.js';

export function Post(props) {
  const post = props.post;
  const title = post.title;
  const num = post.sequentialNum;
  const tags = post.tagsArr;
  const date = post.date;

  function jsxesFromPostParts(post) {
    return post.postParts.map((el, index) => {
      const id = post.id+'_part_'+index
      if (el.type === 'text') return <Text key={id}>{el.val}</Text>;
      if (el.type === 'code') return <Code key={id} lang={el.lang}>{el.val}</Code>;
      if (el.type === 'output') return <Output key={id}>{el.val}</Output>;
      if (el.type === 'img') return <Img key={id} src={el.src} width={el.width} alt={el.alt}/>;
      return <div key={id}>{el.val}</div>;
    });
  }

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