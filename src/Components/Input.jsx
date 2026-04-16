import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;
