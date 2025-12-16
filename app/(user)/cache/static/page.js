import db from "@/app/config/db"
export const revalidate = 0
export default async function StaticCache() {
    const [data] = await db.execute("select * from doctors");
    console.log(data);
  return (
    <div>
        <h1 className = "text-red-400">This is static page and we used ISR (incremental static regenerate) for dynamic update change.</h1>
      <ul>
            {data.map((info)=> {
              return <li key = {info.id}>{info.full_name} {info.email}</li>
            })}
           </ul>
    </div>
  )
}
