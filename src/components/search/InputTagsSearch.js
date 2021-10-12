import styled from 'styled-components';

export function InputTagsSearch(props) {
  const { state, setState } = props;
  const { foundTags, inputFilterTagsVal } = state;

  return (
    <InputStyled>
      <input
        type="search"
        placeholder={'Filter tags'}
        value={inputFilterTagsVal}
        onChange={e => {
          const inputVal = e.target.value;
          const reducedTags = foundTags.filter(tag => tag.toUpperCase().includes(inputVal.toUpperCase()));

          setState({ ...state, inputFilterTagsVal: inputVal, filteredTags: reducedTags });
        }}
      />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  text-align: center;

  input {
    max-width: 300px;
    margin-bottom: 10px;
    padding: 5px;
    border-width: 2px;
    border-color: #c0c0c0;
    border-style: solid;
    border-radius: 4px;
    outline-style: none;
    min-width: 0;

    &:hover {
      border-color: grey;
      transition: border-color 200ms ease;
    }

    &:focus {
      border-color: rgba(0, 157, 214, 1);
    }

    &::-webkit-search-cancel-button {
      cursor: pointer;
    }
  }
`;
