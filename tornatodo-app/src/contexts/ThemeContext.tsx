import { createContext, useState } from "react";

type ThemeType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType;
  setLight: () => void;
  setDark: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

type ThemeProps = { children: React.ReactNode };

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

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
