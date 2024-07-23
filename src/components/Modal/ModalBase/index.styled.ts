import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.purple[300]};
  padding: 52px 40px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.purple[100]};
  max-width: 430px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 500px) {
    height: 100%;
    border: none;
    border-radius: initial;
    display: flex;
    align-items: center;
    min-width: 100%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  svg {
    color: ${(props) => props.theme.colors.grey[100]};
    height: 16px;
  }
`;
