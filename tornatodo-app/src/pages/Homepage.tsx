import { useLocation } from "react-router-dom";
import styles from "./../styles/pages-styles/Dashboard.module.scss";
import { useEffect } from "react";

type HomepageProps = {
  setPosition: (arg0: string) => void;
};

const Homepage = ({ setPosition }: HomepageProps) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setPosition(pathname);
  }, [pathname, setPosition]);
  return <div className={styles.site}>Homepage</div>;
};
export default Homepage;
