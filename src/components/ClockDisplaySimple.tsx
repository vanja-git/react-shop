import { konvertujBrojSaPocetnimNulama } from "../utils/time-utils";

const ClockDisplaySimple = (props:any) => {
    const sati = props.sati;
    const minute = props.minute;
    const sekunde = props.sekunde;

    // pretvarano brojcane sati miute i sekunde u stringove koje uvek imaju dve cifre i pocinju sa nulom
    const hh = konvertujBrojSaPocetnimNulama(sati);
    const mm = konvertujBrojSaPocetnimNulama(minute); // na priemr 5 bude '05'
    const ss = konvertujBrojSaPocetnimNulama(sekunde);

    return (
        <div>
            <p>Display Time Simple {hh}:{mm}:{ss}</p>
        </div>

    );
};

export default ClockDisplaySimple;