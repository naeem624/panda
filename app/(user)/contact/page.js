"use client";

import Image from "next/image"
import style from "./contact.module.css"
import { useEffect, useState } from "react"

// export const metadata = {
//   title: 'Meta title for contact: ',
//   description: 'Dynamic metadata depends on dynamic information, such as the current route parameters, external data',
//   keywords: ['text', 'new', 'wow']
// }

const url = "https://jsonplaceholder.typicode.com/posts";

export default function Contact () {
//fetch API data with client component
    const [data, setData] = useState([]);

        useEffect(()=> {
            names();
        },[]);

        const names = async () => {
                const res = await fetch(url);
                const result = await res.json();
                setData(result);
            }

console.log(data);

const setClick = () => {
   // alert('click here');
}

const [count, setcount] = useState(0);
const btnCounter = () => {
    const value = count + 1;
    setcount(value);
}

    return (
        <>
        <h1 className="text-4xl text-red-500">this is conact page text: CONTACT</h1>
        <h2 className="font-roboto">There is example of below React Client Component (RCC).</h2>
        <button onClick={btnCounter}>click me + {count}</button>
        <Image src="/usama.jpg" width={200} height={200} alt="usama img" quality={50} priority= {false} ></Image>
        <button onClick={setClick}>click API</button>
        

        <div className="container py-5 text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
           {/* { <pre>{JSON.stringify(data, null, 2)}</pre>} */}
           <ul>
            {data.map((info)=> {
                return <li key = {info.id}>{info.title}</li>
            })}
           </ul>

            
        
            </div>
      </div>
        </>
    )
}