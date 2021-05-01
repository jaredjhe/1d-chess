import { useState } from "react";
import styled from "styled-components";

import { FaChessKing } from "react-icons/fa";

function King(props) {
  return (
    <div>
      <FaChessKing
        style={{ color: props.color === "white" ? "white" : "black" }}
      />
    </div>
  );
}

export default King;
