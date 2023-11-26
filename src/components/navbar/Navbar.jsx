import styles from "./navbar.module.scss";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import {
  IoSettingsOutline,
  IoAppsOutline,
  IoExpand,
  IoLogoElectron,
} from "react-icons/io5";
import user from "../../assets/user.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link className={styles.logo} to={"/"}>
        <IoLogoElectron />
        <span>Admin Panel</span>
      </Link>
      <div className={styles.icons}>
        <IoIosSearch className={styles.iconsCollapsible} />
        <IoAppsOutline className={styles.iconsCollapsible} />
        <IoExpand className={styles.iconsCollapsible} />
        <div className={styles.notification}>
          <IoIosNotificationsOutline />
          <span>1</span>
        </div>
        <div className={styles.user}>
          <img src={user} alt="" />
          <span>Alica</span>
        </div>
        <IoSettingsOutline />
      </div>
    </div>
  );
}

export default Navbar;
