import "./src/config/env.js";
import app from "./src/app.js";
import cors from "cors";
import connectDB from "./src/config/db.js";


connectDB();

const PORT = process.env.PORT || 8000;



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

