import styled from 'styled-components';

export function CodeSpan(props) {
  return (
    <code className={'lang-jsx'}>{props.children}</code>
  );
}