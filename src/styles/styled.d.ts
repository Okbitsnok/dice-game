import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      transparent: string;
      black: string;
      white: string;
      grey: {
        100: string;
        200: string;
      };
      green: {
        100: string;
        200: string;
        300: string;
      };
      orange: {
        100: string;
        200: string;
      };
      purple: {
        100: string;
        200: string;
        300: string;
      };
    };
  }
}
