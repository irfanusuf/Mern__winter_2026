import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {


    const [username, setUsername] = useState("")

    const navigate = useNavigate()


    async function fetchUserApi() {

        try {
            const token = localStorage.getItem("token")
            if (token !== null) {
                const response = await axios.get(`http://localhost:4000/user/verify/${token}`)   // API CALL
                if (response.status === 200) {
                    setUsername(response.data.payload.username)
                }

            }else{
                navigate("/login")
            }

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
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