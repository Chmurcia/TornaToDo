import { Backframe } from "../ui/Backframe";
import { Logo } from "../ui/Logo";
import { Option } from "../ui/Option";
import styles from "./../styles/Sidebar.module.scss";

import { IoHomeOutline } from "react-icons/io5";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

type SidebarProps = { position: string };

export const Sidebar = ({ position }: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Logo />
      </div>
      <div className={styles.middle}>
        <Option
          icon={
            <IoHomeOutline
              size={20}
              color={position === "/" || position === "/tasks" ? "#5615c1" : ""}
            />
          }
          isCurrent={position === "/"}
          to="/"
        >
          Dashboard
        </Option>
        <Option
          icon={
            <IoStatsChartOutline
              size={20}
              color={position === "/stats" ? "#5615c1" : ""}
            />
          }
          isCurrent={position === "/stats"}
          to="/stats"
        >
          Statistics
        </Option>
        <Option
          icon={
            <CiUser
              size={25}
              color={position === "/account" ? "#5615c1" : ""}
            />
          }
          isCurrent={position === "/account"}
          to="/account"
        >
          Account
        </Option>
        <Backframe type="side">.</Backframe>
        <Backframe type="side">.</Backframe>
        <Backframe type="side">.</Backframe>
      </div>
      <div className={styles.bottom}>
        <img className={styles.img}></img>
        <p className={styles.name}>Username_Superb_Name</p>
        <CgProfile size={30} />
      </div>
    </div>
  );
};
