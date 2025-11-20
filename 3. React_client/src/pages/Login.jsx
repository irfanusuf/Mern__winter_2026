import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const formBody = { email, password }

  const navigate = useNavigate()
           
  async function loginApi() {
    try {
      const res = await axios.post("http://localhost:4000/user/login", formBody)
      if (res.status === 200) {
        toast.success(res.data.message)
        localStorage.setItem("token", res.data.token)

        setTimeout(() => {
          navigate("/user/profile")
        }, 3000);

      }
    } catch (error) {
      if (error.response) {
        const codesARR = [400 , 401 , 403 , 404 , 500 ]
        if (codesARR.includes(error.status)) {
          toast.error(error.response.data.message)
        }else{
          toast.error("Something Went Wrong !")
        }
      }else{
        toast.error("Connection Refused !")
      }
    }
  }

  return (
    <div className='register'>


      <h1> Login From </h1>

      <form className='login_form'>


        <input
          placeholder='Enter your Email'
          type='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />

        <input
          placeholder='Enter your Password'
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />





        <button type='button' onClick={loginApi}> Login  </button>

      </form>




    </div>
  )
}

export default Login