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

export const allPosts = [
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