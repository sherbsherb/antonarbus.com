import shortid from 'shortid'
import jsxToStr from '../../helpers/functions/jsxToStr'
import { addEventListenerInReact } from './posts/react/addEventListenerInReact'
import { animationTriggerByClass } from './posts/react/animationTriggerByClass'
import { animationTriggerByProp } from './posts/react/animationTriggerByProp'
import { axiosVsFetch } from './posts/js/axiosVsFetch'
import { babel } from './posts/babel/babel'
import { backdropFilter } from './posts/css/backdropFilter'
import { childrenComponentsRender } from './posts/react/childrenComponentsRender'
import { classVsFunctionComponent } from './posts/react/classVsFunctionComponent'
import { clickedInsideOutside } from './posts/jsUseful/clickedInsideOutside'
import { controlledVsUncontrolledComponent } from './posts/react/controlledVsUncontrolledComponent'
import { customHooks } from './posts/react/customHooks'
import { delayPromise } from './posts/js/delayPromise'
import { dimBackgroundImg } from './posts/css/dimBackgroundImg/dimBackgroundImg'
import { disableEslintWarning } from './posts/esLint/disableEslintWarning'
import { displayFlex } from './posts/css/displayFlex'
import { domRenderInDevTools } from './posts/domRenderInDevTools/domRenderInDevTools'
import { esLint } from './posts/esLint/esLint'
import { expressServerForReact } from './posts/react/expressServerForReact'
import { fetchWithLoadingIndicator } from './posts/react/fetchWithLoadingIndicator'
import { forwardLotsOfProps } from './posts/react/forwardLotsOfProps'
import { forwardRef } from './posts/react/forwardRef'
import { glassStyle } from './posts/css/glassStyle'
import { gradients } from './posts/css/gradients/gradients'
import { gsapAndReact } from './posts/gsap/gsapAndReact'
import { gsapBasics } from './posts/gsap/gsapBasics'
import { gsapCSSRulePlugin } from './posts/gsap/gsapCSSRulePlugin/gsapCSSRulePlugin'
import { gsapMotionPathPlugin } from './posts/gsap/gsapMotionPath'
import { gsapScrollTo } from './posts/gsap/gsapScrollTo'
import { gsapScrollTrigger } from './posts/gsap/gsapScrollTrigger'
import { gsapText } from './posts/gsap/gsapText'
import { imgInReact } from './posts/react/imgInReact/imgInReact'
import { immutableState } from './posts/react/immutabilityOfState'
import { intersectionObserver } from './posts/js/intersectionObserver'
import { jsClassVsConstructorFunction } from './posts/js/jsClassVsConstructorFunction'
import { jsArrays } from './posts/js/jsArrays'
import { jsClass } from './posts/js/jsClass'
import { jsConditions } from './posts/js/jsConditions'
import { jsDataTypes } from './posts/js/jsDataTypes'
import { jsDate } from './posts/js/jsDate'
import { jsDestructuring } from './posts/js/jsDestructuring'
import { jsDomTraversal } from './posts/js/jsDomTraversal'
import { jsErrors } from './posts/js/jsErrors'
import { jsEval } from './posts/js/jsEval'
import { jsEventLoop } from './posts/js/jsEventLoop'
import { jsFunctions } from './posts/js/jsFunctions'
import { jsGenerator } from './posts/js/jsGenerator'
import { jsJson } from './posts/js/jsJson'
import { jsLoops } from './posts/js/jsLoops'
import { jsMap } from './posts/js/jsMap'
import { jsModules } from './posts/js/jsModules'
import { jsNumbers } from './posts/js/jsNumbers'
import { jsObjects } from './posts/js/jsObjects'
import { jsOperators } from './posts/js/jsOperators'
import { jsPromise } from './posts/js/jsPromise'
import { jsPrototype } from './posts/js/jsPrototype'
import { jsProxy } from './posts/js/jsProxy'
import { jsRegExp } from './posts/js/jsRegExp'
import { jsSet } from './posts/js/jsSet'
import { jsStrings } from './posts/js/jsStrings'
import { jsSymbol } from './posts/js/jsSymbol'
import { jsTimeoutInterval } from './posts/js/jsTimeoutInterval'
import { jsVA } from './posts/js/jsVA'
import { jsVariables } from './posts/js/jsVariables'
import { jsVsJsx } from './posts/react/jsVsJsx'
import { jsxToString } from './posts/react/jsxToString/jsxToString'
import { kbdStyle } from './posts/css/kbdStyle'
import { leapYear } from './posts/leapYear/leapYear'
import { linkDecoration } from './posts/css/linkDecoration'
import { modalWindowWithBackgroundLayer } from './posts/jsUseful/modalWindowWithBackgroundLayer'
import { modalWindowWithoutBackgroundLayer } from './posts/jsUseful/modalWindowWithoutBackgroundLayer'
import { objectsAreNotEqual } from './posts/js/objectsAreNotEqual'
import { oneReducerForMultipleComponents } from './posts/react/oneReducerForMultipleComponents'
import { passArgsIntoFunc } from './posts/js/passArgsIntoFunc'
import { passProps } from './posts/react/passProps'
import { phpSyntax } from './posts/phpSyntax/phpSyntax'
import { propsAreImmutable } from './posts/react/propsUpdate/propsAreImmutable'
import { pythonSyntax } from './posts/pythonSyntax/pythonSyntax'
import { randomIntegerNumberFunction } from './posts/jsUseful/randomIntegerNumberFunction'
import { useAnimatedWrapperPost } from './posts/react/useAnimatedWrapperPost'
import { reactIcons } from './posts/react/reactIcons'
import { reactMemo } from './posts/react/reactMemo'
import { reactRouting } from './posts/react/reactRouting/reactRouting'
import { ReactTransitionGroupCssTransition } from './posts/react/ReactTransitionGroupCssTransition'
import { ReactTransitionGroupTransition } from './posts/react/ReactTransitionGroupTransition'
import { reduxExampleByDevEd } from './posts/react/reduxExampleByDevEd'
import { resetCSSProperty } from './posts/css/resetCSSProperty'
import { RoutesCombination } from './posts/react/RoutesCombination'
import { rubySyntax } from './posts/rubySyntax/rubySyntax'
import { scrollbarStyle } from './posts/css/scrollbarStyle'
import { secToHHMMSSfunc } from './posts/jsUseful/secToHHMMSSfunc'
import { SlideSidewaysWithCSSTransition } from './posts/react/SlideSidewaysWithCSSTransition'
import { stateUpdateWithSameValue } from './posts/react/stateUpdateWithSameValue'
import { styledComponentsAndProps } from './posts/react/styledComponentsAndProps'
import { synchronousDelayFunc } from './posts/jsUseful/synchronousDelayFunc'
import { tableOfContent } from './posts/tableOfContent'
import { timerInReact } from './posts/react/timerInReact'
import { toDoList } from './posts/react/toDoList'
import { updateValueFromChildComponent } from './posts/react/updateValueFromChildComponent'
import { uuid } from './posts/jsUseful/uuid'
import { webpack } from './posts/webpack/webpack'
import { webServices } from './posts/webServices/webServices'
import { whyToUseState } from './posts/react/whyToUseState'
import { useContextWithUseStateWithoutUseReducer } from './posts/react/useContextWithUseStateWithoutUseReducer'
import { useToggleBooleanStateCustomHook } from './posts/react/useToggleBooleanStateCustomHook'
import { useInputCustomHook } from './posts/react/useInputCustomHook'
import { useLayoutEffectHook } from './posts/react/useLayoutEffectHook'
import { useMemoHook } from './posts/react/useMemoHook'
import { useCallbackHook } from './posts/react/useCallbackHook'
import { useStateSkipInitialRender } from './posts/react/useStateSkipInitialRender'
import { useRefAsGlobalVar } from './posts/react/useRefAsGlobalVar'
import { useContextWithUseReducer } from './posts/react/useContextWithUseReducer'
import { useReducerWithObjStateAndReducer } from './posts/react/useReducerWithObjStateAndReducer'
import { useReducerPost } from './posts/react/useReducerPost'
import { useContextPost } from './posts/react/useContextPost'
import { useEffectFetchData } from './posts/react/useEffectFetchData'
import { useEffectCleanUp } from './posts/react/useEffectCleanUp'
import { useEffectPost } from './posts/react/useEffectPost'
import { useStatePrevious } from './posts/react/useStatePrevious'
import { useStateAndInput } from './posts/react/useStateAndInput'
import { useRefExample } from './posts/react/useRefExample'
import { oopConcepts } from './posts/programming/oopConcepts'
// import { typeScriptBasics } from './posts/typeScriptBasics/typeScriptBasics.tsx'

