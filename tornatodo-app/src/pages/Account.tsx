import { useEffect } from "react";
import styles from "./../styles/pages-styles/Account.module.scss";
import { useLocation } from "react-router-dom";

type AccountProps = {
  setPosition: (arg0: string) => void;
};

const Account = ({ setPosition }: AccountProps) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setPosition(pathname);
  }, [pathname, setPosition]);
  return <div className={styles.site}>Accounts</div>;
};
export default Account;
