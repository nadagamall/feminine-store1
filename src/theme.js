import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// تصميم الوضعين النهاري والليلي
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // ألوان للوضع النهاري
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
          // ألوان للوضع الليلي
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
            primary: "#C0C0C0", // لون النص في الوضع الليلي
          },
        }),
  },
});

// السياق الخاص بتغيير الوضع
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// الخطاف لإدارة الوضع
export const useMode = () => {
  const [mode, setMode] = useState(() =>
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  // عند تغيير الوضع، نقوم بتخزينه في localStorage
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  // التبديل بين الوضعين
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  // إنشاء السمة بناءً على الوضع الحالي
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
