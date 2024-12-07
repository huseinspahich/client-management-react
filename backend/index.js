import express from "express";
import cors from "cors";
import router from "./src/routes/clientRoute.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})