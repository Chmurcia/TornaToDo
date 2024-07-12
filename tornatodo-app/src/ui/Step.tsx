import styles from "./../styles/Step.module.scss";

import { FaClock } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

export const Step = () => {
  return (
    <div className={styles.step}>
      <p>Your_Task_Beautiful_Name</p>
      <button className={styles.btn}>
        <FaClock size={20} />
      </button>
      <button className={styles.btn}>
        <MdDone size={20} />
      </button>
      <button className={styles.btn}>
        <IoIosMore size={20} />
      </button>
    </div>
  );
};
