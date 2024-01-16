import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
const navbar = () => {
    const[bool,setBool]=useState<Boolean>(false)

    useEffect(()=>{
        let auth:any=localStorage.getItem('employee')
        if(!auth){
            setBool(false)
        }else{
            setBool(true)
        }
        console.log(bool)
    },[])
  return (
    <div className='navbar_container'>
      <Link to='/register'>Register</Link>
      <Link to='/login'>login</Link>
      {(bool)&&<Link to='/login' onClick={()=>localStorage.clear()}>logout</Link>}
    </div>
  )
}

export default navbar
