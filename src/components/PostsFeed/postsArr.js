import shortid from 'shortid'
import { classVsFunctionComponent } from './posts/classVsFunctionComponent'
import { controlledVsUncontrolledComponent } from './posts/controlledVsUncontrolledComponent'
import { forwardLotsOfProps } from './posts/forwardLotsOfProps'
import { forwardRef } from './posts/forwardRef'
import { immutableState } from './posts/immutabilityOfState'
import { jsVsJsx } from './posts/jsVsJsx'
import { randomIntegerNumberFunction } from './posts/randomIntegerNumberFunction'
import { passProps } from './posts/passProps'
import { updateValueFromChildComponent } from './posts/updateValueFromChildComponent'
import { toDoList } from './posts/toDoList'
import { useStateAndInput } from './posts/useStateAndInput'
import { whyToUseState } from './posts/whyToUseState'
import { uuid } from './posts/uuid'
import { useRefExample } from './posts/useRefExample'
import { jsxToString } from './posts/jsxToString/jsxToString'
import { imgInReact } from './posts/imgInReact/imgInReact'
import { styledComponentsAndProps } from './posts/styledComponentsAndProps'
import { childrenComponentsRender } from './posts/childrenComponentsRender'
import { stateUpdateWithSameValue } from './posts/stateUpdateWithSameValue.js'
import { propsUpdate } from './posts/propsUpdate/propsUpdate'
import { domRenderInDevTools } from './posts/domRenderInDevTools/domRenderInDevTools'
import { reduxExampleByDevEd } from './posts/reduxExampleByDevEd'
import { useStatePrevious } from './posts/useStatePrevious'
import { useEffectPost } from './posts/useEffectPost'
import { addEventListenerInReact } from './posts/addEventListenerInReact'
import { useEffectCleanUp } from './posts/useEffectCleanUp'
import { useEffectFetchData } from './posts/useEffectFetchData'
import { axiosVsFetch } from './posts/axiosVsFetch'
import { useContextPost } from './posts/useContextPost'
import jsxToStr from '../../helpers/functions/jsxToStr'
import { useReducerPost } from './posts/useReducerPost'
import { useReducerWithObjStateAndReducer } from './posts/useReducerWithObjStateAndReducer'
import { oneReducerForMultipleComponents } from './posts/oneReducerForMultipleComponents.js.js'
import { useContextWithUseReducer } from './posts/useContextWithUseReducer'
import { fetchWithLoadingIndicator } from './posts/fetchWithLoadingIndicator'
import { delayPromise } from './posts/delayPromise'
import { animationTriggerByClass } from './posts/animationTriggerByClass'
import { animationTriggerByProp } from './posts/animationTriggerByProp'
import { useRefAsGlobalVar } from './posts/useRefAsGlobalVar'
import { useStateSkipInitialRender } from './posts/useStateSkipInitialRender'
import { reactMemo } from './posts/reactMemo'
import { useCallbackHook } from './posts/useCallbackHook'
import { useMemoHook } from './posts/useMemoHook'
import { objectsAreNotEqual } from './posts/objectsAreNotEqual'
import { synchronousDelayFunc } from './posts/synchronousDelayFunc'
import { timerInReact } from './posts/timerInReact'
import { secToHHMMSSfunc } from './posts/secToHHMMSSfunc'
import { useLayoutEffectHook } from './posts/useLayoutEffectHook'
import { customHooks } from './posts/customHooks'
import { useInputCustomHook } from './posts/useInputCustomHook'
import { useToggleBooleanStateCustomHook } from './posts/useToggleStateCustomHook'
import { useContextWithUseStateWithoutUseReducer } from './posts/useContextWithUseStateWithoutUseReducer'
import { reactRouting } from './posts/reactRouting/reactRouting'
import { expressServerForReact } from './posts/expressServerForReact'
import { reactIcons } from './posts/reactIcons'
import { tableOfContent } from './posts/tableOfContent'
import { RoutesCombination } from './posts/RoutesCombination'
import { modalWindowWithBackgroundLayer } from './posts/modalWindowWithBackgroundLayer'
import { modalWindowWithoutBackgroundLayer } from './posts/modalWindowWithoutBackgroundLayer'
import { kbdStyle } from './posts/kbdStyle'
import { clickedInsideOutside } from './posts/clickedInsideOutside'
import { passArgsIntoFunc } from './posts/passArgsIntoFunc'
import { useAnimatedWrapperPost } from './posts/useAnimatedWrapperPost'
import { ReactTransitionGroupTransition } from './posts/ReactTransitionGroupTransition'
import { ReactTransitionGroupCssTransition } from './posts/ReactTransitionGroupCssTransition'
import { SlideSidewaysWithCSSTransition } from './posts/SlideSidewaysWithCSSTransition'
import { linkDecoration } from './posts/linkDecoration'
import { resetCSSProperty } from './posts/resetCSSProperty'
import { disableEslintWarning } from './posts/disableEslintWarning'
import { intersectionObserver } from './posts/intersectionObserver'
import { gsapAndReact } from './posts/gsapAndReact'
import { gsapBasics } from './posts/gsapBasics'
import { promisePost } from './posts/promise'
import { callback } from './posts/callback'
import { scrollbarStyle } from './posts/scrollbarStyle'
import { gradients } from './posts/gradients/gradients'
import { dimBackgroundImg } from './posts/dimBackgroundImg/dimBackgroundImg'
import { glassStyle } from './posts/glassStyle'
import { displayFlex } from './posts/displayFlex'
import { gsapCSSRulePlugin } from './posts/gsapCSSRulePlugin/gsapCSSRulePlugin'
import { gsapMotionPathPlugin } from './posts/gsapMotionPath'
import { gsapScrollTo } from './posts/gsapScrollTo'
import { gsapText } from './posts/gsapText'
import { gsapScrollTrigger } from './posts/gsapScrollTrigger'
import { leapYear } from './posts/leapYear/leapYear'
import { esLint } from './posts/esLint/esLint'
import { babel } from './posts/babel/babel'
import { backdropFilter } from './posts/backdropFilter'
import { webServices } from './posts/webServices/webServices'
import { webpack } from './posts/webpack/webpack'
import { rubySyntax } from './posts/rubySyntax/rubySyntax'
import { pythonSyntax } from './posts/pythonSyntax/pythonSyntax'
import { phpSyntax } from './posts/phpSyntax/phpSyntax'
import { jsVA } from './posts/jsSyntax/jsVA'
import { jsVariables } from './posts/jsSyntax/jsVariables'
import { jsDataTypes } from './posts/jsSyntax/jsDataTypes'
import { jsOperators } from './posts/jsSyntax/jsOperators'
import { jsConditions } from './posts/jsSyntax/jsConditions'
import { jsLoops } from './posts/jsSyntax/jsLoops'
import { jsFunctions } from './posts/jsSyntax/jsFunctions'
import { jsObjects } from './posts/jsSyntax/jsObjects'
import { jsSymbol } from './posts/jsSyntax/jsSymbol'
import { jsNumbers } from './posts/jsSyntax/jsNumbers'
import { jsStrings } from './posts/jsSyntax/jsStrings'
import { jsArrays } from './posts/jsSyntax/jsArrays'
import { jsMap } from './posts/jsSyntax/jsMap'
import { jsSet } from './posts/jsSyntax/jsSet'
// import { typeScriptBasics } from './posts/typeScriptBasics/typeScriptBasics.tsx'

