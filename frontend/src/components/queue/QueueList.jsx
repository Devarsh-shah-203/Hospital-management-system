import QueueCard from "./QueueCard";
import styles from "./QueueList.module.css";

function QueueList({ queue }) {
  if (!queue || queue.length === 0) {
    return (
      <div className={styles.empty}>
        <h3>No Patients in Queue</h3>
      </div>
    );
  }

  return (
    <div className={styles.queueList}>
      {queue.map((patient) => (
        <QueueCard
          key={patient.token}
          token={patient.token}
          patientName={patient.patientName}
          status={patient.status}
        />
      ))}
    </div>
  );
}

export default QueueList;