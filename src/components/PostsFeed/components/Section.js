import styled from 'styled-components';

export function Section(props) {
  return <SectionStyled className="section">{props.children}</SectionStyled>;
}

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column; /* direction to stack els */
  flex-wrap: nowrap; /* wrap or not */
  justify-content: flex-start; /* align on main-axis */
  align-items: left; /* align on cross-axis */
  /* align-content: stretch; align the flex lines, similar to align-items, but aligns flex lines (group els as if they were one el) */
  border-radius: 10px;
  font-size: 16px;
  padding: 20px;
  background: white;
  position: relative;
  line-height: 1.8;
  background-color: transparent;
  background-image: linear-gradient(to right bottom,rgb(255 255 255 / 90%),rgb(255 255 255 / 90%));
  box-shadow: rgb(122 122 122 / 20%) 6px 6px 20px;
`;