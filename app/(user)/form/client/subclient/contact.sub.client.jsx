"use server";

import db from "@/app/config/db";

export const contactSubClientForm = async (full_name, email, phone, address) => {

    try {
        await db.execute(`Insert into doctors (full_name, email, phone, address) Values (?, ?, ?, ?)`, [full_name, email, phone, address])
        return {success: true, message: "FOrm successfully submitted!"}
    }
    catch (error){
        return {success: false, message: 'Form not submitted'}
    }

}