import PatientRow from "./PatientRow";
import ActionButtons from "./ActionButtons";
import styles from "./PatientTable.module.css";

function PatientTable({ patients }) {
  if (!patients || patients.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>No appointments for today.</h3>
      </div>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((appointment) => (
            <PatientRow
              key={appointment._id}
              patientName={appointment.patient?.username}
              appointmentTime={appointment.appointmentTime}
              status={appointment.status}
            >
              <ActionButtons
                appointmentId={appointment._id}
                status={appointment.status}
              />
            </PatientRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;