// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./utils/db";
// import stockRoutes from "./routes/stockRoutes";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// connectDB();

// app.use(express.json());
// app.use("/api", stockRoutes);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db";
import stockRoutes from "./routes/stockRoutes";
import { fetchStockData } from "./services/stockService";
var cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();
app.use(cors());

app.use(express.json());
app.use("/api", stockRoutes);

// Polling every 10 seconds
setInterval(fetchStockData, 50000);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
