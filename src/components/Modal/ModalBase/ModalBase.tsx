"use client";

import React from "react";
import * as S from "./index.styled";
import CrossIcon from "@/assets/icons/cross.svg";

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalBase: React.FC<ModalBaseProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <S.Backdrop onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>
          <CrossIcon />
        </S.CloseButton>
        {children}
      </S.ModalContent>
    </S.Backdrop>
  );
};

export default ModalBase;
