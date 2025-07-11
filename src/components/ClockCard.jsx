import { useState, useEffect } from "react";
import AlarmSetCard from "./AlarmSetCard"
import AlarmList from "./AlarmList";

function ClockCard() {

    let time  = new Date().toLocaleTimeString()
    let timeBig = new Date().toLocaleTimeString('en-GB');

    const [min, setMin] = useState()
    const [sec, setSec] = useState()
    const [ampm, setAmpm] = useState()
    const [hr12, setHr12] = useState()
    const [hr24, setHr24] = useState()
    const [hr, setHr] = useState()
    

  
  const UpdateTime=()=>{
    time = new Date().toLocaleTimeString()
    if (time[1] == ":") {
        setHr12("0"+time[0])
        setMin(time[2]+time[3])
        setSec(time[5]+time[6])
        setAmpm(time[8]+time[9])
    } else {
        setHr12(time[0]+time[1])
        setMin(time[3]+time[4])
        setSec(time[6]+time[7])
        setAmpm(time[9]+time[10])
    }
    timeBig = new Date().toLocaleTimeString('en-GB');

    if (timeBig[1] == ":") {
        setHr24("0"+timeBig[0])
    } else {
        setHr24(timeBig[0]+timeBig[1])
    }
    
  }
  setInterval(UpdateTime)

const [isVisible, setIsVisible] = useState(false);
const [isVisible2, setIsVisible2] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
    {isVisible ? setHr(hr24) : setHr(hr12)}
  };

  const handleSetAlarm = () => {
    setIsVisible2(!isVisible2);
  };


        return (
        <>
        <div className="h-130 flex flex-row">
    <div className="flex flex-row items-center mr-5">
      <div className="flex flex-col items-center bg-gray-900 dark:bg-gray-100 py-35 px-20 ml-10 mr-5 border-2 border-white dark:border-gray-400 rounded-2xl">
        <div className="flex items-center justify-center">
          {isVisible && <p className="w-10 hidden extra"> </p>}

          <input
            type="text"
            className="h-24 w-24 py-4 px-1 m-4 border-gray-300 dark:border-gray-500 border-2 rounded text-4xl text-white dark:text-black bg-gray-700 dark:bg-gray-300 text-center z-20"
            value={!hr ? hr24 : hr}
            onChange={(e) => setHr(e.target.value)}
            disabled
          />
          <span className="text-4xl text-white dark:text-black ">:</span>

          <input
            type="text"
            className="h-24 w-24 py-4 px-1 m-4 border-gray-300 dark:border-gray-500 border-2 rounded text-4xl text-white dark:text-black bg-gray-700 dark:bg-gray-300 text-center z-20"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            disabled
          />
          <span className="text-4xl text-white dark:text-black ">:</span>

          <input
            type="text"
            className="h-24 w-24 py-4 px-1 m-4 border-gray-300 dark:border-gray-500 border-2 rounded text-4xl text-white dark:text-black bg-gray-700 dark:bg-gray-300 text-center z-20"
            value={sec}
            onChange={(e) => setSec(e.target.value)}
            disabled
          />

          {isVisible && (
            <p className="h-24 w-24 text-center ml-0 py-6 pl-0 text-4xl text-white dark:text-black ">
              {ampm}
            </p>
          )}<br />
            </div><br />
            <div className="flex flex-row">
                <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                onClick={handleSetAlarm}
                >{isVisible2 ? 'Done' : 'Set Alarm'}</button>
                <button type="button" className="text-yellow-400 hover:text-white dark:text-yellow-600 border border-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:border-yellow-500 dark:hover:text-white  dark:hover:bg-yellow-400 ml-4"
                onClick={handleClick}
                >{isVisible ? '12' : '24'}</button>
            </div>
            </div>
            {isVisible2 && (
                <div className="mb-2 z-50">
                    <AlarmSetCard />
                </div>
                )}
            </div>
            <div className="flex flex-col items-center bg-gray-900 dark:bg-gray-100 pt-5 px-5 mb-1 mr-8 border-2 border-white dark:border-gray-400 rounded-2xl z-50">
                <AlarmList />
            </div>
            </div>
        </>
        )
}


export default ClockCard