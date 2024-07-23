"use client";

import { useState, PropsWithChildren, useEffect } from "react";
import { SessionProvider, useSession, signOut } from "next-auth/react";
import { S } from "./index.styled";
import { BalanceProvider, useBalance } from "@/providers/BalanceContext";
import AuthModal from "@/components/Modal/AuthModal/AuthModal";
import LogoutIcon from "@/assets/icons/logout.svg";
import { convertToNumberWithSpaces } from "@/utils/convertToNumberWithSpaces";

export type LayoutProps = {};

const Header = ({
  session,
  setAuthModalOpen,
}: {
  session: any;
  setAuthModalOpen: (open: boolean) => void;
}) => {
  const { balance } = useBalance();

  return (
    <S.NavWrap>
      <S.Logo>Test Game</S.Logo>
      <S.Header>
        {session ? (
          <>
            <S.Balance>
              {`${convertToNumberWithSpaces(String(balance))} (TND)`}
            </S.Balance>
            <S.LogoutButton onClick={() => signOut()}>
              <LogoutIcon />
            </S.LogoutButton>
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

  return (
    <SessionProvider>
      <BalanceProvider>
        <S.Container>
          <HeaderWithSession setAuthModalOpen={setAuthModalOpen} />
          <S.ContentWrap>
            <ContentWithSession isAuthModalOpen={isAuthModalOpen}>
              {children}
            </ContentWithSession>
          </S.ContentWrap>
        </S.Container>
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setAuthModalOpen(false)}
        />
      </BalanceProvider>
    </SessionProvider>
  );
}

const HeaderWithSession = ({
  setAuthModalOpen,
}: {
  setAuthModalOpen: (open: boolean) => void;
}) => {
  const { data: session } = useSession();

  return <Header session={session} setAuthModalOpen={setAuthModalOpen} />;
};

const ContentWithSession = ({
  children,
  isAuthModalOpen,
}: PropsWithChildren<{ isAuthModalOpen: boolean }>) => {
  const { data: session } = useSession();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!session && !isAuthModalOpen) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [session, isAuthModalOpen]);

  return (
    <S.Content isDisabled={!session && !isAuthModalOpen}>{children}</S.Content>
  );
};
