import styled from 'styled-components';

export function CodeSpan(props) {
  return (
      <code className="language-javascript">{props.children}</code>
  );
}