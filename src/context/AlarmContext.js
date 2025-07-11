import { createContext, useContext } from "react";

export const AlarmContext = createContext({
    data: [],
    addAlarm: (Atime) => {},
    updateAlarm: (id, Atime) => {},
    removeAlarm: (id) => {},
})

export const useAlarm = () => {
    return useContext(AlarmContext)
}

export const AlarmProvder = AlarmContext.Provider