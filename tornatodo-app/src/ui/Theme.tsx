import styles from "./../styles/Theme.module.scss";

type Side = "left" | "right";

type ThemeProps = {
  children: React.ReactNode;
  side: Side;
};

export const Theme = ({ children, side }: ThemeProps) => {
  switch (side) {
    case "left":
      return <button className={styles.themeLeft}>{children}</button>;
    case "right":
      return <button className={styles.themeRight}>{children}</button>;
    default:
      throw new Error("Unknown theme");
  }
};
