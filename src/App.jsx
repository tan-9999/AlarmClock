import { useState, useEffect } from "react"
import { AlarmProvder } from "./context"
import ClockCard from "./components/ClockCard"
import DarkMode from "./components/DarkMode";
import ItsTime from "./components/ItsTime";

function App() {
  // const [data, setData] = useState([])
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem("alarms");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  
  
  // const addAlarm = (Atime) => {
  //   // console.log(Atime);
  //   setData((prev) => [{id: Date.now(), ...Atime}, ...prev])
  // }
  const addAlarm = (Atime) => {
    console.log("addAlarm called with:", Atime); 
    setData((prev) => [{ id: Date.now(), ...Atime }, ...prev]);
  };
  
  const updateAlarm = (id, Atime) => {
    // console.log(Atime);
    setData((prev) =>
      prev.map((prevAlarm) => (prevAlarm.id === id ? { ...prevAlarm, ...Atime } : prevAlarm))
    );
  }
  
  const removeAlarm = (id) => {
    setData((prev) => prev.filter((Atime) => Atime.id !== id));
  }
  
  
  useEffect(() => {
  try {
    const saved = localStorage.getItem("alarms");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        setData(parsed);
      }
    }
  } catch (err) {
    console.error("Invalid localStorage alarms:", err);
    localStorage.removeItem("alarms");
  }
}, []);

useEffect(() => {
  localStorage.setItem("alarms", JSON.stringify(data));
  console.log("Data saved to localStorage:", data);
}, [data]);

  

  return (
    <AlarmProvder value={{ data, setData, addAlarm, updateAlarm, removeAlarm }}>

            <ItsTime data={data} setData={setData} />

            <DarkMode />
        
        <div className="bg-gray-800 dark:bg-gray-200 flex flex-col items-center justify-center h-screen">
            <ClockCard />
        </div>
    </AlarmProvder>
  )
}

export default App
