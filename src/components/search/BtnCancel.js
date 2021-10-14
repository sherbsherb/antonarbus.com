import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { store } from '../..';

export function BtnCancel(props) {
  const { closeFoundPostsContainer } = props;

  const dispatch = useDispatch()

  return (
    <ButtonStyled
      onClick={e => {
        e.preventDefault();
        closeFoundPostsContainer();

        dispatch({
          type: 'display all posts'
        });

      }}
    />
  );
}

const ButtonStyled = styled.button`
  border: none;
  position: absolute;
  width: 32px;
  height: 32px;
  right: 100px;
  top: 4px;
  background-color: transparent;
  cursor: pointer;

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20px;
    width: 4px;
    background-color: #dcdcdc5c;
  }

  &:hover:before,
  &:hover:after {
    background-color: #ff6565bd;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
