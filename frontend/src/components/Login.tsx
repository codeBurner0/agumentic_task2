import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeRegistration: React.FC = () => {
    const [email, setEmail] = useState<String>()
    const [pass, setPass] = useState<String>()
    const [err, setErr] = useState<String>()

  const navigate = useNavigate()
  const login = async () => {
    let result: Response | any = await fetch('http://localhost:5000/v1/employeeLogin', {
      method: 'POST',
      body: JSON.stringify({
        "email": email,
        "password": pass,
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    });
    result = await result.json();
    if (!result.message) {
      localStorage.setItem("employee", JSON.stringify(result))
      navigate('/welcome')
    } else {
      setErr(result.message)
    }
    console.log(result);
  }
    return (
        <React.Fragment>
            <h1>LogIn</h1>
            <div className='reg_inputs'>
                <input type="text" onChange={(e) => setEmail(e.target.value)} className='reg_inp' placeholder='Enter your Email'/>
                <input type="text" onChange={(e) => setPass(e.target.value)} className='reg_inp' placeholder='Enter your password'/>
                {
                    (err) && <p className='error'>{err}</p>
                }
                <button onClick={() => login()} className='register-button'>
                    <span>Login</span>
                </button>
            </div>
        </React.Fragment>
    )
}

export default EmployeeRegistration;
