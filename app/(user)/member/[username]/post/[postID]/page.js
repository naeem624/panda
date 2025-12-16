export default async function userID(props) {
    const getuserID = await props.params;

    const finalID = getuserID.postID;
    console.log(getuserID);
    return (
        <>
        <h1 className = "text-red-400">Get dynamic URL in Server Component (Nested Route).</h1>
        final user ID is {finalID} and username is {getuserID.username}
        </>
    )
}