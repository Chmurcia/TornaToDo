import { useTheme } from "../hooks/useTheme";

export const Logo = () => {
  const { theme } = useTheme();

  return theme === "light" ? (
    <img src="./../../Logo2.svg" alt="logo" />
  ) : (
    <img src="./../../Logo.svg" alt="logo" />
  );
};
