import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#0065B5",
      secondary: "#353F50",
    },
    primary: {
      main: "#0065B5",
      light: "#66A3D3",
      A100: "#0275D8",
      A200: "#99C1E1",
      A400: "#1A73E8",
    },
    secondary: {
      main: "#353F50",
      light: "#5F738C",
      A100: "#667085",
    },
    info: {
      dark: "#F3F5F6",
      main: "#FFFFFF",
      A100: "#DADADA",
    },
    error: {
      main: "#FB5A36",
    },
  },
});
