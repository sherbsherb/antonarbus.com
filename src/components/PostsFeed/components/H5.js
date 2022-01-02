import React from 'react'
import styled from 'styled-components'
import jsxToStr from '../../../helpers/functions/jsxToStr'
import { elementScrollIntoView } from 'seamless-scroll-polyfill'

export function H5(props) {
  const ref = React.useRef(null)

  const idFromText = () => encodeURI(jsxToStr(props.children).replace(/\s/g, '-').toLowerCase())

  React.useEffect(() => {
    // const h5TextEncoded = encodeURI(jsxToStr(props.children).replace(/\s/g, '-').toLowerCase())
    const id = idFromText()
    ref.current.id = id
  }, [])

  function addHashToUrl(e) {
    console.log(idFromText())
    history.pushState({}, '', '#' + idFromText())
    // ref.current.scrollIntoView({ behavior: 'smooth', alignToTop: true })
    elementScrollIntoView(ref.current, { behavior: 'smooth', alignToTop: true })
  }

  return (
    <H5Styled
      ref={ref}
      onClick={addHashToUrl}
    >
      {props.children}
    </H5Styled>
  )
}

const H5Styled = styled.h3`
  cursor: pointer;
  font-size: 16px;
  color: #5e5c5c;
`
