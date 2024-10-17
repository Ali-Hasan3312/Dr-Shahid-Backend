import express from "express"
import {PatientController}  from "../controllers/UserController"

const patientRouter = express.Router();

patientRouter.post('/patient', PatientController);

export default patientRouter;