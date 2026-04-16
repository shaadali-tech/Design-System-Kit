import styled from "styled-components";

export const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;

  background: ${({ theme }) => theme.primary};
  color: white;
`;
