import { useState } from "react";
import { useAlarm } from "../context";

function AlarmListItems({time}) {
    const [isAlarmEditable, setIsAlarmEditable] = useState(false)
    const [timeMsg,setTimeMsg] = useState(time.Atime)
    const { updateAlarm, removeAlarm } = useAlarm()

    const editAlarm = () => {
        console.log(timeMsg);
        updateAlarm(time.id, {...time, Atime: timeMsg})
        console.log(time);
        setIsAlarmEditable(false)
    }

    return (
        <>
        <div className="flex flex-row bg-gray-600 dark:bg-gray-300 py-5 px-2 my-1 mx-0.5 border border-white dark:border-gray-500 rounded">
            {/* <div className=" text-gray-100 text-2xl pr-3"></div> */}
            <input
                  type="text"
                  maxLength={8}
                  className={`border outline-none w-full text-2xl text-white dark:text-black bg-transparent rounded-lg ${
                              isAlarmEditable ? "border-black/10 dark:border-white/20 px-2" : "border-transparent"
                  }`}
                  value={timeMsg}
                  onChange={(e) => {
                  if (!isAlarmEditable) return;

                  let value = e.target.value.replace(/[^0-9]/g, "");
                  if (value.length > 6) value = value.slice(0, 6);

                  if (value.length >= 5)
                                    value = `${value.slice(0, 2)}:${value.slice(2, 4)}:${value.slice(4, 6)}`;
                  else if (value.length >= 3)
                                    value = `${value.slice(0, 2)}:${value.slice(2, 4)}`;
                  else if (value.length >= 1)
                                    value = `${value.slice(0, 2)}`;

               setTimeMsg(value);
               }}
               readOnly={!isAlarmEditable}/>

            <button
                  className="inline-flex w-8 h-8 mx-1.5 rounded-lg text-sm border border-black/10 dark:border-white/20 justify-center items-center bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 shrink-0"
                  onClick={() => {
                        if (isAlarmEditable) {
                                editAlarm();
                        } else setIsAlarmEditable((prev) => !prev);
                  }}
            >
                  {isAlarmEditable ? "📁" : "✏️"}
            </button>
            <button
                  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 dark:border-white/20 justify-center items-center bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 shrink-0"
                  onClick={() => removeAlarm(time.id)}
            >
                  ❌
            </button>
        </div>
        </>

    )
}

export default AlarmListItems