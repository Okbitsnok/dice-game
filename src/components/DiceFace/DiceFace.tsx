import React from "react";
import * as S from "./index.styled";

interface DiceFaceProps {
  roll: number | null;
}

const DiceFace: React.FC<DiceFaceProps> = ({ roll }) => {
  switch (roll) {
    case 1:
      return (
        <S.DiceOne>
          <S.DicePoint />
        </S.DiceOne>
      );
    case 2:
      return (
        <S.DiceTwo>
          <S.DicePoint />
          <S.DicePoint />
        </S.DiceTwo>
      );
    case 3:
      return (
        <S.DiceThree>
          <S.DicePoint />
          <S.DicePoint />
          <S.DicePoint />
        </S.DiceThree>
      );
    case 4:
      return (
        <S.DiceFour>
          <S.DicePoint />
          <S.DicePoint />
          <S.DicePoint />
          <S.DicePoint />
        </S.DiceFour>
      );
    case 5:
      return (
        <S.DiceFive>
          <S.DicePoint />
          <S.DicePoint />
          <S.DicePoint />
          <S.DicePoint />
          <S.DicePoint />
        </S.DiceFive>
      );
    case 6:
      return (
        <S.DiceSix>
          <S.DicePoint />
          <S.DicePoint />
          <S.DicePoint />
          <S.DicePoint />
          <S.DicePoint />
          <S.DicePoint />
        </S.DiceSix>
      );
    default:
      return null;
  }
};

export default DiceFace;
