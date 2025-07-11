import { useEffect, useState, useRef } from "react";
import iziToast from "iziToast";
import alarm from "../asset/alarm.wav";

function ItsTime() {
  // const [now, setNow] = useState("");
  const [value, setValue] = useState(0);
  const hasRunRef = useRef(false);


  window.snooze15 = function () {
  const current = new Date().getMinutes() + 15
  // setNow(current);
  // toLocaleTimeString("en-GB");
  const Alarms = JSON.parse(localStorage.getItem("alarms")) || [];

  Alarms.forEach((Atime) => {
    if ((Atime.Atime === current) && !hasRunRef.current) {
      hasRunRef.current = true;
      console.log("Snooze triggered!");

      const oldTime = Atime.Atime;
      let hr = "", min = "", sec = "";

      if (oldTime[1] === ":") {
        hr = "0" + oldTime[0];
        min = String(Number(oldTime[2] + oldTime[3]) + 15);
        sec = oldTime[5] + oldTime[6];
      } else {
        hr = oldTime[0] + oldTime[1];
        min = String(Number(oldTime[3] + oldTime[4]) + 15);
        sec = oldTime[6] + oldTime[7];
      }

      const snoozeTime = `${hr}:${min}:${sec}`;
      console.log("New snooze time:", snoozeTime);
    }
  });
};


  const play = () => {
    new Audio(alarm).play();
  };

    useEffect(() => {
        play();

    }, [value]);

  const UpdateTime = () => {
    const current = new Date().toLocaleTimeString("en-GB");
    // setNow(current);
    const Alarms = JSON.parse(localStorage.getItem("alarms")) || [];
    snooze15();
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
                position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
                progressBarColor: 'rgb(0, 255, 184)',
                buttons: [
                    [`<button id="snoozeBtn">+15</button>`, function (instance, toast) {
                      instance.hide({ 
                        transitionOut: 'fadeOutUp' 
                      }, toast, 'buttonName');
                  }, true]
                ],
                onOpening: function () {
                  console.info('onOpening!!!');
                  
                },
                onClosing: function(instance, toast, closedBy){
                    console.info('closedBy: ' + closedBy);
                    setTimeout(() => {
                    const btn = document.getElementById("snoozeBtn");
                    if (btn) {
                      btn.addEventListener("click", snooze15());
                    }
                  }, 0);
                }});
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
