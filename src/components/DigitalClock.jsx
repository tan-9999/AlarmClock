import { useState } from "react";
import ClockCard from "./ClockCard";

function DigitalClock() {
    let time12 = "";
    let time  = new Date().toLocaleTimeString()
    let time24 = "";
    let timeBig = new Date().toLocaleTimeString('en-GB');


  const [d12time,setD12time] = useState()
  const [d24time,setD24time] = useState()
  
  
  const UpdateTime=()=>{
    time = new Date().toLocaleTimeString()
    if (time[1] == ":") {
        time12 = "0"+time[0]+":"+time[2]+time[3]+":"+time[5]+time[6]+" "+time[8]+time[9]
    } else {
        time12 = time[0]+time[1]+":"+time[3]+time[4]+":"+time[6]+time[7]+" "+time[9]+time[10]
    }
    timeBig = new Date().toLocaleTimeString('en-GB');

    if (timeBig[1] == ":") {
        time24 = "0"+timeBig[0]+":"+timeBig[2]+timeBig[3]+":"+timeBig[5]+timeBig[6]
    } else {
        time24 = timeBig[0]+timeBig[1]+":"+timeBig[3]+timeBig[4]+":"+timeBig[6]+timeBig[7]
    }
    setD12time(time12)
    setD24time(time24)
  }
  setInterval(UpdateTime)

  return (
    <>
        <h1>12hours :<b>{d24time[0]}{d12time[1]}:{d12time[3]}{d12time[4]}:{d12time[6]}{d12time[7]}  {d12time[9]}M</b></h1><br />
        <h1>24hours :<b>{d24time[0]}{d24time[1]}:{d24time[3]}{d24time[4]}:{d24time[6]}{d24time[7]}</b></h1><br />
    </>
    )
}

export default DigitalClock

