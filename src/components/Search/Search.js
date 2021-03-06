import Mark from 'mark.js'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { store } from '../../App'
import { BtnCancel } from './components/BtnCancel'
import { BtnSearch } from './components/BtnSearch'
import { FoundPosts } from './components/FoundPosts'
import { InputSearch } from './components/InputSearch'
import { RemoveFoundPosts } from './components/RemoveFoundPosts'
import { SearchPreviewContainer } from './components/SearchPreviewContainer'
import { SearchPreviewItem } from './components/SearchPreviewItem'
import { TagsContainer } from './components/TagsContainer'

export default function Search() {
  const showSearchMenuState = useSelector(state => state.showSearchMenu)
  const showRemoveFoundPostsMsgState = useSelector(
    state => state.showRemoveFoundPostsMsg
  )
  const searchInputValState = useSelector(state => state.searchInputVal)
  const foundPostsState = useSelector(state => state.foundPosts)

  function highlightTextInPreview(words) {
    const context = document.querySelectorAll('.post-preview')
    const instance = new Mark(context)
    instance.unmark()
    instance.mark(words)
  }

  useEffect(() => {
    highlightTextInPreview(store.getState().typedWords)
  })

  const dispatch = useDispatch()
  const ref = React.useRef()

  function closeSearchPreview() {
    dispatch({ type: 'close search menu' })
    dispatch({ type: 'remove tags input val' })
  }
  const closeSearchPreviewMemo = React.useCallback(closeSearchPreview, [dispatch])

  React.useEffect(() => {
    function closeModalOnEscape(e) {
      if (e.key === 'Escape') closeSearchPreviewMemo()
    }

    function isClickedElOutsideThisEl(clickedEl, thisEl) {
      return !thisEl.contains(clickedEl)
    }

    function closeModalOnClickOutside(e) {
      const modalWindow = ref.current
      const clickedEl = e.target
      if (!modalWindow) return
      if (isClickedElOutsideThisEl(clickedEl, modalWindow)) closeSearchPreviewMemo()
    }

    document.addEventListener('mousedown', closeModalOnClickOutside)
    document.addEventListener('keydown', closeModalOnEscape)

    return () => {
      document.removeEventListener('mousedown', closeModalOnClickOutside)
      document.removeEventListener('keydown', closeModalOnEscape)
    }

    // document.addEventListener('click', closeSearchPreviewMemo);
    // return () => document.removeEventListener('click', closeSearchPreviewMemo)
  }, [closeSearchPreviewMemo])

  return (
    <DivStyled
      // do not close dropdown search menu if clicked inside
      // onClick={e => e.stopPropagation()}
      ref={ref}
    >
      <InputSearch /><BtnCancel /><BtnSearch />
      {showRemoveFoundPostsMsgState && <RemoveFoundPosts />}
      {showSearchMenuState && (
        <SearchPreviewContainer>
          <FoundPosts />
          <TagsContainer />
          {!!foundPostsState.length &&
            searchInputValState &&
            foundPostsState.map(o => {
              return (
                <SearchPreviewItem
                  title={o.titleTxt}
                  summary={foundPostsState.length < 10 && o.postTxt}
                  uriPostName={o.uriPostName}
                  key={`${o.id}_preview`}
                />
              )
            })}
        </SearchPreviewContainer>
      )}
    </DivStyled>
  )
}

const DivStyled = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: stretch;

  margin: 0 auto;
  width: 90vw;

  margin-top: 30px;
  height: 40px;
  max-width: 500px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  z-index: 1;
`
