import React from 'react'
import styled from 'styled-components'
import jsxToStr from '../../../helpers/functions/jsxToStr'

export function H3(props) {
  const ref = React.useRef(null)

  const idFromText = () => encodeURI(jsxToStr(props.children).replace(/\s/g, '-').toLowerCase())

  React.useEffect(() => {
    // const h3TextEncoded = encodeURI(jsxToStr(props.children).replace(/\s/g, '-').toLowerCase())
    const id = idFromText()
    ref.current.id = id
  }, [])

  function addHashToUrl(e) {
    console.log(idFromText())
    history.pushState({}, '', '#' + idFromText())
    ref.current.scrollIntoView({ behavior: 'smooth', alignToTop: true })
  }

  return (
    <H3Styled
      ref={ref}
      onClick={addHashToUrl}
    >
      {props.children}
    </H3Styled>
  )
}

const H3Styled = styled.h3`
  cursor: pointer;
  
`
