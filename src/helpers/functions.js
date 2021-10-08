import React from "react";
import { Code } from "../components/post/Code";
import { Img } from "../components/post/Img";
import { Output } from "../components/post/Output";
import { Text } from "../components/post/Text";


export function jsxesFromPostParts(post) {
  return post.postParts.map((el, index) => {
    const id = post.id+'_part_'+index
    if (el.type === 'text') return <Text key={id}>{el.val}</Text>;
    if (el.type === 'code') return <Code key={id} lang={el.lang}>{el.val}</Code>;
    if (el.type === 'output') return <Output key={id}>{el.val}</Output>;
    if (el.type === 'img') return <Img key={id} src={el.src} width={el.width} alt={el.alt}/>;
    return <div key={id}>{el.val}</div>;
  });
}