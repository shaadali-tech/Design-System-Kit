import styled from "styled-components";

export const Card = styled.div`
  padding: 16px;
  border-radius: 10px;

  background: ${({ theme }) =>
    theme.mode === "light" ? "#f9fafb" : "#1f2937"};
`;
