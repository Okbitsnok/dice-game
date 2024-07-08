import { styled, keyframes } from "styled-components";
import Image from "next/image";

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: block;
  height: 100%;
`;

const NavWrap = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.darkgreen};
  padding: 18px 20px;

  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 18px;
`;

const Logo = styled(Image)`
  animation: ${rotate} 4s infinite linear;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Content = styled.main`
  padding: 32px;
  overflow: auto;
`;

export const S = {
  Content,
  ContentWrap,
  NavWrap,
  Navigation,
  Container,
  Logo,
};
