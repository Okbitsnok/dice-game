"use client";

import React, { PropsWithChildren } from "react";
import { S } from "./index.styled";
import { notFound, redirect } from "next/navigation";
interface PageLayoutProps {
  title: string;
  isError?: boolean;
  isLoading?: boolean;
}
export function PageLayout(props: PropsWithChildren<PageLayoutProps>) {
  const { title, isError, isLoading, children } = props;

  if (isError) {
    redirect(notFound());
  }

  return (
    <S.Container>
      <S.Title>{isLoading ? "Loading..." : title}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
