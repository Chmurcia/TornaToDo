import { useLocation } from "react-router-dom";
import styles from "./../styles/pages-styles/Tasks.module.scss";
import { useEffect } from "react";
type HomepageProps = {
  setPosition: (arg0: string) => void;
};

const Tasks = ({ setPosition }: HomepageProps) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setPosition(pathname);
  }, [pathname, setPosition]);
  return <div className={styles.site}>Tasks</div>;
};
export default Tasks;
