import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import colors from "~/lib/theme/colors";

// Create a theme instance.
// @ts-ignore
const theme = createTheme({
  typography: {
    fontSize: 14,
    fontFamily: "'Lato', sans-serif",
    h1: {
      fontSize: "3rem",
      fontFamily: "'CodecPro', sans-serif",
      fontWeight: 800,
      lineHeight: "130%",
      color: colors.NAVY.main,
    },
    h2: {
      fontSize: "1.75rem",
      fontFamily: "'CodecPro', sans-serif",
      fontWeight: 700,
      lineHeight: "130%",
      color: colors.NAVY.main,
    },
    h3: {
      fontSize: "1.25rem",
      fontFamily: "'CodecPro', sans-serif",
      fontWeight: 700,
      lineHeight: "1.5rem",
      color: colors.NAVY.main,
    },
    h4: {
      fontSize: "1.125rem",
      fontFamily: "'CodecPro', sans-serif",
      fontWeight: 700,
      lineHeight: "1.5rem",
      color: colors.NAVY.main,
    },
    h5: {
      // TODO
      fontSize: 14,
      fontWeight: 700,
      color: colors.NAVY.main,
    },
    h6: {
      // TODO
      fontSize: 18,
      fontFamily: "'CodecPro', sans-serif",
      fontWeight: 500,
      color: colors.NAVY.main,
    },
    body1: {
      fontSize: "0.875rem",
      lineHeight: "150%",
      color: colors.NAVY.main,
    },
    body2: {
      fontSize: "0.75rem",
      lineHeight: "130%",
      color: colors.NAVY.main,
    },
    button: {
      fontSize: "0.875rem",
      fontFamily: "'CodecPro', sans-serif",
      fontWeight: 700,
      lineHeight: "130%",
      color: colors.NAVY.main,
    },
  },
  palette: {
    primary: {
      ...colors.ELECTRIC_BLUE,
      contrastText: colors.WHITE,
    },
    secondary: {
      ...colors.YELLOW,
      contrastText: colors.WHITE,
    },
    background: {
      default: colors.WHITE,
    },
    text: {
      primary: colors.NAVY.main,
      secondary: colors.MIRAGE[600],
      disabled: colors.MIRAGE[600],
    },
    action: {
      //default: colors.NAVY.main,
      disabled: colors.MIRAGE[600],
    },
    grey: {
      50: colors.MIRAGE[50],
      100: colors.MIRAGE[50],
      200: colors.MIRAGE[200],
      300: colors.MIRAGE[200],
      400: colors.MIRAGE[300],
      500: colors.MIRAGE[300],
      600: colors.MIRAGE[400],
      700: colors.MIRAGE[400],
      800: colors.MIRAGE[600],
      900: colors.MIRAGE[600],
    },
    info: colors.ELECTRIC_BLUE,
    success: {
      ...colors.SUCCESS,
      dark: colors.SUCCESS.main,
    },
    warning: {
      ...colors.WARNING,
      dark: colors.WARNING.main,
    },
    error: {
      ...colors.ALERT,
      dark: colors.ALERT.main,
    },
  },
  shape: {
    borderRadius: 2,
  },
  shadows: [
    "none",
    "0px 0px 1px -1px rgba(0,0,0,0.2),0px 0px 1px 0px rgba(0,0,0,0.14),0px 0px 3px 0px rgba(0,0,0,0.12)",
    "0px 0px 1px -2px rgba(0,0,0,0.2),0px 0px 2px 0px rgba(0,0,0,0.14),0px 0px 5px 0px rgba(0,0,0,0.12)",
    "0px 0px 3px -2px rgba(0,0,0,0.2),0px 0px 4px 0px rgba(0,0,0,0.14),0px 0px 8px 0px rgba(0,0,0,0.12)",
    "0px 0px 4px -1px rgba(0,0,0,0.2),0px 0px 5px 0px rgba(0,0,0,0.14),0px 0px 10px 0px rgba(0,0,0,0.12)",
    "0px 0px 5px -1px rgba(0,0,0,0.2),0px 0px 8px 0px rgba(0,0,0,0.14),0px 0px 14px 0px rgba(0,0,0,0.12)",
    "0px 0px 5px -1px rgba(0,0,0,0.2),0px 0px 10px 0px rgba(0,0,0,0.14),0px 0px 18px 0px rgba(0,0,0,0.12)",
    "0px 0px 5px -2px rgba(0,0,0,0.2),0px 0px 10px 1px rgba(0,0,0,0.14),0px 0px 16px 1px rgba(0,0,0,0.12)",
    "0px 0px 5px -3px rgba(0,0,0,0.2),0px 0px 10px 1px rgba(0,0,0,0.14),0px 0px 14px 2px rgba(0,0,0,0.12)",
    "0px 0px 6px -3px rgba(0,0,0,0.2),0px 0px 12px 1px rgba(0,0,0,0.14),0px 0px 16px 2px rgba(0,0,0,0.12)",
    "0px 0px 6px -3px rgba(0,0,0,0.2),0px 0px 14px 1px rgba(0,0,0,0.14),0px 0px 18px 3px rgba(0,0,0,0.12)",
    "0px 0px 7px -4px rgba(0,0,0,0.2),0px 0px 15px 1px rgba(0,0,0,0.14),0px 0px 20px 3px rgba(0,0,0,0.12)",
    "0px 0px 8px -4px rgba(0,0,0,0.2),0px 0px 17px 2px rgba(0,0,0,0.14),0px 0px 22px 4px rgba(0,0,0,0.12)",
    "0px 0px 8px -4px rgba(0,0,0,0.2),0px 0px 19px 2px rgba(0,0,0,0.14),0px 0px 24px 4px rgba(0,0,0,0.12)",
    "0px 0px 9px -4px rgba(0,0,0,0.2),0px 0px 21px 2px rgba(0,0,0,0.14),0px 0px 26px 4px rgba(0,0,0,0.12)",
    "0px 0px 9px -5px rgba(0,0,0,0.2),0px 0px 22px 2px rgba(0,0,0,0.14),0px 0px 28px 5px rgba(0,0,0,0.12)",
    "0px 0px 10px -5px rgba(0,0,0,0.2),0px 0px 24px 2px rgba(0,0,0,0.14),0px 0px 30px 5px rgba(0,0,0,0.12)",
    "0px 0px 11px -5px rgba(0,0,0,0.2),0px 0px 26px 2px rgba(0,0,0,0.14),0px 0px 32px 5px rgba(0,0,0,0.12)",
    "0px 0px 11px -5px rgba(0,0,0,0.2),0px 0px 28px 2px rgba(0,0,0,0.14),0px 0px 34px 6px rgba(0,0,0,0.12)",
    "0px 0px 12px -6px rgba(0,0,0,0.2),0px 0px 29px 2px rgba(0,0,0,0.14),0px 0px 36px 6px rgba(0,0,0,0.12)",
    "0px 0px 13px -6px rgba(0,0,0,0.2),0px 0px 31px 3px rgba(0,0,0,0.14),0px 0px 38px 7px rgba(0,0,0,0.12)",
    "0px 0px 13px -6px rgba(0,0,0,0.2),0px 0px 33px 3px rgba(0,0,0,0.14),0px 0px 40px 7px rgba(0,0,0,0.12)",
    "0px 0px 14px -6px rgba(0,0,0,0.2),0px 0px 35px 3px rgba(0,0,0,0.14),0px 0px 42px 7px rgba(0,0,0,0.12)",
    "0px 0px 14px -7px rgba(0,0,0,0.2),0px 0px 36px 3px rgba(0,0,0,0.14),0px 0px 44px 8px rgba(0,0,0,0.12)",
    "0px 0px 15px -7px rgba(0,0,0,0.2),0px 0px 38px 3px rgba(0,0,0,0.14),0px 0px 46px 8px rgba(0,0,0,0.12)",
  ],
});

export type Theme = typeof theme;

export default theme;
