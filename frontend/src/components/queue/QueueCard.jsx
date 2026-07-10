import styles from "./QueueCard.module.css";

function QueueCard({ token, patientName, status }) {
  const statusClass = status.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{token}</h3>

        <span
          className={`${styles.status} ${styles[statusClass]}`}
        >
          {status}
        </span>
      </div>

      <p className={styles.patientName}>
        {patientName}
      </p>
    </div>
  );
}

export default QueueCard;