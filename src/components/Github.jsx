import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github()
{
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ijaz003')
    //     .then((res)=>{
    //         return res.json();
    //     })
    //     .then((res)=>{
    //         setData(res);
    //     })
    // },[])

    const data=useLoaderData();
    return(
        <>
            <h1>Number of the {data.followers}</h1>
            <img src={data.avatar_url} alt="#" />
        </>
        
    )
}
export default Github;

export const LoadedData=async ()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}