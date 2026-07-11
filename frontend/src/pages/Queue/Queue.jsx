import { useEffect, useState } from "react";

import CurrentToken from "../../components/queue/CurrentToken";
import WaitingTimer from "../../components/queue/WaitingTimer";
import QueueDetails from "../../components/queue/QueueDetails";

import { getMyQueue } from "../../services/queueService";

import styles from "./Queue.module.css";

function Queue() {
  const [queue, setQueue] = useState(null);

  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const data = await getMyQueue();
        setQueue(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQueue();
  }, []);

  if (!queue) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.queuePage}>
      <h1 className={styles.heading}>Live Queue</h1>

      <div className={styles.topCards}>
        <CurrentToken token={queue.queueNumber} />

        <WaitingTimer waitingTime={`${queue.estimatedWaitTime} mins`} />
      </div>

      <QueueDetails queue={queue} />
    </div>
  );
}

export default Queue;