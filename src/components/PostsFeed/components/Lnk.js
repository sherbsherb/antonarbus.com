import styled from 'styled-components'

export function Lnk(props) {
  return (
    <AStyled href={props.link || props.path || props.url || props.src} target="_blank">
      {props.text}
      {props.children}
    </AStyled>
  )
}

const AStyled = styled.a`
  color: #0098f7;
`
