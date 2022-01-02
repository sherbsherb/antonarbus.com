import styled from 'styled-components'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Mark from 'mark.js'
import { store } from '../../App'
import { Post } from './components/Post'
import { useLocation } from 'react-router-dom'
import { ShowMoreBtn } from './components/ShowMoreBtn'
import { postsArr } from './postsArr'
import { elementScrollIntoView } from 'seamless-scroll-polyfill'

export function PostsFeed(props) {
  const dispatch = useDispatch()
  const postsOnDisplayState = useSelector(state => state.postsOnDisplay)
  const typedWords = useSelector(state => state.typedWords)
  const fromToPages = useSelector(state => state.fromToPages)
  const location = useLocation()
  const postNameFromUri = props?.match?.params?.uriPostName

  // show specific or all posts
  useEffect(() => {
    const doesPostFromUriExist = postsArr.some(
      o => o.uriPostName === postNameFromUri
    )

    if (doesPostFromUriExist) {
      dispatch({
        type: 'display following posts',
        postsToShow: postsArr.filter(o => o.uriPostName === postNameFromUri),
      })
      dispatch({ type: 'show remove found posts msg' })
    }

    if (!doesPostFromUriExist) {
      dispatch({
        type: 'display following posts',
        postsToShow: postsArr,
      })
    }
  }, [location, dispatch, postNameFromUri])

  // highlight found words
  useEffect(() => {
    const context = document.querySelector('main')
    const instance = new Mark(context)
    instance.unmark()
    instance.mark(typedWords)
  }, [postsOnDisplayState, typedWords])

  // scroll to the hash
  // not working just with useEffect, when component is ready there are not children yet
  // with setTimeout we put macrotask to the end of the event loop & by that time all children are ready
  // found solutions by experimenting, did not find proper solution on the Internet
  useEffect(() => {
    setTimeout(() => {
      const hash = location.hash
      if (!hash) return
      // at H3 & H5 components we assign following ids from text
      const id = encodeURI(hash.replace(/\s/g, '-').toLowerCase())
      const el = document.querySelector(id)
      if (!el) return
      // el.scrollIntoView({ behavior: 'smooth', alignToTop: true })
      elementScrollIntoView(el, { behavior: 'smooth', alignToTop: true })
    })
  }, [])

  // do not re-render posts on screen when search dropdown menu toggles
  const returnPostsMemo = useMemo(() => {
    function returnPosts() {
      return postsOnDisplayState
        .map(o => <Post post={o} key={o.id} />)
        .slice(fromToPages.from - 1, fromToPages.to)
    }
    return returnPosts()
  }, [postsOnDisplayState, fromToPages])

  return (
    <StyledMain>
      {returnPostsMemo}
      {fromToPages.to < postsOnDisplayState.length ? <ShowMoreBtn /> : null}
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
`
