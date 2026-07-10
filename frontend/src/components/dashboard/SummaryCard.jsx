import styles from "./SummaryCard.module.css";

function SummaryCard({ title, value, icon, color }) {
  return (
    <div
      className={styles.card}
      style={{ borderTop: `5px solid ${color}` }}
    >
      <div className={styles.header}>
        <h4>{title}</h4>

        <div className={styles.icon}>
          {icon}
        </div>
      </div>

      <h2>{value}</h2>
    </div>
  );
}

export default SummaryCard;