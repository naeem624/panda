"use client"
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Fetchdataclient() {
    const getName = useSearchParams();
    const finalName = getName.get("name");
    //console.log(getName.get("name"));

   const url = `https://api.genderize.io/?name=${finalName}`;

    const [data, setData] = useState([]);
    const[jokeData, setjokeData] = useState([]);

    const [btnReveal, setbtnReveal] = useState(true);
    

    const getData = async () => {

        const res = await fetch(url);
        const result = await res.json();
        setData(result);
        //console.log(result);
    }

    useEffect(()=>{
        getData();
        getJokesData();
        }
    ,[]);

    const getJokesData = async () => {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const result = await res.json();
        console.log(result);
        setjokeData(result);
        setbtnReveal(true);
    }

  return (
    <>
    <div>
        <h1 className = "text-red-400">Fetch third party API data in Client Component.</h1>
        <h2 className = "text-green-800">please add variable in URL like /client?name=yourname</h2>
      {data ? 
      <>
      <h2>Name: {data.name}</h2>
        <h2>Gender: {data.gender}</h2>
        <h2>Probability: {data.probability}</h2>
        <h2>Count: {data.count}</h2>
        </>
        :
        <h1>Loading...</h1>
    }
    </div>
    
    {/* jokes API card start here */}
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          {jokeData.setup}
        </h6>
        

        { btnReveal ?
        <button onClick={()=> setbtnReveal(false) } className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Revail This Joke
        </button>
        :
        <>
        <p className="mt-5 text-slate-600 leading-normal font-light">
          {jokeData.punchline}
        </p>
        <button onClick={()=> setbtnReveal(true) } className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Unrevail
          </button>
        </>
        }
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        
          <button onClick={()=> getJokesData()} className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Next Joke
        </button>
      </div>
</div>  
</>
  )
}

export default Fetchdataclient
