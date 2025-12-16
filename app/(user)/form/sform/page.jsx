
import db from "@/app/config/db"
import { contactForm } from "./contact.server"


async function DoctorForm() {
  const [getDoctorsdata] = await db.execute('select * from doctors order by id desc');
  console.log('doctors data here.', getDoctorsdata);
  return (
    <>
      <h1 className = "text-red-400">This is Server side form data stored into DB.</h1>
<form className="max-w-sm mx-auto" action={contactForm}>
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
  <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
</form>

{getDoctorsdata && 

<div className="my-5 relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default mx-auto">
    <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              <th scope="col" className="px-6 py-3 text-red-600 font-extrabold">
                    ID
                </th>
                <th scope="col" className="px-6 py-3 text-red-600 font-extrabold">
                    Full Name
                </th>
                <th scope="col" className="px-6 py-3 text-red-600 font-extrabold">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3 text-red-600 font-extrabold">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 text-red-600 font-extrabold">
                    Address
                </th>
            </tr>
        </thead>
        <tbody>
          {getDoctorsdata.length > 0 ? 
          getDoctorsdata.map((data)=>(
            <tr className="bg-neutral-primary border-b border-default" key = {data.id}>
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    {data.id}
                </th>
                <td className="px-6 py-4">
                    {data.full_name}
                </td>
                <td className="px-6 py-4">
                    {data.phone}
                </td>
                <td className="px-6 py-4">
                    {data.email}
                </td>
                <td className="px-6 py-4">
                    {data.address}
                </td>
            </tr>
             ))
            :
            'Not data found!'
            }
        </tbody>
    </table>
</div>
}
</>

  )
}

export default DoctorForm
