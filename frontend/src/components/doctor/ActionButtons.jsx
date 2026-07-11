import {
  completeAppointment,
  cancelAppointment,
} from "../../services/doctorService";

import styles from "./ActionButtons.module.css";

function ActionButtons({ appointmentId, status }) {
  const handleComplete = async () => {
    try {
      await completeAppointment(appointmentId);

      // Temporary refresh
      window.location.reload();
    } catch (error) {
      console.error("Complete Error:", error);
    }
  };

  const handleCancel = async () => {
    try {
      await cancelAppointment(appointmentId);

      // Temporary refresh
      window.location.reload();
    } catch (error) {
      console.error("Cancel Error:", error);
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