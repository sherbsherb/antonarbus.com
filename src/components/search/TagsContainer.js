import styled from 'styled-components';
import { Tag } from '../post/Tag';
import { InputTagsSearch } from './InputTagsSearch';

export function TagsContainer({ state, setState }) {
  const { filteredTags } = state;
  const isMac = navigator.platform.indexOf('Mac') > -1
  return (
    <TagsContainerStyled isMac={isMac}>
      <InputTagsSearch state={state} setState={setState}/>
      {filteredTags.map(tag => (
        <Tag tag={tag} key={tag} state={state} setState={setState}>
          {tag}
        </Tag>
      ))}
    </TagsContainerStyled>
  );
}

const TagsContainerStyled = styled.div`
  background: #e8e8e8;
  margin: 10px 0px;
  border-radius: 4px;
  overflow-y: auto;
  max-height: ${props => props.isMac ? "140px" : "150px"};
  height: auto;
  padding: 7px;
  padding-bottom: 3px;
`;
