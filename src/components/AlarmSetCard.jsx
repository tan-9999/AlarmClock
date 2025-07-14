import { useState, useEffect } from "react"
import { useAlarm } from "../context"
// import iziToast from "iziToast"

function AlarmSetCard() {
    const [hr, setHr] = useState()
    const [min, setMin] = useState()
    const [sec, setSec] = useState()
    const {addAlarm} = useAlarm()

    const add = (e) => {
        e.preventDefault()

        // setLsTime(hr+":"+min+":"+sec)
        // if (!min) return
        // addAlarm({Atime: lsTime})

        if (!min && min !== "0") return;
        const formatted = `${hr || "00"}:${min || "00"}:${sec || "00"}`;
        addAlarm({ Atime: formatted });

        setHr("")
        setMin("")
        setSec("")
    }
        
    
    return (
        <>
        <div className="flex flex-col py-10 px-8 items-center bg-gray-900 dark:bg-gray-100 border-2 border-white dark:border-gray-400 rounded-2xl">
            <form onSubmit={add} className="flex flex-col">
                <div className="flex items-center justify-center">
                <input
                    type="text"
                    className="h-14 w-14 py-4 px-1 m-4 border-gray-300 dark:border-gray-500 border-2 rounded text-2xl text-white dark:text-black bg-gray-700 dark:bg-gray-300 text-center"
                    value={hr}
                    onChange={(e) => {
                    if (e.target.value <= 23 && e.target.value.length <= 2) {
                        setHr(e.target.value)
                    }
                }}/><span className="text-4xl text-white dark:text-gray-100">:</span>
                <input
                    type="text"
                    className="h-14 w-14 py-4 px-1 m-4 border-gray-300 dark:border-gray-500 border-2 rounded text-2xl text-white dark:text-black bg-gray-700 dark:bg-gray-300 text-center"
                    value={min}
                    onChange={(e) => {
                    if (e.target.value <= 59 && e.target.value.length <= 2) {
                        setMin(e.target.value)
                    }
                }}/><span className="text-4xl text-white dark:text-gray-100">:</span>
                <input
                    type="text"
                    className="h-14 w-14 py-4 px-1 m-4 border-gray-300 dark:border-gray-500 border-2 rounded text-2xl text-white dark:text-black bg-gray-700 dark:bg-gray-300 text-center"
                    value={sec}
                    onChange={(e) => {
                    if (e.target.value <= 59 && e.target.value.length <= 2) {
                        setSec(e.target.value)
                    }   
                }}/>
                <br />
                </div><br />
                <button type="submit" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Add Reminder</button>
            </form>
            </div>
        </>
    )
}


export default AlarmSetCard