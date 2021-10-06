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

const posts = [
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

export const allPosts = posts