import Prism from 'prismjs';
import { useEffect } from 'react';
import styled from 'styled-components';

export function Code(props) {
  useEffect(() => {
    Prism.plugins.NormalizeWhitespace.setDefaults({
      'remove-trailing': true,
      'remove-indent': true,
      'left-trim': true,
      'right-trim': true,
      'break-lines': 600, //max number of characters in each line before break
    });

    // Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-jsx">{props.children}</code>
    </pre>
  );
}