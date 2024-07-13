// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./../styles/Option.module.scss";
import { useTheme } from "../hooks/useTheme";

type OptionProps = {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  isCurrent: boolean;
};

export const Option = ({ to, children, icon, isCurrent }: OptionProps) => {
  const { theme } = useTheme();
  //   const navigate = useNavigate();
  return (
    <div className={styles.group}>
      {icon}
      <NavLink
        className={`${styles.opt} ${isCurrent ? styles.active : ""}  ${
          theme === "light" ? styles.light : styles.dark
        }`}
        to={to}
      >
        {children}
      </NavLink>
    </div>
  );
};
