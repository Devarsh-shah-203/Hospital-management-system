import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Stethoscope,
} from "lucide-react";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/queue"
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
            >
              <Users size={20} />
              <span>Live Queue</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/doctor"
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
            >
              <Stethoscope size={20} />
              <span>Doctor Dashboard</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;