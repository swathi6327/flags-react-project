import React from "react";
import styled from "styled-components";

const InputStyled = styled.label`
  display: inline-flex;
  background-color: var(--white);
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 0 2rem;
  flex: 1;
  i {
    margin-right: 1em;
    color: #c4c4c4;
  }
  input {
    flex: 1;
    border: none;
    color: var(--black);
    background-color: var(--white);
    height: 48px;
    line-height: 48px;
    font-size: 0.7em;
    outline: 0;
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
`;

function Input({ ...props }) {
  return (
    <InputStyled>
      <i className="fas fa-search"></i>
      <input type="text" {...props} />
    </InputStyled>
  );
}

export default Input;
