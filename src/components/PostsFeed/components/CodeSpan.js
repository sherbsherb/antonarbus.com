import { useEffect, useRef } from 'react';

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import './prism.css'

export function CodeSpan(props) {
  let lang = 'jsx'
  if (props.code) lang = props.code
  if (props.lang) lang = props.lang

  const ref = useRef();
  useEffect(() => {
    Prism.highlightElement(ref.current);
  })

  return (
    <code  className={`lang-${lang}`} ref={ref}>{props.children}</code>
  );
}