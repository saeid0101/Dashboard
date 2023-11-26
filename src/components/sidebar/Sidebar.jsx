import { FaFile, FaIcons, FaTasks } from "react-icons/fa";
import {
  IoBarChartSharp,
  IoChatboxEllipsesOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { LuDatabaseBackup, LuUsers } from "react-icons/lu";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbMapSearch, TbTableShortcut } from "react-icons/tb";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.item}>
        <span className={styles.title}>Main</span>
        <Link className={styles.listItem} to="/">
          <IoHomeOutline />
          <span>CRM</span>
        </Link>
        <Link className={styles.listItem} to="/users">
          <LuUsers />
          <span>Users</span>
        </Link>
      </div>

      <div className={styles.item}>
        <span className={styles.title}>APPS</span>
        <Link className={styles.listItem} to="/">
          <SlCalender />
          <span>Calender</span>
        </Link>
        <Link className={styles.listItem} to="/">
          <IoChatboxEllipsesOutline />
          <span>Chat</span>
        </Link>
        <Link className={styles.listItem} to="/">
          <FaTasks />
          <span>Tasks</span>
        </Link>
        <Link className={styles.listItem} to="/">
          <FaFile />
          <span>File Manager</span>
        </Link>
      </div>

      <div className={styles.item}>
        <span className={styles.title}>Components</span>
        <Link className={styles.listItem} to="/">
          <FaIcons />
          <span>Icons</span>
        </Link>
        <Link className={styles.listItem} to="/">
          <IoBarChartSharp />
          <span>Charts</span>
        </Link>
        <Link className={styles.listItem} to="/">
          <TbTableShortcut />
          <span>Tables</span>
        </Link>
        <Link className={styles.listItem} to="/">
          <TbMapSearch />
          <span>Maps</span>
        </Link>
      </div>

      <div className={styles.item}>
        <span className={styles.title}>Maintenance</span>
        <Link className={styles.listItem} to="/">
          <LuDatabaseBackup />
          <span>Backups</span>
        </Link>
        <Link className={styles.listItem} to="/">
          <MdOutlineSettingsApplications />
          <span>settings</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
