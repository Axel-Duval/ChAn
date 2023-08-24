import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  color: {
    white: "#f5f5f5ff",
    black: "#020202ff",
    muted: "#555555ff",
    ultra: "#ffffff24",
    blue: {
      crayola: "#acadbcff",
      bell: "#9b9eceff",
      slate: "#6665ddff",
      ryb: "#473bf0ff",
    },
  },

  font: {
    family: {
      primary: "Poppins",
      secondary: "anaheim",
    },
    size: {
      xs: "12px",
      sm: "15px",
      md: "18px",
      lg: "22px",
      xl: "26px",
      xxl: "36px",
      xxxl: "42px",
    },
    weight: {
      thin: 100,
      extralight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },

  space: {
    xxs: "4px",
    xs: "8px",
    sm: "12px",
    md: "20px",
    lg: "32px",
    xl: "40px",
    xxl: "48px",
  },

  icon: {
    size: {
      sm: "12px",
      md: "16px",
      lg: "26px",
      xl: "80px",
    },
  },

  border: {
    radius: {
      sm: "5px",
      md: "8px",
      lg: "15px",
    },
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
