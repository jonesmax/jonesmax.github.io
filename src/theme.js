import { createTheme } from "@mui/material/styles";
export default createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(0, 0, 0, 1)",
      main:"rgba(0, 0, 0, 1)",
      dark: "rgba(0, 0, 0, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(255,255,255, 1)",
      main: "rgba(255,255,255, 1)",
      dark: "rgba(255,255,255, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});
