import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;
`;

const Logo = styled.span``;

const Header = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Balance = styled.span``;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.colors.purple[100]};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    background-color: ${(props) => props.theme.colors.purple[100]};
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Content = styled.main<{ isDisabled: boolean }>`
  height: 100%;
  padding: 32px;

  ${(props) =>
    props.isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
      user-select: none;
    `}
`;

const SignInButton = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  width: 100%;
  color: ${(props) => props.theme.colors.white};

  background-color: ${(props) => props.theme.colors.purple[200]};
  border-bottom: 1px solid ${(props) => props.theme.colors.purple[100]};

  &:hover {
    opacity: 0.9;
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  svg {
    color: red;
    height: 24px;
  }
`;

export const S = {
  Content,
  ContentWrap,
  NavWrap,
  Header,
  Container,
  Button,
  Balance,
  LogoutButton,
  Logo,
  SignInButton,
};
