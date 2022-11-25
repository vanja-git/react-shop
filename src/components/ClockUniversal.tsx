import {useEffect, useState} from "react";
import ClockDisplayAnalog from "./ClockDisplayAnalog";
import ClockDisplaySimple from "./ClockDisplaySimple";


let intervalId:any = false; // id za javascript interval

const ClockUniversal = () => {
    // const sati = 6;
    // const minute = 25;
    const [time, setTime] = useState(Date.now()); // state time je u milisekundama TIMESTAMP

    const tick = () => {
        // ova funkcija se mora pozvati svake sekusde tj. na ssvaki tick tokom tickinga
        setTime(Date.now());
    }

    useEffect(()=>{
        // ova funkcija u ovom obliku ce biti pozvana samo jednom kada se komponenta MOUNTUJE (prvi put nacrta na ekranu)
        if (intervalId === false) {
            // ako nismo zapoceli interval
            // zapocinjemo ga sada
            intervalId = setInterval(tick, 1000); // TICKING, pozivamo tick svake sekudn
        }
    }, []);



    // iza time koji je u milisekundam izvlacimo sate, minute, sekunde..
    const d =  new Date(time);
    const sati = d.getHours();
    const minute = d.getMinutes();
    const sekunde = d.getSeconds();



    return (

        <div>
            <h3>Clock Universal</h3>
            <ClockDisplayAnalog sati={sati} minute={minute} sekunde={sekunde}  />
            <ClockDisplaySimple sati={sati} minute={minute} sekunde={sekunde} />
            <ClockDisplayAnalog sati={sati} minute={minute} sekunde={sekunde}  />
            <ClockDisplayAnalog sati={sati} minute={minute} sekunde={sekunde}  />
            <ClockDisplaySimple sati={sati} minute={minute} sekunde={sekunde} />
   
        </div>
    );

};

export default ClockUniversal;