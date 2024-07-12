import { useLocation } from "react-router-dom";
import styles from "./../styles/pages-styles/Dashboard.module.scss";
import { useEffect } from "react";

type DashboardProps = {
  setPosition: (arg0: string) => void;
};

const Dashboard = ({ setPosition }: DashboardProps) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setPosition(pathname);
  }, [pathname, setPosition]);
  return <div className={styles.site}>Dashboard</div>;
};
export default Dashboard;
