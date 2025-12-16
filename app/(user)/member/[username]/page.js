const Member = async (props) => {
    
        const value = await props.params;
        console.log(value);
        return ( 
            <>
            <h1 className = "text-red-400">Get dynamic URL in Server Component.</h1>
            Username is: {value.username} 
            </>
        )
}

export default Member;