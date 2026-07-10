import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    appointmentDate: {
      type: Date,
      required: true,
      index: true,
    },

    appointmentTime: {
      type: String,
      required: true,
      trim: true,
      match: [/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)"],
    },

    consultationDuration: {
      type: Number,
      default: 15,
      min: 5,
      max: 120,
    },

    status: {
      type: String,
      enum: [
        "BOOKED",
        "CHECKED_IN",
        "IN_PROGRESS",
        "COMPLETED",
        "CANCELLED",
        "NO_SHOW",
      ],
      default: "BOOKED",
      index: true,
    },

    cancellationReason: {
      type: String,
      trim: true,
      default: null,
    },

    diagnosis: {
        type: String,
        default: null,
        trim: true,
      },
      
    prescription: {
        type: String,
        default: null,
        trim: true,
      },
  },
  {
    timestamps: true,
  }
);

appointmentSchema.index({
    doctor: 1,
    appointmentDate: 1,
  });
  
  appointmentSchema.index({
    patient: 1,
    appointmentDate: -1,
  });
  
  appointmentSchema.index({
    doctor: 1,
    appointmentDate: 1,
    appointmentTime: 1,
  });

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;