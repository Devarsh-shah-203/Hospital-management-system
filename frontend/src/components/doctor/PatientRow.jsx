import styles from "./PatientRow.module.css";

function PatientRow({
  patientName,
  appointmentTime,
  status,
  diagnosisInput,
  prescriptionInput,
  children,
}) {
  const statusClass = status.toLowerCase().replace(/_/g, "-");

  return (
    <tr className={styles.row}>
      <td>{patientName}</td>

      <td>{appointmentTime}</td>

      <td>
        <span
          className={`${styles.status} ${styles[statusClass]}`}
        >
          {status.replace(/_/g, " ")}
        </span>
      </td>

      <td>{diagnosisInput}</td>

      <td>{prescriptionInput}</td>

      <td>{children}</td>
    </tr>
  );
}

export default PatientRow;