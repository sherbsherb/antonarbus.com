import styled from "styled-components";

export function SearchPreviewItem(props) {

  return (
    <SearchPreviewStyled className="post-preview">
      <h4>{props.title}</h4>
      <summary>{props.summary}</summary>
    </SearchPreviewStyled>
  );
}

const SearchPreviewStyled = styled.div`
  background-color: #e8e8e8;
  margin: 10px 0px;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px;
  max-height: 106px;
  overflow-y: auto;

  &:hover {
    background-color: lightgrey;
  }

  h4 {
    margin-bottom: 5px;
  }

  summary {
    color: #3f3f3f;
    font-size: 14px;
  }
`;