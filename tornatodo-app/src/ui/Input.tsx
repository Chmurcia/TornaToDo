import styles from "./../styles/Input.module.scss";

type InputProps = {
  placeholder: string;
};

export const Input = ({ placeholder }: InputProps) => {
  return (
    <input type="text" placeholder={placeholder} className={styles.input} />
  );
};
