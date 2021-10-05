// import React, { useState, useEffect } from 'react'
import { classVsFunctionComponent } from './classVsFunctionComponent/classVsFunctionComponent'
import { controlledVsUncontrolledComponent } from './controlledVsUncontrolledComponent/controlledVsUncontrolledComponent'
import { forwardLotsOfProps } from './forwardLotsOfProps/forwardLotsOfProps'
import { forwardRef } from './forwardRef/forwardRef'
import { immutableState } from './immutableState/immutabilityOfState'
import { jsVsJsx } from './jsVsJsx/jsVsJsx'
import { passProps } from './passProps/passProps'
import { updateValueFromChildComponent } from './updateValueFromChildComponent/updateValueFromChildComponent'
import { toDoList } from './toDoList/toDoList'
import { useStateAndInput } from './useStateAndInput/useStateAndInput'
import { whyToUseState } from './whyToUseState/whyToUseState'

let posts = [
  updateValueFromChildComponent,
  forwardRef,
  controlledVsUncontrolledComponent,
  forwardLotsOfProps,
  passProps,
  immutableState,
  toDoList,
  classVsFunctionComponent,
  useStateAndInput,
  whyToUseState,
  jsVsJsx,
]

// enumerate posts
posts.forEach((o, index) => {
  o.sequentialNum = posts.length - index
})

// add properties titleTxt & postTxt with pure text
function txtFromJSXOrStr(el) {
  if (!el) return '';
  if (typeof el === 'string') return el;
  const children = el.props && el.props.children;
  if (children instanceof Array)
    return children.map(txtFromJSXOrStr).join('');
  return txtFromJSXOrStr(children);
}

const postsWithText = posts.map(el => ({
  ...el,
  titleTxt: txtFromJSXOrStr(el.title).toLowerCase(), 
  postTxt: el.articlesArr.map(el => txtFromJSXOrStr(el.val)).join('').toLowerCase(),
}))

export const allPosts = postsWithText