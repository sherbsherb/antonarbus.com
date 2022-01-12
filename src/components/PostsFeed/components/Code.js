import { useEffect, useRef } from 'react'

import './prism.css'
import Prism from 'prismjs'
// import * as Prism from 'prismjs'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-apacheconf'

Prism.plugins.NormalizeWhitespace.setDefaults({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true,
  'break-lines': 600, // max number of characters in a line before break
  // indent: 0,
  // 'remove-initial-line-feed': true,
})

export function Code(props) {
  // pass code into props, if not, "jsx" language is used
  const ref = useRef()
  useEffect(() => {
    Prism.highlightElement(ref.current)
  })

  let lang = 'jsx'
  if (props.code) lang = props.code
  if (props.lang) lang = props.lang

  return (
    <pre>
      <code ref={ref} className={`lang-${lang}`}>
        {props.children}
      </code>
    </pre>
  )
}
