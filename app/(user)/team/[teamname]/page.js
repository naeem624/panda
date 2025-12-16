"use client";
import { useParams } from "next/navigation";

const TeamName = (params ) => {
    const getURL = useParams();
    console.log(getURL.teamname);
    return (
        <div>
            <h1 className = "text-red-400">Get dynamic URL in Client Component.</h1>
        <p>NEW URL: {getURL.teamname}</p>
        </div>
    )

}

export default TeamName;