import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4C5E57",
    },
    secondary: {
      main: "#F0D233",
    },
    background: {
      default: "#EDEFEE",
      paper: "#4C5E57",
    },
    text: {
      primary: "#ffffff",
      secondary: "#F0D233",
      disabled: "#b5b5b5",
      // hint: '#E69E75',
    },
    error: {
      main: "#c53636",
    },
    warning: {
      main: "#e06707",
    },
    success: {
      main: "#417944",
    },
  },
  typography: {
    h1: {
      fontFamily: "Markazi Text, Times New Roman, serif",
    },
    h2: {
      fontFamily: "Markazi Text, Times New Roman, serif",
    },
    h3: {
      fontFamily: "Markazi Text, Times New Roman, serif",
    },
    h4: {
      fontFamily: "Markazi Text, Times New Roman, serif",
    },
    h5: {
      fontFamily: "Karla, Helvetica, Arial, sans-serif",
    },
    h6: {
      fontFamily: "Karla, Helvetica, Arial, sans-serif",
    },
    subtitle1: {
      fontFamily: "Karla, Helvetica, Arial, sans-serif",
    },
    subtitle2: {
      fontFamily: "Karla, Helvetica, Arial, sans-serif",
    },
    body1: {
      fontFamily: "Karla, Helvetica, Arial, sans-serif",
    },
    body2: {
      fontFamily: "Karla, Helvetica, Arial, sans-serif",
    },
    button: {
      fontFamily: "Karla, Helvetica, Arial, sans-serif",
    },
    caption: {
      fontFamily: "Karla, Helvetica, Arial, sans-serif",
    },
    overline: {
      fontFamily: "Karla, Helvetica, Arial, sans-serif",
    },
  },
});
