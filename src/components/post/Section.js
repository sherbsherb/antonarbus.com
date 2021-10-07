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
  border: 1px solid #d2d2d2;
  border-radius: 6px;
  margin: 0 auto;
  width: 90vw;
  max-width: 800px;
  font-size: 14px;
  padding: 20px;
  background: white;
  color: black;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
`;