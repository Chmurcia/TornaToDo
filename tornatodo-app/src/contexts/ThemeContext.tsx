import { createContext, useContext, useState } from "react";

type ThemeType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType;
  setLight: () => void;
  setDark: () => void;
};

const ThemeContext = createContext<ThemeContextType | ThemeType>("light");

type ThemeProps = { children: React.ReactNode };

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const setLight = () => {
    setTheme("light");
  };
  const setDark = () => {
    setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setLight, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeContext!");
  return context;
};
