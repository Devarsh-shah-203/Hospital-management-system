import styles from "./WaitingTimer.module.css";

function WaitingTimer({ waitingTime }) {
  return (
    <div className={styles.card}>
      <h3>Estimated Waiting Time</h3>

      <h1>{waitingTime}</h1>

      <p>Please wait for your turn.</p>
    </div>
  );
}

export default WaitingTimer;