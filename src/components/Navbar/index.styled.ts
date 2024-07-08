import { styled } from "styled-components";
import Link from "next/link";

export const NavLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  height: min-content;

  color: ${(props) => props.theme.colors.darkgreen};
  font-weight: 550;

  ${(props) =>
    props.$isActive &&
    `
    border-bottom: 2px solid ${props.theme.colors.darkgreen};
  `}

  &:hover {
    opacity: 0.9;
    border-bottom: 2px solid ${(props) => props.theme.colors.darkgreen};
  }
`;
