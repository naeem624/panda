"use server";

import db from "@/app/config/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


export const contactClientForm = async (previousState, formData) => {
    //const router = useRouter();
    try {
    const getName = formData.get('full_name');
    const getEmail = formData.get('email');
    const getPhone = formData.get('phone');
    const getAddress = formData.get('address');
    console.log(getName, formData);

    await db.execute(`Insert into doctors (full_name, email, phone, address) Values (?,?,?,?)`, [getName,getEmail,getPhone,getAddress]);
    return {success: true, message: "Form is submitted"}
        revalidatePath('/form/client');
    }
    catch (error) {
        return {success: false, message: "There is error on submission."}
    }
    //redirect('/');
}