import React, { createContext, useContext, useState, ReactNode } from "react";

type BalanceContextType = {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
};

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error("useBalance must be used within a BalanceProvider");
  }
  return context;
};

export const BalanceProvider = ({ children }: { children: ReactNode }) => {
  const [balance, setBalance] = useState(100); // Начальный баланс
  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};
