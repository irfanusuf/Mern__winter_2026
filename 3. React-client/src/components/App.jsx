


import React, { useState } from 'react'

export const App = () => {


    const [count, setCount] = useState(0)


    function handlIncrement() {
        setCount(count => count + 1)
    }

    return (
        <div>

            <h1> hello class we are learning react  this is the dynamic html </h1>

            <h3> My count is : {count}     <span onClick={handlIncrement}> Increment </span> </h3>



        </div>
    )
}





