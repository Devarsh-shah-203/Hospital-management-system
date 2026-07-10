import PatientRow from "./PatientRow";
import ActionButtons from "./ActionButtons";
import styles from "./PatientTable.module.css";

function PatientTable({ patients }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Token</th>
            <th>Patient Name</th>
            <th>Appointment</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <PatientRow
              key={patient.token}
              token={patient.token}
              patientName={patient.patientName}
              appointmentTime={patient.appointmentTime}
              status={patient.status}
            >
              <ActionButtons
                status={patient.status}
                onStart={() =>
                  console.log("Start", patient.token)
                }
                onComplete={() =>
                  console.log("Complete", patient.token)
                }
                onSkip={() =>
                  console.log("Skip", patient.token)
                }
              />
            </PatientRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;