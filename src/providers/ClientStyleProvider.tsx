"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";

export const ClientStyleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
