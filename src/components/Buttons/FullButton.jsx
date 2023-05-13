import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius6"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#CB3F3A")};
  background-color: ${(props) => (props.border ? "transparent" : "#CB3F3A")};
  width: 100%;
  padding: 15px 25px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "black")};
    border: 1px solid black;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;

