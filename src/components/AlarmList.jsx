import { useAlarm } from "../context";
import AlarmListItems from "./AlarmListItems";

function AlarmList() {
    const { data } = useAlarm();


    return (
        <>
        <div className="h-130 flex flex-col items-center bg-gray-900 dark:bg-gray-100 py-3 pb-5 px-8 mb-3 border-2 border-white dark:border-gray-500">
          <h1 className="text-gray-100 dark:text-gray-800 text-2xl py-1.5">
            <u><b>Alarm list...</b></u>
          </h1><div className="flex flex-col">
                {data.map((Atime) => (
                  <AlarmListItems key={Atime.id} time={Atime} />
                  ))}
            </div>
            
        </div>
        </>
    )
}

export default AlarmList