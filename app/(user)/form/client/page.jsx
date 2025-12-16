import FormForClient from "./FormForClient"
import DoctorTable from "./DoctorTable";

function DoctorClientForm() {

  return (
    <>
    <h1 className = "text-red-400">This is client side form (useActionState();)</h1>
<FormForClient></FormForClient>
<DoctorTable/>

</>
  )
}

export default DoctorClientForm
