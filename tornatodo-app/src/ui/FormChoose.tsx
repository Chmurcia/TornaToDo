import styles from "./../styles/FormChoose.module.scss";

type Side = "left" | "right";

type FormChooseProps = {
  children: React.ReactNode;
  side: Side;
};

export const FormChoose = ({ children, side }: FormChooseProps) => {
  switch (side) {
    case "left":
      return <button className={styles.chooseLeft}>{children}</button>;
    case "right":
      return <button className={styles.chooseRight}>{children}</button>;
    default:
      throw new Error("Unknown side");
  }
};
