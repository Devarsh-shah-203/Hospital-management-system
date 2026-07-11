import { useState } from "react";

import PatientRow from "./PatientRow";
import ActionButtons from "./ActionButtons";

import styles from "./PatientTable.module.css";

function PatientTable({ patients }) {
  const [formData, setFormData] = useState({});

  const handleChange = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

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
            <th>Diagnosis</th>
            <th>Prescription</th>
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

              diagnosisInput={
                <input
                  type="text"
                  placeholder="Diagnosis"
                  value={
                    formData[appointment._id]?.diagnosis || ""
                  }
                  onChange={(e) =>
                    handleChange(
                      appointment._id,
                      "diagnosis",
                      e.target.value
                    )
                  }
                />
              }

              prescriptionInput={
                <input
                  type="text"
                  placeholder="Prescription"
                  value={
                    formData[appointment._id]?.prescription || ""
                  }
                  onChange={(e) =>
                    handleChange(
                      appointment._id,
                      "prescription",
                      e.target.value
                    )
                  }
                />
              }
            >
              <ActionButtons
                appointmentId={appointment._id}
                status={appointment.status}
                diagnosis={
                  formData[appointment._id]?.diagnosis || ""
                }
                prescription={
                  formData[appointment._id]?.prescription || ""
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