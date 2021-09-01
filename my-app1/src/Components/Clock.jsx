import React, {useState, useEffect} from 'react'

function Clock () {
   let date = new Date
   let arr = []

   const [time, setTime] = useState(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
   const [counter, setCount] = useState(0)

   useEffect(() => {
      setInterval(ticker, 1000)
      console.log("Effect!")
   }, [arr])
   
   const ticker = () => {
      date = new Date
      arr.push(1)
      setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
   }

   return (
      <div>
         <h2>Time: {time}</h2>
         <h2>Count: {counter}</h2>
         <button onClick={()=>ticker()}>tick!</button>
         <button onClick={()=>setCount(counter+1)}>count!</button>
      </div>
   )
}

export default Clock