import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Welcome = () => {
    const[profile,setProfile]=useState<any>({})
    const navigate=useNavigate();

    useEffect(()=>{
        
        let auth:any=localStorage.getItem('employee')
        if(!auth){
            navigate('/register')
            navigate(0)
        }else{
            auth=JSON.parse(auth)

            setProfile(auth)
        }
    },[])
  return (
    <div>
      <h1>Welcome! {profile.firstName} {profile.lastName}</h1>
      <h1>Phone number: {profile.phone} </h1>
      <h1>Email Address! {profile.email} </h1>
    </div>
  )
}

export default Welcome
