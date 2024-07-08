import { styled } from "styled-components";

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.colors.darkgreen};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.01);
  }
`;

export const S = {
  Card,
};
