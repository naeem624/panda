"use client";

import React, { useState, useTransition } from 'react'
import { contactSubClientForm } from './contact.sub.client';

function SubClientForm() {

    const [isPending, startTransition] = useTransition();
    const [data, setdata] = useState(null);

    const formClientAction = (formData) => {
    const {full_name, email, phone, address} = Object.fromEntries(formData);
    //console.log(formData.get('full_name'));
    startTransition (async ()=> {
        const res = await contactSubClientForm(full_name, email, phone, address);
        setdata(res);
    })
    }

  return (
    <>
<h1 className = "text-red-400">Handle useTransition() on client compenent and we can also did before with useActionState() but useTransition() discovered in react 18 version and useActionState() is React DOM 19 version.</h1>

<form className="max-w-sm mx-auto" action = {formClientAction}>
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
    <button type="submit" disabled = {isPending}  className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        {isPending ? 'Loading bar': 'Submit'}
    </button>
    {data && 
    <p className={`text-center ${data.success ? 'text-green-400' : 'text-red-400'}`}>{data.message}</p>
    }
</form>
</>
  )
}

export default SubClientForm
