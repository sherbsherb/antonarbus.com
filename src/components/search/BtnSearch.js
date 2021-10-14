import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { store } from '../..';

export function BtnSearch(props) {
  const { searchBtnClickHandler } = props;

  const dispatch = useDispatch();

  return (
    <ButtonStyled
      onClick={e => {
        searchBtnClickHandler(e);

        dispatch({
          type: 'display found posts',
          foundPosts: store.getState().foundPosts,
        });
      }}
    >
      Search
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  flex-grow: 0;
  font-size: 20px;
  border-radius: 4px;
  outline-style: none;
  border-style: solid;
  border-color: #c0c0c0;
  width: auto;
  padding: 0px 10px;
  margin-left: 10px;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: grey;
    transition: border-color 200ms ease;
  }
`;
