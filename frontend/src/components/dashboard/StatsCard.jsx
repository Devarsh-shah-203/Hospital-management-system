import styles from "./StatsCard.module.css";

function StatsCard({ title, value, subtitle }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>

      <h2 className={styles.value}>{value}</h2>

      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

export default StatsCard;