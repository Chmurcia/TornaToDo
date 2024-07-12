import { Backframe } from "../ui/Backframe";
import { Logo } from "../ui/Logo";
import { Option } from "../ui/Option";
import styles from "./../styles/Sidebar.module.scss";

import { IoHomeOutline } from "react-icons/io5";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Logo />
      </div>
      <div className={styles.middle}>
        <Option icon={<IoHomeOutline size={20} />} to="/">
          Homepage
        </Option>
        <Option icon={<IoStatsChartOutline size={20} />} to="/stats">
          Statistics
        </Option>
        <Option icon={<CiUser size={25} />} to="/acc">
          Account
        </Option>
        <Option icon={<IoSettingsOutline size={20} />} to="/setts">
          Settings
        </Option>
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
