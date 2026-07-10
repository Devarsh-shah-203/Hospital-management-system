import mongoose from "mongoose";

const queueSchema = new mongoose.Schema(
  {
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      required: true,
      unique: true,
      index: true,
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true,
    },

    queueDate: {
      type: Date,
      required: true,
      index: true,
    },

    queueNumber: {
      type: Number,
      required: true,
    },

    position: {
      type: Number,
      required: true,
      min: 1,
    },

    estimatedWaitTime: {
      type: Number,
      default: 0, // minutes
    },

    status: {
      type: String,
      enum: [
        "WAITING",
        "CALLED",
        "IN_PROGRESS",
        "COMPLETED",
        "SKIPPED",
        "CANCELLED",
      ],
      default: "WAITING",
      index: true,
    },

    checkedInAt: {
      type: Date,
      default: null,
    },

    startedAt: {
      type: Date,
      default: null,
    },

    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

queueSchema.index(
  {
    doctor: 1,
    queueDate: 1,
    queueNumber: 1,
  },
  {
    unique: true,
  }
);


queueSchema.index({
  doctor: 1,
  queueDate: 1,
  status: 1,
});


queueSchema.index({
  patient: 1,
  queueDate: -1,
});

const Queue = mongoose.model("Queue", queueSchema);

export default Queue;