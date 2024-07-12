import { Button } from "../ui/Button";
import { FormChoose } from "../ui/FormChoose";
import { Input } from "../ui/Input";
import styles from "./../styles/Form.module.scss";

export const Form = () => {
  return (
    <div className={styles.box}>
      <div className={styles.choose}>
        <FormChoose side="left">Sign Up</FormChoose>
        <FormChoose side="right">Sign In</FormChoose>
      </div>
      <form className={styles.group}>
        <div className={styles.inputs}>
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
        </div>
        <div className={styles.buttons}>
          <Button type="white" size="small">
            Sign Up
          </Button>
          <Button type="white" size="small">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
