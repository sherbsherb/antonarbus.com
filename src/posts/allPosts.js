import React, { useState, useEffect } from 'react'
import { classVsFunctionComponent } from './classVsFunctionComponent/classVsFunctionComponent'
import { forwardLotsOfProps } from './forwardLotsOfProps/forwardLotsOfProps'
import { immutableState } from './immutableState/immutabilityOfState'
import { jsVsJsx } from './jsVsJsx/jsVsJsx'
import { passProps } from './passProps/passProps'
import { toDoArticle } from './toDoArticle/toDoArticle'
import { useStateAndInput } from './useStateAndInput/useStateAndInput'
import { whyToUseState } from './whyToUseState/whyToUseState'




export const allPosts = [
  forwardLotsOfProps,
  passProps,
  immutableState,
  toDoArticle,
  classVsFunctionComponent,
  useStateAndInput,
  whyToUseState,
  jsVsJsx,
]