"use server";

import db from "@/app/config/db";
import { revalidatePath } from "next/cache";

export const contactForm = async (formData) => {
    const getName = formData.get('full_name');
    const getEmail = formData.get('email');
    const getPhone = formData.get('phone');
    const getAddress = formData.get('address');
    console.log(getName, formData);
    db.execute(`insert into doctors (full_name, email, phone, address) Values (?, ?, ?, ?)`, [getName, getEmail, getPhone, getAddress]);
    revalidatePath('/form');
}
