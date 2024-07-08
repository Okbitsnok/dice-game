"use client";

import React from "react";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { ClientStyleProvider } from "@/providers/ClientStyleProvider";
import StyledComponentsRegistry from "@/lib/registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <StyledComponentsRegistry>
          <ClientStyleProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </ClientStyleProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
