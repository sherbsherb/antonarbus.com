import { useEffect, useRef } from 'react'

import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-python'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import './prism.css'

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
