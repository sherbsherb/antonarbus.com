import { Title } from './Title.js';
import { Section } from './Section.js';
import { Date } from './Date.js';
import { Num } from './Num.js';
import { Tags } from './Tags.js';
import { Text } from './Text.js';
import { Output } from './Output.js';
import { Code } from './Code.js';
import { Img } from '../../Post/Img.js';
import { Div } from './Div.js';

export function Post(props) {
  const post = props.post;
  const title = post.title;
  const num = post.postNum;
  const tags = post.tagsArr;
  const date = post.date;
  const uriPostName = post.uriPostName

  function jsxesFromPostParts(post) {
    return post.postParts.map((el, index) => {
      const id = post.id+'_part_'+index
      if (el.type === 'text') return <Text key={id}>{el.val}</Text>;
      if (el.type === 'code') return <Code key={id} lang={el.lang}>{el.val}</Code>;
      if (el.type === 'output') return <Output key={id}>{el.val}</Output>;
      if (el.type === 'img') return <Img key={id} src={el.src || el.link || el.path} width={el.width} alt={el.alt}/>;
      return <Div key={id}>{el.val}</Div>;
    });
  }

  return (
    <article className="post">
      <Title uriPostName={uriPostName}>{title}</Title>
      <Section>
        {jsxesFromPostParts(post)}
        <Num>{num}</Num>
        <Tags tags={tags}/>
        <Date>{date}</Date>
      </Section>
    </article>
  );
}