import React, { useState } from 'react'

const Register = () => {


  const [username, setusername] = useState("")

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [message , setMessage] = useState("")



  const formBody = {
    username,
    email,
    password
  }


  async function registerApi() {

    try {
      const response = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formBody)
      })
      const data = await response.json()

      if (response.status === 201) {

        console.log(data)
      }else{
        setMessage("Bad request , All credentials required !")
      }

    } catch (error) {
      
      console.log(error.status)
    }


  }



  return (
    <div className='register'>


      <h1> Register From </h1>

      <form className='register_form'>

        <input
          placeholder='Enter your UserName'
          type='text'
          value={username}
          onChange={(e) => {
            setusername(e.target.value)
          }}
        />


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


          <p style={{color : "red"}}> {message} </p>


        <button type='button' onClick={registerApi}> Register  </button>

      </form>




    </div>
  )
}

export default Register