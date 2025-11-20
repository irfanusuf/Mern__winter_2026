import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserProfile = () => {
 

    const [username , setUsername] = useState("")


   async function fetchUserApi (){

        try {
            const token = localStorage.getItem("token")

            const response = await axios.get(`http://localhost:4000/user?token=${token}`)

            if(response.status === 200){

                setUsername(response.data.username)
            }   

        } catch (error) {
            console.log(error)
        }


    }

        useEffect(()=>{

            fetchUserApi()

        }, [])





  return (
    <div>


    <h1> Welcome  {username} </h1>
    <h3> This is secure user dashboard   , this should open only after succesfull login  </h3>

    </div>
  )
}

export default UserProfile