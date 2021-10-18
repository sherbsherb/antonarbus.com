import shortid from 'shortid';

import { classVsFunctionComponent } from './classVsFunctionComponent'
import { controlledVsUncontrolledComponent } from './controlledVsUncontrolledComponent'
import { forwardLotsOfProps } from './forwardLotsOfProps'
import { forwardRef } from './forwardRef'
import { immutableState } from './immutabilityOfState'
import { jsVsJsx } from './jsVsJsx'
import { passProps } from './passProps'
import { updateValueFromChildComponent } from './updateValueFromChildComponent'
import { toDoList } from './toDoList'
import { useStateAndInput } from './useStateAndInput'
import { whyToUseState } from './whyToUseState'
import { uuid } from './uuid'
import { useRefExample } from './useRefExample';
import { jsxToString } from './jsxToString/jsxToString';
import { imgInReact } from './imgInReact/imgInReact';
import { styledComponentsAndProps } from './styledComponentsAndProps';
import { childrenComponentsRender } from './childrenComponentsRender';
import { stateUpdateWithSameValue } from './stateUpdateWithSameValue.js';
import { propsUpdate } from './propsUpdate/propsUpdate';
import { domRenderInDevTools } from './domRenderInDevTools/domRenderInDevTools';
import { reduxExampleByDevEd } from './reduxExampleByDevEd';
import { useStatePrevious } from './useStatePrevious';
import { useEffectPost } from './useEffectPost';
import { addEventListenerInReact } from './addEventListenerInReact';
import { useEffectCleanUp } from './useEffectCleanUp';
import { useEffectFetchData } from './useEffectFetchData';
import { axiosVsFetch } from './axiosVsFetch';
import { modalWindow } from './modalWindow';
import { useContextPost } from './useContextPost';
import jsxToStr from '../helpers/functions/jsxToStr';
import { useReducerPost } from './useReducerPost';
import { useReducerWithObjStateAndReducer } from './useReducerWithObjStateAndReducer';

const posts = [
  useReducerWithObjStateAndReducer,
  useReducerPost,
  useContextPost,
  modalWindow,
  axiosVsFetch,
  useEffectFetchData,
  useEffectCleanUp,
  addEventListenerInReact,
  useEffectPost,
  useStatePrevious,
  reduxExampleByDevEd,
  domRenderInDevTools,
  propsUpdate,
  stateUpdateWithSameValue,
  childrenComponentsRender,
  styledComponentsAndProps,
  imgInReact,
  jsxToString,
  useRefExample,
  uuid,
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
posts.forEach((o, index) => o.sequentialNum = posts.length - index)

// add id to posts
posts.forEach(o => o.id = shortid())

// add pure text in addition to title and post jsxes
const postsWithoutJSX = posts.map(el => ({
  ...el,
  titleTxt: jsxToStr(el.title), 
  postTxt: el.postParts.map(el => jsxToStr(el.val)).join('')
}))

export const _allPosts = postsWithoutJSX
