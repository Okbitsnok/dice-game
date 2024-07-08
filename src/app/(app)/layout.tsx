"use client";

import { PropsWithChildren } from "react";
import { S } from "./index.styled";
import { Navbar } from "@/components/Navbar/Navbar";
import Logo from "public/image/logo.png";

export type LayoutProps = {};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <S.Container>
      <S.NavWrap>
        <S.Logo src={Logo.src} alt="beans" width={54} height={54} />
        <S.Navigation>
          <Navbar />
        </S.Navigation>
      </S.NavWrap>

      <S.ContentWrap>
        <S.Content>{children}</S.Content>
      </S.ContentWrap>
    </S.Container>
  );
}
