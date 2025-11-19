import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {



  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const formBody = { email, password }



  async function loginApi() {

    try {

      const res = await axios.post("http://localhost:4000/user/login", formBody)

      if (res.status === 200) {
        setMessage(res.data.message)
        
        localStorage.setItem("token" , res.data.token)

      }else{
        setMessage("Some Error !")
      }

    } catch (error) {
      console.log(error)
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


        <p style={{ color: "red" }}> {message} </p>


        <button type='button' onClick={loginApi}> Login  </button>

      </form>




    </div>
  )
}

export default Login