import  {useState,useRef,useEffect} from 'react'
const formatTime=(time)=>{
    let hour=Math.floor(time/60);
    let minutes=Math.floor(time/60)
    let seconds=Math.floor(time-minutes*60)
    //let hseconds=Math.floor(time-seconds*60)
    if(hour<=10) hour='0'+hour;
    if(minutes<=10) minutes='0'+minutes;
    if(seconds<=10) seconds='0'+seconds;
    //if(hseconds<=10) hseconds='0'+hseconds;
    return hour+':'+minutes +':'+seconds//+':'+hseconds
}




function Timers({seconds}){
    const[countdown,setCountdown]=useState(seconds)
    const timerId=useRef()
useEffect(()=>{
    timerId.current=setInterval(()=>{
    setCountdown(pev=>pev-1)
},1000)
return()=>clearInterval(timerId.current)
},[])
useEffect(()=>{
    if(countdown <=0){
        clearInterval(timerId.current)
        alert("TIME IS ENDED")
    }
},[countdown])
return(
    <h2>COUNT DOWN:{formatTime(countdown)}</h2>
)
}
export default Timers