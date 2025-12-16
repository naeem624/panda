import db from "../../../config/db";   // adjust path

export const dynamic = 'force-dynamic';

export default async function CachePage() {
  const [rows] = await db.execute("SELECT * FROM doctors");

  return (
    <div>
        <h1 className = "text-red-400">By default all pages are static and we make forcefull dynamic for updating after build build otherwise it will be static and after build can't be update changes.</h1>
      <h1>Doctors</h1>
      <ul>
        {rows.map((doctor) => (
          <li key={doctor.id}>{doctor.full_name}</li>
        ))}
      </ul>
    </div>
  );
}
