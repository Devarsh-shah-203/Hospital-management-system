import {
  completeAppointment,
  cancelAppointment,
} from "../../services/doctorService";

import styles from "./ActionButtons.module.css";

function ActionButtons({
  appointmentId,
  status,
  diagnosis,
  prescription,
}) {
  const handleComplete = async () => {
    if (!diagnosis.trim()) {
      alert("Please enter diagnosis");
      return;
    }

    if (!prescription.trim()) {
      alert("Please enter prescription");
      return;
    }

    try {
      await completeAppointment(
        appointmentId,
        diagnosis,
        prescription
      );

      alert("Appointment completed successfully");

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = async () => {
    try {
      await cancelAppointment(appointmentId);

      alert("Appointment cancelled successfully");

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.actions}>
      {(status === "BOOKED" ||
        status === "CHECKED_IN" ||
        status === "IN_PROGRESS") && (
        <>
          <button
            className={styles.complete}
            onClick={handleComplete}
          >
            Complete
          </button>

          <button
            className={styles.skip}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </>
      )}

      {status === "COMPLETED" && (
        <span className={styles.completed}>
          Completed
        </span>
      )}

      {status === "CANCELLED" && (
        <span className={styles.cancelled}>
          Cancelled
        </span>
      )}

      {status === "NO_SHOW" && (
        <span className={styles.noShow}>
          No Show
        </span>
      )}
    </div>
  );
}

export default ActionButtons;