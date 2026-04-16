import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  background: ${({ theme, variant }) =>
    variant === "secondary"
      ? theme.secondary
      : variant === "danger"
        ? theme.danger
        : theme.primary};

  color: white;
`;
