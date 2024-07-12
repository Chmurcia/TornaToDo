import styles from "./../styles/Button.module.scss";

type BtnType = "white" | "purple";
type BtnSize = "small" | "huge";

type BtnProps = {
  children: React.ReactNode;
  type: BtnType;
  size: BtnSize;
};

export const Button = ({ children, type, size }: BtnProps) => {
  const btnClass = styles[`btn-${type}-${size}`];
  return <button className={btnClass}>{children}</button>;
};

//btn-white-small
//btn-white-huge
//btn-purple-small
//btn-purple-huge
