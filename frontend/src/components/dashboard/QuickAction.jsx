import styles from "./QuickAction.module.css";

function QuickAction({ title, icon, onClick }) {
  return (
    <button
      className={styles.actionButton}
      onClick={onClick}
    >
      <div className={styles.icon}>
        {icon}
      </div>

      <span>{title}</span>
    </button>
  );
}

export default QuickAction;