import styles from "./PatientRow.module.css";

function PatientRow({
  token,
  patientName,
  appointmentTime,
  status,
  children,
}) {
  const statusClass = status.toLowerCase().replace(/\s+/g, "-");

  return (
    <tr className={styles.row}>
      <td>{token}</td>

      <td>{patientName}</td>

      <td>{appointmentTime}</td>

      <td>
        <span
          className={`${styles.status} ${styles[statusClass]}`}
        >
          {status}
        </span>
      </td>

      <td>{children}</td>
    </tr>
  );
}

export default PatientRow;