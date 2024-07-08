"use client";

import { NavLink } from "./index.styled";
import { usePathname } from "next/navigation";

export type AdminNavProps = {};

const links = [
  {
    name: "Фасоль",
    href: "beans",
  },
  {
    name: "Комбинации",
    href: "combinations",
  },
  {
    name: "Факты",
    href: "facts",
  },
  {
    name: "Рецепты",
    href: "recipes",
  },
  {
    name: "История",
    href: "history",
  },
];

export function Navbar(props: AdminNavProps) {
  const pathname = usePathname();
  return (
    <>
      {links.map((it) => {
        const isActive = pathname.startsWith(`/${it.href}`);
        return (
          <NavLink key={it.href} href={`/${it.href}`} $isActive={isActive}>
            {it.name}
          </NavLink>
        );
      })}
    </>
  );
}
