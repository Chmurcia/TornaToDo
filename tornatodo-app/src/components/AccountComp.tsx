import { Button } from "../ui/Button";
import { Theme } from "../ui/Theme";
import styles from "./../styles/AccountComp.module.scss";

type AccProps = {
  name: string;
};

export const AccountComp = ({ name }: AccProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.img}></div>
      <p className={styles.name}>{name}</p>
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
