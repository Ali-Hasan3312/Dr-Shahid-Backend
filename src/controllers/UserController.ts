import { Request, Response, NextFunction } from 'express';
import { Patient } from "../models/UserModel";
// import ErrorHandler from "../utils/errorHandler";
import sendEmail from "../utils/sendEmail"

export const PatientController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
        const { name, email, phoneNumber, date, time } = req.body;
    
        if (!name || !email || !phoneNumber || !date || !time) {
            throw new Error("Please fill all the fields");
        }
        console.log("Name:",name, "Email: ", email,
            "Phone: ", phoneNumber, "Date: ", date, "Time: ", time
        );
        
        const message = `you've got a new appointment \n Name: ${name}\nEmail: ${email} \nPhone: ${phoneNumber}\nAppointment Date:  ${date} \nAppointment Time:  ${time}`;

        try {
            await sendEmail({
                email: "alihasan331229@gmail.com",
                subject: `New Appointment`,
                message,
            });
        } catch (error) {
            console.error("Failed to send email:", error);
            throw new Error("Failed to send email")
        }
       
        const contact = await Patient.create({
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