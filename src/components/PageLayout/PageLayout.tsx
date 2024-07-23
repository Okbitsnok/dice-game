"use client";

import React, { PropsWithChildren } from "react";
import { S } from "./index.styled";
import { notFound, redirect } from "next/navigation";
interface PageLayoutProps {
  isError?: boolean;
  isLoading?: boolean;
}
export function PageLayout(props: PropsWithChildren<PageLayoutProps>) {
  const { isError, isLoading, children } = props;

  if (isError) {
    redirect(notFound());
  }

  return <S.Container>{children}</S.Container>;
}
