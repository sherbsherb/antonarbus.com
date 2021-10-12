import { useEffect, useRef } from 'react';

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import './prism.css';

Prism.plugins.NormalizeWhitespace.setDefaults({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true,
  'break-lines': 600, //max number of characters in a line before break
});

export function Code(props) {
  // pass code into props, if not, "jsx" language is used
  const ref = useRef();
  useEffect(() => {
    Prism.highlightElement(ref.current);
  });

  let lang = 'jsx'
  if (props.code) lang = props.code
  if (props.lang) lang = props.lang

  return (
    <pre>
      <code ref={ref} className={`lang-${lang}`}>
        {props.children}
      </code>
    </pre>
  );
}
