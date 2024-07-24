"use client";

import { useState, PropsWithChildren, useEffect } from "react";
import { S } from "./index.styled";
import { BalanceProvider, useBalance } from "@/providers/BalanceContext";
import AuthModal from "@/components/Modal/AuthModal/AuthModal";
import { convertToNumberWithSpaces } from "@/utils/convertToNumberWithSpaces";
import axios from "axios";

export type LayoutProps = {};

const Header = ({
  user,
  setAuthModalOpen,
}: {
  user: any;
  setAuthModalOpen: (open: boolean) => void;
}) => {
  const { balance } = useBalance();

  return (
    <S.NavWrap>
      <S.Logo>Test Game</S.Logo>
      <S.Header>
        {user ? (
          <>
            <S.Balance>
              {`${convertToNumberWithSpaces(String(balance))} (TND)`}
            </S.Balance>
          </>
        ) : (
          <S.SignInButton onClick={() => setAuthModalOpen(true)}>
            Вход
          </S.SignInButton>
        )}
      </S.Header>
    </S.NavWrap>
  );
};

export default function Layout({ children }: PropsWithChildren) {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get(
          "https://api.lettobet.dev.bet4skill.com/api/auth/me",
          { withCredentials: true },
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    checkSession();
  }, []);

  return (
    <BalanceProvider>
      <S.Container>
        <Header user={user} setAuthModalOpen={setAuthModalOpen} />
        <S.ContentWrap>
          <ContentWithSession isAuthModalOpen={isAuthModalOpen} user={user}>
            {children}
          </ContentWithSession>
        </S.ContentWrap>
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setAuthModalOpen(false)}
        />
      </S.Container>
    </BalanceProvider>
  );
}

const ContentWithSession = ({
  children,
  isAuthModalOpen,
  user,
}: PropsWithChildren<{ isAuthModalOpen: boolean; user: any }>) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!user && !isAuthModalOpen) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [user, isAuthModalOpen]);

  return (
    <S.Content isDisabled={!user && !isAuthModalOpen}>{children}</S.Content>
  );
};
