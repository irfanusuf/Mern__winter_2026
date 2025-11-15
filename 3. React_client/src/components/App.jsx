import { useState } from "react"




export const App = () => {

    const [count, setCount] = useState(0)

    const [loading, setLoading] = useState(false)

    const [username, setusername] = useState("abrar")

    const [arr, setArr] = useState(["mango , strawbery", "apple"])




    function handleClick() {

        console.log("button is clicked")

        setCount(count => count + 1)
    }


    function handleSwitchingAdmin() {

        console.log("changing admin....")

        setLoading(true)

        setTimeout(() => {
            setusername("Burhan")
            setLoading(false)
            console.log("Admin Changed Succesfully !")
        }, 100);


    }

    return (
        <div>
            <h1> Hello this is my first react app</h1>
            <h3>  count :  <span> {count} </span>   </h3>
            <h4> Welcome admin :  <span> {loading ? "loading......" : username}</span>  </h4>

            <button onClick={handleClick}> Click for increment </button>

            <button onClick={handleSwitchingAdmin}> Switch admin to super admin </button>
        </div>
    )

}


