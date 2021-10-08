import styled from 'styled-components';

export function Img(props) {
  return <ImgStyled src={props.src}  width={props.width}/>;
}

const ImgStyled = styled.img.attrs(props => ({
  // we can define static props
  src: props.src,
  alt: props.alt || "alt text",
  // or we can define dynamic ones
  width: props.width || "80%",
  height: "auto",
}))`
  box-shadow: #898989a3 0px 0px 7px 0px;
  margin: 0 auto;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  
  @media screen and (max-width: 480px) { 
    min-width: 100%; 
  }
`;