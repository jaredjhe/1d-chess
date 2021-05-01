import { useState } from "react";
import styled from "styled-components";

import King from "./pieces/King"
import Queen from "./pieces/Queen"
import Rook from "./pieces/Rook"
import Bishop from "./pieces/Bishop"
import Knight from "./pieces/Knight"
import Pawn from "./pieces/Pawn"

const LightSquare = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f0d9b5;
`;

const DarkSquare = styled.div`
  width: 80px;
  height: 80px;
  background-color: #b58863;
`;

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const boardValues = {
  wK: <King color="white" />,
  wQ: <Queen color="white" />,
  wR: <Rook color="white" />,
  wB: <Bishop color="white" />,
  wN: <Knight color="white" />,
  wP: <Pawn color="white" />,
  bP: <Pawn color="black" />,
  bN: <Knight color="black" />,
  bB: <Bishop color="black" />,
  bR: <Rook color="black" />,
  bQ: <Queen color="black" />,
  bK: <King color="black" />,
};

function Board() {
  const [board, setBoard] = useState([
    "wK",
    "wQ",
    "wR",
    "wB",
    "wN",
    "wP",
    "NA",
    "NA",
    "NA",
    "NA",
    "bP",
    "bN",
    "bB",
    "bR",
    "bQ",
    "bK",
  ]);

  const renderBoard = (board) => {
    
  };

  return (
    <BoardWrapper>
      <LightSquare />
      <DarkSquare />
      <LightSquare />
      <DarkSquare />
      <LightSquare />
      <DarkSquare />
      <LightSquare />
      <DarkSquare />
      <LightSquare />
      <DarkSquare />
      <LightSquare />
      <DarkSquare />
      <LightSquare />
      <DarkSquare />
      <LightSquare />
      <DarkSquare />
    </BoardWrapper>
  );
}

export default Board;
