import styled from "styled-components";

export const Board = styled.ul`
  position: relative;
  left: -200px;
  padding: 10px;
  height: 500px;
`;

export const TileIl = styled.li`
  width: 100px;
  height: 100px;
  position: absolute;
  background: #ec6f66;
  border: 4px solid black;
  display: grid;
  place-items: center;
  font-size: 40px;
`;

export const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 10px;
`;