import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.grey[100]};
  border-radius: 6px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.purple[200]};
  border-bottom: 1px solid ${(props) => props.theme.colors.purple[100]};
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;

  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.purple[100]};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.purple[200]};
    cursor: not-allowed;
  }

  svg {
    animation: ${rotate} 1s linear infinite;

    color: ${(props) => props.theme.colors.grey[100]};
    width: 16px;
    height: 16px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
`;
