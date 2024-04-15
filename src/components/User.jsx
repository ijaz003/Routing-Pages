import React from "react";
import { useParams } from "react-router-dom";


function User()
{
    const {id,name}=useParams();
    return(
        <h1>This User Number is {id} {name}</h1>
    )
}

export default User;