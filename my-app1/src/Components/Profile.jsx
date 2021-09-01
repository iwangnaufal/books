import React, {useState} from 'react'

function Profil (props){
    const {counter, setCount} = props

    const increment = () =>{
        if (counter < 13){
            setCount(counter+1)
        }
        // setKurang(kurang-1)
    }
    return (
        <>
        <h1>Count : {counter}</h1>
        <button onClick={()=>increment()}>increment</button>
        </>
    )
}
export default Profil