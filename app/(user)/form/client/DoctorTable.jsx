import db from '@/app/config/db';

export default async function DoctorTable() {
const [getDoctorsdata] = await db.execute('select * from doctors order by id desc');

  return (
    <>
    {getDoctorsdata && 
    <div className="mx-auto relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="bg-neutral-secondary-soft border-b border-default">
            <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                    ID
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Full Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Address
                </th>
            </tr>
        </thead>
        <tbody>
            {getDoctorsdata.length > 0 ?
            getDoctorsdata.map((data)=>(

            
            <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default" key = {data.id}>
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    {data.id}
                </th>
                <td className="px-6 py-4">
                    {data.full_name}
                </td>
                <td className="px-6 py-4">
                    {data.email}
                </td>
                <td className="px-6 py-4">
                    {data.phone}
                </td>
                <td className="px-6 py-4">
                    {data.address}
                </td>
            </tr>
            ))
            : 'Not data found!'
            }
        </tbody>
    </table>
</div>
}
</>
  )
}