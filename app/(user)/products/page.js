const Products = async (props) => {
    const getvar = await props.searchParams;
    console.log(getvar.id);
    return (
        <>
         <h1 className = "text-red-400">Get dynamic Variabe in Server Component (Search params).</h1>
        value of search paramerter: {JSON.stringify(getvar)}

        </>
    )
}

export default Products;