import { useEffect, useRef } from 'react'
import Prism from 'prismjs'

export function CodeSpan(props) {
  let lang = 'jsx'
  if (props.code) lang = props.code
  if (props.lang) lang = props.lang
  if (props.type) lang = props.type

  const ref = useRef()
  useEffect(() => {
    Prism.highlightElement(ref.current)
  })

  return (
    <code className={`lang-${lang}`} ref={ref} style={{ wordBreak: 'break-all' }}>
      {props.children}
    </code>
  )
}
