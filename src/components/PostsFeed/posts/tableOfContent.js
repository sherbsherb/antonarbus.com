import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { postsArr } from '../postsArr'

export function TblOfContent() {
  return (
    <>
      <Ul>
        {postsArr.map(o => (
          <li style={{ listStyleType: 'none' }} key={o.id}>
            <Link to={`/post/${o.uriPostName}`}>
              {o.postNum < 10 ? `0${o.postNum}` : o.postNum} - {o.titleTxt}
            </Link>
          </li>
        ))}
      </Ul>
    </>
  )
}

const Ul = styled.ul`
  li::marker {
    content: '';
    margin-right: 3px;
  }
`

const toRender = <TblOfContent />

export const tableOfContent = {
  title: 'Table of content',
  date: '2021.10.28',
  tagsArr: ['other'],
  postParts: [
    {
      type: 'output',
      val: toRender,
    },
  ],
}
