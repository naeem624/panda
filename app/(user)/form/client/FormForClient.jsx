"use client";

import { useActionState } from "react";
import { contactClientForm } from "./contact.client"
import FormButton from "./FormButton";


function FormForClient() {

    //use action state hook to update state onbase of form submit like loading bar and return data in state
    const [state, formAction, isPending] = useActionState(contactClientForm, null);
  return (
<form className="max-w-sm mx-auto" action={formAction}>
    <div className="mb-5">
    <label htmlFor="full_name" className="block mb-2.5 text-sm font-medium text-heading">Your Name</label>
        <input type="text" name = "full_name" id="full_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Full Name" required />
    </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
    <input type="email" name = "email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="phone" className="block mb-2.5 text-sm font-medium text-heading">Your Phone</label>
    <input type="number" id="phone" name = "phone" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Your Phone" required />
  </div>
  <div className="mb-5">
    <label htmlFor="address" className="block mb-2.5 text-sm font-medium text-heading">Your Address</label>
    <textarea name = "address" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Your Address" required />
  </div>
  <label htmlFor="remember" className="flex items-center mb-5">
    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
    <p className="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</p>
  </label>
    <FormButton />
{state &&
<p className={`text-center ${state.success ? 'color-green-500' : 'color-red-500'}`}>{state.message}</p>
}
</form>
  )
}

export default FormForClient
