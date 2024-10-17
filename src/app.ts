import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db/database";
import patientRouter from "./routes/UserRoute";

const app = express()
dotenv.config({path: "./config/config.env"})

const port = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'https://drshahidmughal.ironstepsoftware.com',
    credentials: true
}));
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


app.use("/api/v1",patientRouter)