const posts = [
  // typeScriptBasics,
  jsSet,
  jsMap,
  jsArrays,
  jsStrings,
  jsNumbers,
  jsSymbol,
  jsObjects,
  jsFunctions,
  jsLoops,
  jsConditions,
  jsOperators,
  jsDataTypes,
  jsVariables,
  jsVA,
  phpSyntax,
  pythonSyntax,
  rubySyntax,
  webpack,
  webServices,
  backdropFilter,
  babel,
  esLint,
  leapYear,
  gsapScrollTrigger,
  gsapText,
  gsapScrollTo,
  gsapMotionPathPlugin,
  gsapCSSRulePlugin,
  displayFlex,
  glassStyle,
  dimBackgroundImg,
  gradients,
  scrollbarStyle,
  promisePost,
  callback,
  gsapBasics,
  gsapAndReact,
  intersectionObserver,
  linkDecoration,
  disableEslintWarning,
  resetCSSProperty,
  SlideSidewaysWithCSSTransition,
  ReactTransitionGroupCssTransition,
  ReactTransitionGroupTransition,
  randomIntegerNumberFunction,
  useAnimatedWrapperPost,
  passArgsIntoFunc,
  clickedInsideOutside,
  kbdStyle,
  modalWindowWithoutBackgroundLayer,
  modalWindowWithBackgroundLayer,
  RoutesCombination,
  tableOfContent,
  reactIcons,
  expressServerForReact,
  reactRouting,
  useContextWithUseStateWithoutUseReducer,
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
  fetchWithLoadingIndicator,
  useContextWithUseReducer,
  oneReducerForMultipleComponents,
  useReducerWithObjStateAndReducer,
  useReducerPost,
  useContextPost,
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

export const postsArr = posts.map((o, index) => ({
  ...o,
  titleTxt: jsxToStr(o.title),
  uriPostName: encodeURI(jsxToStr(o.title).replace(/\s/g, '-').toLowerCase()),
  postTxt: o.postParts.map(el => jsxToStr(el.val)).join(''),
  id: shortid(),
  postNum: posts.length - index,
}))

// console.log(postsArr)
