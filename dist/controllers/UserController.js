"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientController = void 0;
const UserModel_1 = require("../models/UserModel");
// import ErrorHandler from "../utils/errorHandler";
const sendEmail_1 = __importDefault(require("../utils/sendEmail"));
const PatientController = async (req, res, next) => {
    const { name, email, phoneNumber, date, time } = req.body;
    if (!name || !email || !phoneNumber || !date || !time) {
        throw new Error("Please fill all the fields");
    }
    console.log("Name:", name, "Email: ", email, "Phone: ", phoneNumber, "Date: ", date, "Time: ", time);
    const message = `you've got a new appointment \n Name: ${name}\nEmail: ${email} \nPhone: ${phoneNumber}\nAppointment Date:  ${date} \nAppointment Time:  ${time}`;
    try {
        await (0, sendEmail_1.default)({
            email: "alihasan331229@gmail.com",
            subject: `New Appointment`,
            message,
        });
    }
    catch (error) {
        console.error("Failed to send email:", error);
        throw new Error("Failed to send email");
    }
    const contact = await UserModel_1.Patient.create({
        name,
        email,
        phoneNumber,
        date,
        time
    });
    // Update the roomStatus to false
    res.status(201).json({
        success: true,
        message: "Message sent successfully",
        contact
    });
};
exports.PatientController = PatientController;
