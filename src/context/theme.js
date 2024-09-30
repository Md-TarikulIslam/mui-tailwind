import { createTheme } from "@mui/material/styles";

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light", // Important for built-in MUI light mode
    primary: {
      main: "#2795d0", // Light mode primary color
    },
    secondary: {
      main: "#2795d0", // Light mode secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  background: {
    default: "#eceff1", // Dark background color
    paper: "#fff", // Paper component background color in dark mode
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark", // Important for built-in MUI dark mode
    primary: {
      main: "#95cdf7", // Dark mode primary color
    },
    secondary: {
      main: "#95cdf7", // Dark mode secondary color
    },
    background: {
      default: "#121212", // Dark background color
      paper: "#000000", // Paper component background color in dark mode
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});
