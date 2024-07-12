import { useLocation } from "react-router-dom";
import styles from "./../styles/pages-styles/Statistics.module.scss";
import { useEffect } from "react";

type StatisticsProps = {
  setPosition: (arg0: string) => void;
};

const Statistics = ({ setPosition }: StatisticsProps) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setPosition(pathname);
  }, [pathname, setPosition]);
  return <div className={styles.site}>Statistics</div>;
};
export default Statistics;
