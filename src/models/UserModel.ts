import { Document, model, Schema } from "mongoose";

export interface Patient extends Document {
    name: string;
    email: string;
    phoneNumber: string;
    date: Date;
    time: string;
  }
  const PatientSchema = new Schema<Patient>({
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
  
  
  },{timestamps:true});

  export const Patient = model<Patient>("Patient", PatientSchema)