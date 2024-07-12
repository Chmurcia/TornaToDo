import styles from "./../styles/Task.module.scss";

import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";

export const Task = () => {
  return (
    <div className={styles.task}>
      <p>Your_Task_Beautiful_Name</p>
      <button className={styles.btn}>
        <IoIosArrowDown size={50} />
      </button>
    </div>
  );
};
