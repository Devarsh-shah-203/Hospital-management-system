import styles from "./ActionButtons.module.css";

function ActionButtons({
  onStart,
  onComplete,
  onSkip,
  status,
}) {
  return (
    <div className={styles.actions}>
      {status === "Waiting" && (
        <button
          className={styles.start}
          onClick={onStart}
        >
          Start
        </button>
      )}

      {status === "In Progress" && (
        <>
          <button
            className={styles.complete}
            onClick={onComplete}
          >
            Complete
          </button>

          <button
            className={styles.skip}
            onClick={onSkip}
          >
            Skip
          </button>
        </>
      )}

      {status === "Completed" && (
        <span className={styles.completed}>
          Completed
        </span>
      )}
    </div>
  );
}

export default ActionButtons;