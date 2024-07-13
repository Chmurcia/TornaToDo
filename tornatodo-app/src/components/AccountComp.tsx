import styles from "./../styles/AccountComp.module.scss";

import { Button } from "../ui/Button";
import { Theme } from "../ui/Theme";
import { useTheme } from "../hooks/useTheme";

export const AccountComp = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${styles.box} ${
        theme === "light" ? styles.light : styles.dark
      }`}
    >
      <div className={styles.img}></div>
      <p className={styles.name}>Username_Superb_Name</p>
      <div className={styles.buttons}>
        <Button type="purple" size="huge">
          Change Username
        </Button>
        <Button type="purple" size="huge">
          Change Password
        </Button>
      </div>
      <div className={styles.themes}>
        <Theme side="left">White</Theme>
        <Theme side="right">Dark</Theme>
      </div>
    </div>
  );
};
