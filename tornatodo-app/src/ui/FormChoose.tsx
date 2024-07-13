import { useTheme } from "../hooks/useTheme";
import styles from "./../styles/FormChoose.module.scss";

type Side = "left" | "right";

type FormChooseProps = {
  children: React.ReactNode;
  side: Side;
};

export const FormChoose = ({ children, side }: FormChooseProps) => {
  const { theme } = useTheme();
  switch (side) {
    case "left":
      return <button className={styles.chooseLeft}>{children}</button>;
    case "right":
      return (
        <button
          className={`${styles.chooseRight} ${
            theme === "light" ? styles.light : styles.dark
          }`}
        >
          {children}
        </button>
      );
    default:
      throw new Error("Unknown side");
  }
};
