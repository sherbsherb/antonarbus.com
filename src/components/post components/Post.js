import React, { useEffect, useState } from 'react';
// import styled, { keyframes, css } from 'styled-components';
import styled from 'styled-components/macro';
// import './styles.css';
import Prism from 'prismjs';
import './../../../node_modules/prismjs/components/prism-jsx.js';
import './../../../node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import './prism.css';
import uuid from 'react-uuid';

export function returnArrOfJsx(arr) {
  return arr.map(el => {
    if (el.type === 'text') return <Text key={uuid()}>{el.val}</Text>;
    if (el.type === 'code') return <Code key={uuid()}>{el.val}</Code>;
    if (el.type === 'output') return <Output key={uuid()}>{el.val}</Output>;
    return <div key={uuid()}>{el.val}</div>;
  });
}

export const TagsContainerStyled = styled.div`
  margin-top: 20px;
`;

export const TagStyled = styled.div`
  display: inline-block;
  position: relative;
  top: -3px;
  padding: 3px 8px 3px 20px;
  margin: 5px;
  background: grey;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 12px;
  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
  text-decoration: none;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  cursor: pointer;
  vertical-align: middle;

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 8px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
    box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
  }

  &:hover {
    background: #5a5a5a;
  }
`;

export function Tag(props) {

  function setCaretToEnd(el) {
    if (!el.childNodes.length) return
    let range = document.createRange();
    let sel = window.getSelection();
    const lastNode = el.childNodes[el.childNodes.length - 1]
    range.setStart(lastNode, lastNode.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
  }

  return (
    <TagStyled
      contentEditable={false}
      onClick={(e) => {
        e.stopPropagation()
        // add tag to search input
        const inputEl = document.getElementById("input")
        const tagEl = e.target
        const clonedTag = tagEl.cloneNode(true)
        clonedTag.style.margin = '0px 5px'
        clonedTag.classList.add('tag')
        console.log(tagEl)
        inputEl.appendChild(clonedTag);
        inputEl.append("\u00A0");
        setCaretToEnd(inputEl)
        inputEl.scrollLeft = 10000;
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        console.log('props on click inside tag')
        console.log(props)

      }}
    >
      {props.children}
    </TagStyled>
  );
}

export function Post(props) {
  console.log('props')
  console.log(props)
  return (
    <>
      <Title>{props.post.title}</Title>
      <StyledSection>
        <Article>{returnArrOfJsx(props.post.articlesArr)}</Article>
        <ArticleNum num={props.post.sequentialNum} />
        <TagsContainerStyled>
          {props.post.tagsArr.map(tag => (
            <Tag 
              key={tag}
              state={props.state}
              setState={props.setState}
            >
              {tag}
            </Tag>
          ))}
        </TagsContainerStyled>
        <Date>{props.post.date}</Date>
      </StyledSection>
    </>
  );
}

const StyledTitle = styled.h3`
  display: block;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 24px;
  color: black;
  text-align: center;
`;

export function Title(props) {
  return <StyledTitle>{props.children}</StyledTitle>;
}

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column; /* direction to stack els */
  flex-wrap: nowrap; /* wrap or not */
  justify-content: flex-start; /* align on main-axis */
  align-items: left; /* align on cross-axis */
  /* align-content: stretch; align the flex lines, similar to align-items, but aligns flex lines (group els as if they were one el) */
  border: 1px solid #d2d2d2;
  border-radius: 6px;
  margin: 0 auto;
  width: 90vw;
  max-width: 800px;
  font-size: 14px;
  padding: 20px;
  background: white;
  color: black;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
`;

export const Article = styled.article`
  display: block;
  width: 100%;
`;

const StyledText = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  align-self: flex-start;
  color: #3a3a3a;
`;

export function Text(props) {
  return <StyledText>{props.children}</StyledText>;
}

export function Code(props) {
  useEffect(() => {
    Prism.plugins.NormalizeWhitespace.setDefaults({
      'remove-trailing': true,
      'remove-indent': true,
      'left-trim': true,
      'right-trim': true,
      'break-lines': 600, //max number of characters in each line before break
    });

    // Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-jsx">{props.children}</code>
    </pre>
  );
}

const StyledDate = styled.time`
  font-size: 10px;
  position: absolute;
  bottom: 7px;
  right: 7px;
`;

export function Date(props) {
  return <StyledDate>{props.children}</StyledDate>;
}

const StyledOutput = styled.div`
  background: #e9f4fb;
  padding: 0.5em;
  margin: 20px 0px;
  overflow: auto;
  border-radius: 4px;
`;

export function Output(props) {
  return <StyledOutput>{props.children}</StyledOutput>;
}

const StyleLink = styled.a`
  cursor: pointer;
  color: #0098f7;
  text-decoration: none;
`;

export function Link(props) {
  return (
    <StyleLink href={props.link} target="_blank">
      {props.text}
      {props.children}
    </StyleLink>
  );
}

const StyleCode = styled.code``;

export function CodeInline(props) {
  return (
    <StyleCode>
      <code className="language-javascript">{props.children}</code>
    </StyleCode>
  );
}

const StyleArticleNum = styled.span`
  position: absolute;
  color: #b0b0b0;
  top: -20px;
  right: 5px;
`;

export function ArticleNum(props) {
  return <StyleArticleNum>Article #{props.num}</StyleArticleNum>;
}
