// import { useNavigate } from "react-router-dom";
import styles from "./../styles/Option.module.scss";

type OptionProps = {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
};

export const Option = ({ to, children, icon }: OptionProps) => {
  //   const navigate = useNavigate();
  return (
    <div className={styles.group}>
      {icon}
      <button className={styles.opt} /*onClick={() => navigate(to)}*/>
        {children}
      </button>
    </div>
  );
};
