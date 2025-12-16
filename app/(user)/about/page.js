
export const metadata = {
  title: 'Meta title for About',
  description: 'Dynamic metadata depends on dynamic information, such as the current route parameters, external data',
  keywords: ['about', 'new', 'wow']
}
const url = "https://jsonplaceholder.typicode.com/posts";


export default async function About() {
  //fetch API data with server component and we don't need to use useState() and use effect()
    const res = await fetch (url);
    const result = await res.json();
    console.log(result);
    //return result;
  
    return (
        <>
        <h1>Hi this is About text here: ABOUT</h1>
        <h2 className="custom_heading my-3">There is example of below React Server Component (RSC).</h2>

        <div>
          <h1>Fetched Data:</h1>
          <ul>
            {result.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
        </>
    )
}