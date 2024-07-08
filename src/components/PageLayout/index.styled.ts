import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.darkgreen};
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const S = {
  Container,
  Content,
  Title,
};
