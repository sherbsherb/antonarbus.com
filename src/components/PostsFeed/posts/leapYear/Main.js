import React from 'react'
import styled from 'styled-components'
import { Input } from './Input'
import { Output } from './Output'

export function Main() {
  const [yearTypeState, setYearTypeState] = React.useState(null)

  return (
    <DivStyled data-testid="cmpt">
      <H3>Is a leap year?</H3>
      <Input setYearTypeState={setYearTypeState} />
      <Output yearTypeState={yearTypeState} />
    </DivStyled>
  )
}

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 130px;
  font-size: 1.3rem;
`
