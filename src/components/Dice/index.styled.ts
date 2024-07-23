import styled from "styled-components";

export const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 340px;

  margin-top: 100px;

  @media (max-width: 1024px) {
    margin-top: 56px;
  }

  @media (max-width: 768px) {
    margin-top: 36px;
  }

  @media (max-width: 425px) {
    margin-top: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const WinLossMessage = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 0;
`;

export const BetSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  align-self: flex-start;
`;

export const Select = styled.select`
  box-sizing: border-box;
  padding: 8px 12px;
  font-size: 16px;
  width: 100%;
  border-radius: 6px;
`;

export const BetTypeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const BetTypeButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  width: 100%;
`;

export const BetButton = styled.button<{ isSelected: boolean }>`
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  width: 100%;
  color: ${(props) => props.theme.colors.white};

  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors.orange[100]
      : props.theme.colors.purple[200]};
  border-bottom: 1px solid
    ${(props) =>
      props.isSelected
        ? props.theme.colors.orange[200]
        : props.theme.colors.purple[100]};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    filter: brightness(0.6);
    cursor: not-allowed;
  }
`;

export const InputWrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.purple[200]};

  ${(props) =>
    props.disabled &&
    `
    filter: brightness(0.6);
    cursor: not-allowed;
  `}
`;

export const InputText = styled.p``;

export const Input = styled.input`
  font-size: 16px;
  text-align: center;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.purple[200]};
  border: 1px solid ${(props) => props.theme.colors.purple[100]};
  color: white;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:hover,
  &:focus {
    appearance: none;
    -moz-appearance: textfield;
  }
`;

export const BetButtonPrimary = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.green[200]};
  border-bottom: 1px solid ${(props) => props.theme.colors.green[300]};
  color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  width: 100%;
  &:disabled {
    background-color: ${(props) => props.theme.colors.green[200]};
    filter: brightness(0.6);
    cursor: not-allowed;
  }
`;

export const DiceWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.purple[100]};
  border-radius: 6px;
  margin: 40px 0 30px;
`;
