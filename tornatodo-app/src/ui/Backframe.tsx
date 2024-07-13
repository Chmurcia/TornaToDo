import styles from "./../styles/Backframe.module.scss";
import { useTheme } from "../hooks/useTheme";

type FrameType = "rectangle" | "horizontal" | "vertical" | "side";

type BackframeProps = {
  children: React.ReactNode;
  type: FrameType;
};

export const Backframe = ({ children, type }: BackframeProps) => {
  const { theme } = useTheme();
  const frameClass = styles[`frame-${type}`];
  const themeClass = styles[theme];
  return <div className={`${frameClass} ${themeClass}`}>{children}</div>;
};
