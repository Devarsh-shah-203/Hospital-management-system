import PatientTable from "../../components/doctor/PatientTable";
import styles from "./Doctor.module.css";

function Doctor() {
  // Temporary Mock Data
  const patients = [
    {
      token: "A-101",
      patientName: "Rahul Patel",
      appointmentTime: "10:00 AM",
      status: "Waiting",
    },
    {
      token: "A-102",
      patientName: "Krish Patel",
      appointmentTime: "10:15 AM",
      status: "In Progress",
    },
    {
      token: "A-103",
      patientName: "Amit Shah",
      appointmentTime: "10:30 AM",
      status: "Completed",
    },
  ];

  return (
    <div className={styles.doctorPage}>
      <h1 className={styles.heading}>
        Doctor Dashboard
      </h1>

      <PatientTable patients={patients} />
    </div>
  );
}

export default Doctor;