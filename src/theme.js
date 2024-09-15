import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          mycolor: {
            mainn: "#F6F9FC",
          },
          bg: {
            main: "#f6f6f6",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
          text: {
            primary: "#000000", // لون النص في الوضع النهاري
          },
        }
      : {
          // palette values for dark mode
          mycolor: {
            mainn: "#252b32",
          },
          bg: {
            main: "#1D2021",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#ffffff", // لون النص في الوضع الليلي
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
