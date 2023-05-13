import React from "react";
import styled from "styled-components";

export default function CardsTitle({title}) {
  return (
    <TheTitle>
      {title}
    </TheTitle>
  );
}

const TheTitle = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 20px 0px;
  font-weight: 600;
`
