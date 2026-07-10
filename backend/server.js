import "./backend/src/config/env.js";
import app from "./backend/src/app.js";
import cors from "cors";
import connectDB from "./backend/src/config/db.js";


connectDB();

const PORT = process.env.PORT || 8000;



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

