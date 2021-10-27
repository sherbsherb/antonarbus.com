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
import { oneReducerForMultipleComponents } from './oneReducerForMultipleComponents.js';
import { useContextWithUseReducer } from './useContextWithUseReducer';
import { fetchWithLoadingIndicator } from './fetchWithLoadingIndicator';
import { randomIntegerNumberFunction } from './randomIntegerNumberFunction';
import { delayPromise } from './delayPromise';
import { animationTriggerByClass } from './animationTriggerByClass';
import { animationTriggerByProp } from './animationTriggerByProp';
import { useRefAsGlobalVar } from './useRefAsGlobalVar';
import { useStateSkipInitialRender } from './useStateSkipInitialRender';
import { reactMemo } from './reactMemo';
import { useCallbackHook } from './useCallbackHook';
import { useMemoHook } from './useMemoHook';
import { objectsAreNotEqual } from './objectsAreNotEqual';
import { synchronousDelayFunc } from './synchronousDelayFunc';
import { timerInReact } from './timerInReact';
import { secToHHMMSSfunc } from './secToHHMMSSfunc';
import { useLayoutEffectHook } from './useLayoutEffectHook';
import { customHooks } from './customHooks';
import { useInputCustomHook } from './useInputCustomHook';
import { useToggleBooleanStateCustomHook } from './useToggleStateCustomHook';
import { useContexWithUseStateWithoutUseReducer } from './useContexWithUseStateWithoutUseReducer';
import { reactRouting } from './reactRouting/reactRouting';
import { expressServerForReact } from './expressServerForReact';

const posts = [
  expressServerForReact,
  reactRouting,
  useContexWithUseStateWithoutUseReducer,
  useToggleBooleanStateCustomHook,
  useInputCustomHook,
  customHooks,
  useLayoutEffectHook,
  timerInReact,
  secToHHMMSSfunc,
  synchronousDelayFunc,
  useMemoHook,
  useCallbackHook,
  reactMemo,
  objectsAreNotEqual,
  useStateSkipInitialRender,
  useRefAsGlobalVar,
  animationTriggerByProp,
  animationTriggerByClass,
  delayPromise,
  randomIntegerNumberFunction,
  fetchWithLoadingIndicator,
  useContextWithUseReducer,
  oneReducerForMultipleComponents,
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

export const _allPosts = posts.map((o, index) => ({
  ...o,
  titleTxt: jsxToStr(o.title), 
  uri: encodeURI(jsxToStr(o.title).replace(/\s/g,'-').toLowerCase()),
  postTxt: o.postParts.map(el => jsxToStr(el.val)).join(''),
  id: shortid(),
  postNum: posts.length - index,
}))

console.log(_allPosts)