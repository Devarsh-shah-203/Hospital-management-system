import { useEffect, useState } from "react";
import PatientTable from "../../components/doctor/PatientTable";
import { getTodayAppointments } from "../../services/doctorService";
import styles from "./Doctor.module.css";

function Doctor() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getTodayAppointments();
        setPatients(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.doctorPage}>
      <h1 className={styles.heading}>Doctor Dashboard</h1>

      <PatientTable patients={patients} />
    </div>
  );
}

export default Doctor;