import  {useState,useRef,useEffect} from 'react'
function Countdown({seconds}){
    const[countdown,setCountdown]=useState(seconds)
const timerId=useRef()
useEffect(()=>{setCounter(pev=>pev-1)
},1000)
return()=>clearInterval(timerId.current)
}
return(
    <h2>COUNT DOWN:{countdown}</h2>
)

export default Countdown