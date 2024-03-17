import { useState, useEffect } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";
const BASE_URL = "https://api.github.com/users"

export default function ProfileViewerWithSearch() {
    const [formDataObj, setFormDataObj] = useState({userName: 'Colt'});
    const [profile, setProfile] = useState({ data: null, isLoading: true })

    useEffect(
        () => {
            async function fetchUser() {
                const userResult = await axios.get(`${BASE_URL}/${formDataObj.userName}`);
                console.log(userResult)
                setProfile({ data: userResult.data, isLoading: false });
            }
            fetchUser()
        },
        [formDataObj]
    );

    const changeFormData = (obj) => {
        setFormDataObj(obj);
    }
   
    if (profile.isLoading) return <i>Loading....</i>;
    return (
        <div>
        <ProfileSearchForm formObj={formDataObj} changeFormData={changeFormData} />
        <h2>{formDataObj.userName}</h2>
        <div className="searchResultCard" style={{display: "flex", height: "100%", width: "100%"}}>
            
            <img src={profile.data.avatar_url} alt="" style={{borderRadius: '50%'}}/>
        </div>
        </div>
    )
}