import styled from "styled-components";

export const CardStyle = styled.div`
  width: 200px;
  height: 200px;
  transition: 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
  margin-bottom: 20px;


  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
`

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border: 4px solid gray;
  border-radius: 4px;
`;

export const CardFace = styled(CardStyle)`
  backface-visibility: hidden;
  position: absolute;
`;

export const CardBack = styled(CardStyle)`
  transform: rotateY(180deg);
`;

export const DivStyled = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;

`;