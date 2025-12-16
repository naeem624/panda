
const Shop = async (props) => {
    const geturl = await props.params;
    console.log(geturl.slug);
  return (
    <div>
      <h1>Catch-all Segments</h1>
      <h1 className = "text-red-400">Get dynamic full URL in Server Component.</h1>
        {JSON.stringify(geturl.slug)}
    </div>
  )
}

export default Shop
