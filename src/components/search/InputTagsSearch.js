import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export function InputTagsSearch(props) {

  const tagsInputState = useSelector(state => state.tagsInputReducer);
  const dispatch = useDispatch();
  
  return (
    <InputStyled>
      <input
        type="search"
        placeholder={'Filter tags'}

        value={tagsInputState}
        onChange={e => {
          const inputVal = e.target.value;

          dispatch({ 
            type: 'store tags input val', 
            tagsInputVal: inputVal 
          });

          dispatch({ 
            type: 'filter tags', 
            tagsInputVal: inputVal 
          });

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
    cursor: text;

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
