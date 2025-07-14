import { useEffect, useState, useRef } from "react";
// import iziToast from "iziToast";
import alarm from "../asset/alarm.wav";

function ItsTime({data, setData}) {
  const [value, setValue] = useState(0);
  const hasRunRef = useRef(false);

function snooze15() {
  console.log("inside func");

  const now = new Date();

  // Add 5 minutes to the current time
  now.setMinutes(now.getMinutes() + 5);
  const snoozeTime = now.toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  console.log("New snooze time:", snoozeTime);
  setData((prev) => [{ id: Date.now(), Atime: snoozeTime }, ...prev]);


}

useEffect(() => {
    localStorage.setItem("alarms", JSON.stringify(data))
    console.log('Data saved to localStorage:', data);
  }, [data])


//-------------------------------------------------------------------
  const play = () => {
    new Audio(alarm).play();
  };

    useEffect(() => {
        play();

    }, [value]);

//-------------------------------------------------------------------
  const UpdateTime = () => {
    const current = new Date().toLocaleTimeString("en-GB");
    // setNow(current);
    const Alarms = JSON.parse(localStorage.getItem("alarms")) || [];
    // snooze15();
    Alarms.forEach((Atime) => {
      if ((Atime.Atime === current) && !hasRunRef.current) {//|| snoozeTime === current
        hasRunRef.current = true;
        
        console.log("Alarm triggered!");

        setValue((v) => v + 1);
        iziToast.show({
                theme: 'dark',
                icon: 'icon-person',
                title: 'Alarm!!!',
                message: 'you have set an alarm at now...',
                position: 'topCenter',
                progressBarColor: 'rgb(0, 255, 184)',
                buttons: [
                    [
                        `<button id="snoozeBtn">+5</button>`,
                        function (instance, toast) {
                          console.log("+5 is clicked");
                          snooze15();
                          instance.hide({ transitionOut: 'fadeOutUp' }, toast, 'buttonName');
                        },
                        true,
                    ]]});
              }
          });
    };

  useEffect(() => {
    const interval = setInterval(UpdateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return null;
}

export default ItsTime;