const posts = [
  // typeScriptBasics,
  oopConcepts,
  jsDomTraversal,
  jsRegExp,
  jsProxy,
  jsEventLoop,
  jsModules,
  jsGenerator,
  jsEval,
  jsPromise,
  jsErrors,
  jsTimeoutInterval,
  jsClassVsConstructorFunction,
  jsPrototype,
  jsClass,
  jsJson,
  jsDate,
  jsDestructuring,
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
  customHooks,
  timerInReact,
  secToHHMMSSfunc,
  synchronousDelayFunc,
  reactMemo,
  objectsAreNotEqual,
  animationTriggerByProp,
  animationTriggerByClass,
  delayPromise,
  fetchWithLoadingIndicator,
  oneReducerForMultipleComponents,
  axiosVsFetch,
  addEventListenerInReact,
  useContextWithUseStateWithoutUseReducer,
  useToggleBooleanStateCustomHook,
  useInputCustomHook,
  useLayoutEffectHook,
  useMemoHook,
  useCallbackHook,
  useStateSkipInitialRender,
  useRefAsGlobalVar,
  useContextWithUseReducer,
  useReducerWithObjStateAndReducer,
  useReducerPost,
  useContextPost,
  useEffectFetchData,
  useEffectCleanUp,
  useEffectPost,
  useStatePrevious,
  useStateAndInput,
  useRefExample,
  reduxExampleByDevEd,
  domRenderInDevTools,
  propsAreImmutable,
  stateUpdateWithSameValue,
  childrenComponentsRender,
  styledComponentsAndProps,
  imgInReact,
  jsxToString,
  uuid,
  updateValueFromChildComponent,
  forwardRef,
  controlledVsUncontrolledComponent,
  forwardLotsOfProps,
  passProps,
  immutableState,
  toDoList,
  classVsFunctionComponent,
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
