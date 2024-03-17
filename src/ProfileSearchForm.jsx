import { useState } from "react";
import {useForm} from "react-hook-form"


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
            <label htmlFor="userSearch">Search your userName:</label>
            <input type="text" id="userSearch" placeholder="search username..." {...register("userName")} value={username} onChange={onUsernameChange}/>
            <div>
            <button onClick={clearInput}>Search</button>
            </div>
        </form>
    )
}