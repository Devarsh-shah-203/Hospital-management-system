import styles from "./Navbar.module.css";
import { Bell, UserCircle, LogOut } from "lucide-react";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logoSection}>
        <h2>Hospital Queue</h2>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.iconButton}>
          <Bell size={22} />
        </button>

        <div className={styles.profile}>
          <UserCircle size={32} />
          <span>Doctor</span>
        </div>

        <button className={styles.logoutButton}>
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;