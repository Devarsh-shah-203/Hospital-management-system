import styles from "./QueueDetails.module.css";

function QueueDetails({ queue }) {
  return (
    <div className={styles.card}>
      <h2>Queue Details</h2>

      <div className={styles.grid}>
        <p>
          <strong>Queue Number:</strong> {queue.queueNumber}
        </p>

        <p>
          <strong>Position:</strong> {queue.position}
        </p>

        <p>
          <strong>Status:</strong> {queue.status}
        </p>

        <p>
          <strong>Doctor:</strong> {queue.doctor.username}
        </p>

        <p>
          <strong>Department:</strong> {queue.doctor.department}
        </p>

        <p>
          <strong>Specialization:</strong> {queue.doctor.specialization}
        </p>

        <p>
          <strong>Appointment Date:</strong>{" "}
          {new Date(queue.appointment.appointmentDate).toLocaleDateString()}
        </p>

        <p>
          <strong>Appointment Time:</strong>{" "}
          {queue.appointment.appointmentTime}
        </p>
      </div>
    </div>
  );
}

export default QueueDetails;