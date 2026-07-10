import CurrentToken from "../../components/queue/CurrentToken";
import WaitingTimer from "../../components/queue/WaitingTimer";
import QueueList from "../../components/queue/QueueList";

import styles from "./Queue.module.css";

function Queue() {
  // Temporary Mock Data
  const queueData = {
    currentToken: "A-101",
    waitingTime: "18 mins",
    queue: [
      {
        token: "A-102",
        patientName: "Rahul Patel",
        status: "Waiting",
      },
      {
        token: "A-103",
        patientName: "Krish Patel",
        status: "In Progress",
      },
      {
        token: "A-104",
        patientName: "Amit Shah",
        status: "Completed",
      },
    ],
  };

  return (
    <div className={styles.queuePage}>
      <h1 className={styles.heading}>Live Queue</h1>

      <div className={styles.topCards}>
        <CurrentToken token={queueData.currentToken} />

        <WaitingTimer waitingTime={queueData.waitingTime} />
      </div>

      <section className={styles.queueSection}>
        <h2>Patient Queue</h2>

        <QueueList queue={queueData.queue} />
      </section>
    </div>
  );
}

export default Queue;