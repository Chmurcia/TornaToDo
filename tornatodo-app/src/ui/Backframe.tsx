import styles from "./../styles/Backframe.module.scss";

type FrameType = "rectangle" | "horizontal" | "vertical" | "side";

type BackframeProps = {
  children: React.ReactNode;
  type: FrameType;
};

export const Backframe = ({ children, type }: BackframeProps) => {
  const frameClass = styles[`frame-${type}`];
  return <div className={frameClass}>{children}</div>;
};
