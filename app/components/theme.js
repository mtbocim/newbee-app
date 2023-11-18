import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffbe0b",
      light: "#ffbe0b",
      contrastText: "#304d4a",
    },
    secondary: {
      main: "#00796b",
    },
    background: {
      // Table head, opage background color
      default: "#ffedd5",
      paper: "#F5F5F5",
    },
    info: {
      main: "#009688",
      dark: "#10776f",
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
});

export default theme;
