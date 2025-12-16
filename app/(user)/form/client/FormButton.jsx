import React from 'react'
import { useFormStatus } from 'react-dom';

function FormButton() {
    const { pending, data, method, action } = useFormStatus();  //use this React DOM hook to get status after form submit
  return (
    <button type="submit" disabled = {pending} className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        {pending ? "Loading..." : "Submit"}
    </button>
  )
}

export default FormButton
