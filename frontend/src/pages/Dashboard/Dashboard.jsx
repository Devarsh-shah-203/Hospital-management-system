import {
  Users,
  Clock3,
  CircleCheckBig,
  Activity,
  ClipboardList,
  RefreshCw,
  Stethoscope,
} from "lucide-react";

import SummaryCard from "../../components/dashboard/SummaryCard";
import QuickAction from "../../components/dashboard/QuickAction";
import StatsCard from "../../components/dashboard/StatsCard";

import styles from "./Dashboard.module.css";

function Dashboard() {
  // Temporary Mock Data
  const dashboardData = {
    todayPatients: 24,
    waitingPatients: 8,
    completedPatients: 16,
    averageWaitingTime: "18 mins",
  };

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.heading}>
        Hospital Dashboard
      </h1>

      {/* Summary Cards */}

      <section className={styles.summaryGrid}>
        <SummaryCard
          title="Today's Patients"
          value={dashboardData.todayPatients}
          icon={<Users />}
          color="#2563eb"
        />

        <SummaryCard
          title="Waiting"
          value={dashboardData.waitingPatients}
          icon={<Clock3 />}
          color="#f59e0b"
        />

        <SummaryCard
          title="Completed"
          value={dashboardData.completedPatients}
          icon={<CircleCheckBig />}
          color="#16a34a"
        />

        <SummaryCard
          title="Average Wait"
          value={dashboardData.averageWaitingTime}
          icon={<Activity />}
          color="#7c3aed"
        />
      </section>

      {/* Quick Actions */}

      <section className={styles.quickActions}>
        <h2>Quick Actions</h2>

        <div className={styles.actionGrid}>
          <QuickAction
            title="View Queue"
            icon={<ClipboardList />}
          />

          <QuickAction
            title="Refresh Queue"
            icon={<RefreshCw />}
          />

          <QuickAction
            title="Doctor Dashboard"
            icon={<Stethoscope />}
          />
        </div>
      </section>

      {/* Statistics */}

      <section className={styles.statistics}>
        <h2>Statistics</h2>

        <div className={styles.statsGrid}>
          <StatsCard
            title="Average Waiting Time"
            value="18 mins"
            subtitle="Updated just now"
          />

          <StatsCard
            title="Completed Today"
            value="16"
            subtitle="Patients"
          />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;