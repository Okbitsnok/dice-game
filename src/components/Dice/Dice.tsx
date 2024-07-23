"use client";

import React, { useState } from "react";
import * as S from "./index.styled";
import { useBalance } from "@/providers/BalanceContext";
import DiceFace from "@/components/DiceFace/DiceFace";
import DiceFaceAnimation from "@/components/DiceFace/DiceFaceAnimation";

export default function DiceGame() {
  const { balance, setBalance } = useBalance();
  const [bet, setBet] = useState(1);
  const [selectedBetType, setSelectedBetType] = useState<string | null>(null);
  const [diceRoll, setDiceRoll] = useState<number | null>(1);
  const [resultMessage, setResultMessage] = useState("");
  const [winLossMessage, setWinLossMessage] = useState("");
  const [customNumber, setCustomNumber] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const handleBetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBet(Number(event.target.value));
  };

  const handleBetTypeChange = (type: string) => {
    setSelectedBetType(type);
    setCustomNumber("");
  };

  const handleCustomNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    if (/^[1-6]?$/.test(value)) {
      setCustomNumber(value);
      setSelectedBetType(null);
    } else {
      setCustomNumber("");
    }
  };

  const handleDiceRoll = () => {
    setIsAnimating(true);

    setResultMessage("Кручу верчу...");
    setWinLossMessage("Победить хочу!");

    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);
    let newBalance = balance;
    let winAmount = 0;

    if (customNumber) {
      if (roll === Number(customNumber)) {
        winAmount = bet * 3;
      }
    } else if (selectedBetType) {
      if (
        (selectedBetType === "even" && roll % 2 === 0) ||
        (selectedBetType === "odd" && roll % 2 !== 0) ||
        (selectedBetType === "firstHalf" && roll <= 3) ||
        (selectedBetType === "lastHalf" && roll >= 4)
      ) {
        winAmount = bet * 2;
      }
    }

    setTimeout(() => {
      setResultMessage(`Результат броска кубика: ${roll}.`);
      if (winAmount > 0) {
        newBalance += winAmount;
        setWinLossMessage(`Вы выиграли ${winAmount}`);
      } else {
        newBalance -= bet;
        setWinLossMessage(`Повезет в следующий раз!`);
      }

      setBalance(newBalance);
      setSelectedBetType(null);
      setCustomNumber("");
      setBet(1);
      setIsAnimating(false);
    }, 3000);
  };

  const betTypeLabels: Record<string, string> = {
    even: "четное",
    odd: "нечетное",
    firstHalh: "от 1 до 3",
    lastHalh: "от 4 до 6",
  };

  return (
    <S.DiceContainer>
      <S.Title>{resultMessage || "Сделайте ставку"}</S.Title>
      <S.WinLossMessage>{winLossMessage}</S.WinLossMessage>
      <S.DiceWrapper>
        {isAnimating && <DiceFaceAnimation roll={diceRoll} />}
        <DiceFace roll={diceRoll} />
      </S.DiceWrapper>
      <S.BetSection>
        <S.Label>Размер ставки</S.Label>
        <S.Select value={bet} onChange={handleBetChange}>
          {[1, 5, 10, 15, 20].map((amount) => (
            <option key={amount} value={amount}>
              {amount}.00
            </option>
          ))}
        </S.Select>
      </S.BetSection>
      <S.BetTypeSection>
        <S.Label>Варианты ставок</S.Label>
        <S.BetTypeButtons>
          {["even", "odd", "firstHalh", "lastHalh"].map((type) => (
            <S.BetButton
              key={type}
              isSelected={selectedBetType === type}
              onClick={() => handleBetTypeChange(type)}
              disabled={isAnimating}
            >
              {betTypeLabels[type]}
            </S.BetButton>
          ))}
        </S.BetTypeButtons>
        <S.InputWrapper disabled={isAnimating}>
          <S.InputText>Конкретное число (1-6)</S.InputText>
          <S.Input
            type="number"
            value={customNumber}
            onChange={handleCustomNumberChange}
            disabled={isAnimating}
          />
        </S.InputWrapper>
      </S.BetTypeSection>
      <S.BetButtonPrimary
        onClick={handleDiceRoll}
        disabled={(!selectedBetType && !customNumber) || isAnimating}
      >
        Сделать ставку
      </S.BetButtonPrimary>
    </S.DiceContainer>
  );
}
