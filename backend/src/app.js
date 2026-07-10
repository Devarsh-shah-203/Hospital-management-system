import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import doctorRoutes from "./routes/doctor.routes.js";
import historyRoutes from "./routes/history.routes.js";
import queueRoutes from "./routes/queue.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";

const app = express();



app.use(cors({ // frontend on 3000 and backend on 8000
    origin: ['http://localhost:8000', 'http://localhost:3000'],
    credentials: true,
  }));


app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());



app.use("/api/auth", authRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/queue", queueRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running 🚀",
  });
});

export default app;