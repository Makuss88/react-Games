import React from "react";
import Board from "./Board/Board";
import Header from "./Header";
import { Container } from 'react-bootstrap'

import './index.css';

const Main = () => {

  const [movements, setMovements] = useState*()

  return (
    <Container className="container">
      <Header />
      <Board />
    </Container >
  );
}

export default Main;