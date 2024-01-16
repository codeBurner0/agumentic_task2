import React, { useState } from 'react'
import '../styles/EmployeeRegistration.css'
import { useNavigate } from 'react-router-dom'
const EmployeeRegistration: React.FC = () => {
  const [firstName, setfirstName] = useState<String>()
  const [lastName, setlastName] = useState<String>()
  const [phone, setPhone] = useState<String>()
  const [email, setEmail] = useState<String>()
  const [password, setPassword] = useState<String>()
  const [gender, setGender] = useState<String>()
  const [err, setErr] = useState<String>()

  const navigate = useNavigate()
  const register = async () => {
    console.log(firstName, lastName, phone, email, password, gender)
    let result: Response | any = await fetch('http://localhost:5000/v1/admin-createEmployee', {
      method: 'POST',
      body: JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "phone": phone,
        "password": password,
        "email": email,
        "gender": gender,
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
      <h1>Register</h1>
      <div className='reg_inputs'>
        <input type="text" onChange={(e) => setfirstName(e.target.value)} className='reg_inp' placeholder='Enter your firstName' />
        <input type="text" onChange={(e) => setlastName(e.target.value)} className='reg_inp' placeholder='Enter your firstName' />
        <input type="text" onChange={(e) => setEmail(e.target.value)} className='reg_inp' placeholder='Enter your email' />
        <select onChange={(e) => setGender(e.target.value)}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="text" onChange={(e) => setPhone(e.target.value)} className='reg_inp' placeholder='Enter your phone' />
        <input type="text" onChange={(e) => setPassword(e.target.value)} className='reg_inp' placeholder='Enter your Passwordword' />
        {
          (err) && <p className='error'>{err}</p>
        }
        <button onClick={() => register()} className='register-button'>
          <span>Register</span>
        </button>
      </div>


    </React.Fragment>
  )
}

export default EmployeeRegistration
