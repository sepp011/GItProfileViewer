import { useState } from "react";
import {useForm} from "react-hook-form"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function ProfileSearchForm({changeFormData}){
    const [username, setUsername] = useState("");
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => console.log(data);
    const onUsernameChange = (event) =>{
        setUsername(event.target.value);
    }

    function clearInput() {
        setUsername("");
    }

    return(
        <form onSubmit={handleSubmit(changeFormData)}>
            {/* <label htmlFor="userSearch">Search your userName:</label> */}
            {/* <input type="text" id="userSearch" placeholder="search username..." {...register("userName")} value={username} onChange={onUsernameChange}/> */}
            <TextField  id="userSearch" label="Username" variant="outlined" {...register("userName")} value={username} onChange={onUsernameChange}/>
           
            <button style={{height: '3.55rem', backgroundColor: 'rgba(6, 182, 231, 0.76)', color: 'white', borderRadius: '4px'}} onClick={clearInput}>Search</button>
            
        </form>
    )
}