import styled from "styled-components";

export const DiceFaceContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;
export const Dice = styled.ul`
  width: 94px;
  height: 94px;
  padding: 18px 24px;
  border-radius: 6px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin: 18px;
  background-color: ${(props) => props.theme.colors.white};
`;
export const DicePoint = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #000;
    border-radius: 50%;
  }
`;

export const DiceOne = styled(Dice)`
  & > ${DicePoint} {
    grid-column: 2;
    grid-row: 2;
  }
`;

export const DiceTwo = styled(Dice)`
  & > ${DicePoint}:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  & > ${DicePoint}:nth-child(2) {
    grid-column: 3;
    grid-row: 3;
  }
`;

export const DiceThree = styled(Dice)`
  & > ${DicePoint}:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  & > ${DicePoint}:nth-child(2) {
    grid-column: 2;
    grid-row: 2;
  }
  & > ${DicePoint}:nth-child(3) {
    grid-column: 3;
    grid-row: 3;
  }
`;

export const DiceFour = styled(Dice)`
  & > ${DicePoint}:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  & > ${DicePoint}:nth-child(2) {
    grid-column: 3;
    grid-row: 1;
  }
  & > ${DicePoint}:nth-child(3) {
    grid-column: 1;
    grid-row: 3;
  }
  & > ${DicePoint}:nth-child(4) {
    grid-column: 3;
    grid-row: 3;
  }
`;

export const DiceFive = styled(Dice)`
  & > ${DicePoint}:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  & > ${DicePoint}:nth-child(2) {
    grid-column: 3;
    grid-row: 1;
  }
  & > ${DicePoint}:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
  }
  & > ${DicePoint}:nth-child(4) {
    grid-column: 1;
    grid-row: 3;
  }
  & > ${DicePoint}:nth-child(5) {
    grid-column: 3;
    grid-row: 3;
  }
`;

export const DiceSix = styled(Dice)`
  & > ${DicePoint}:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  & > ${DicePoint}:nth-child(2) {
    grid-column: 3;
    grid-row: 1;
  }
  & > ${DicePoint}:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
  }
  & > ${DicePoint}:nth-child(4) {
    grid-column: 3;
    grid-row: 2;
  }
  & > ${DicePoint}:nth-child(5) {
    grid-column: 1;
    grid-row: 3;
  }
  & > ${DicePoint}:nth-child(6) {
    grid-column: 3;
    grid-row: 3;
  }
`;
