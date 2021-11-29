import React, { useState } from "react";
import Board from "./Board/Board";
import Header from "./Header";
import { Container } from 'react-bootstrap'

import './index.css';

const Main = () => {

  const [movements, setMovements] = useState(0)

  return (
    <Container className="container">
      <Header />
      <Board setMovements={setMovements} />
    </Container >
  );
}

export default Main;