import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e57373",
      contrastText: "#ffffff",
      dark: "#33333314",
    },
    secondary: {
      main: "#26a69a",
      contrastText: "#ffffff",
    },
  },
});

export default theme;
