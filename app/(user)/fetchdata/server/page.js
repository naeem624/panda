import { notFound } from "next/navigation";

const Fetchdataserver = async (props) => {


    // const {name} = await props.params;
    // console.log('Dynamic name is' , name);

    const queryName = await props.searchParams;
    console.log('Dynamic variable name is' ,queryName.name);

    // const variables = await props.searchParams;
    // const count = variables.C;
    // const gender = variables.gender;
    // const probability = variables.probability;
    // console.log(gender);

    const res = await fetch(`https://api.genderize.io/?name=${queryName.name}`)
    const data = await res.json();
    console.log(data);
//check if name is not exist
if(!queryName.name) {
    return notFound();
}
//check if name is exist
else {
  return (
    <>
    <div>
        <h1 className = "text-red-400">Fetch third party API data in Server Component.</h1>
        <h2 className = "text-green-800">please add variable in URL like /server?name=yourname</h2>
        <h2>Name: {data.name}</h2>
        <h2>Gender: {data.gender}</h2>
        <h2>Probability: {data.probability}</h2>
        <h2>Count: {data.count}</h2>
    </div>
    {/*check condition for male bg color green and for femae bg color is pink*/}
  <div className={`relative bg-neutral-primary-soft max-w-xs w-full p-6 border border-default rounded-base shadow-xs text-center ${data.gender == 'male' ? 'bg-green-900': 'bg-pink-600'}`}>
      <div className="flex flex-col items-center">
          <img className="w-24 h-24 mb-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
          <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">{data.name}</h5>
          <span className="text-sm text-body">{data.gender}</span>
          <div className="flex mt-4 md:mt-6 gap-4">
              <button type="button" className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                  Follow me
              </button>
              <button type="button" className="inline-flex self-start w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                  Message
              </button>
          </div>
      </div>
  </div>

    </>
  )
  }
}

export default Fetchdataserver
