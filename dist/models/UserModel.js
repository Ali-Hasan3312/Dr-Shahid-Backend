"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
const mongoose_1 = require("mongoose");
const PatientSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone Number is required"],
        trim: true,
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
    },
    time: {
        type: String,
        required: [true, "Time is required"],
    },
}, { timestamps: true });
exports.Patient = (0, mongoose_1.model)("Patient", PatientSchema);
