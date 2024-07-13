import { useTheme } from "../hooks/useTheme";
import styles from "./../styles/Theme.module.scss";

type Side = "left" | "right";

type ThemeProps = {
  children: React.ReactNode;
  side: Side;
};

export const Theme = ({ children, side }: ThemeProps) => {
  const { setLight, setDark } = useTheme();
  switch (side) {
    case "left":
      return (
        <button onClick={setLight} className={styles.themeLeft}>
          {children}
        </button>
      );
    case "right":
      return (
        <button onClick={setDark} className={styles.themeRight}>
          {children}
        </button>
      );
    default:
      throw new Error("Unknown theme");
  }
};
