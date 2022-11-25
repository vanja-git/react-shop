import { useState } from "react";
import Test1Matrix from "./Test1Matrix";

const Test1Bockalica = (props: any) => {
    const [selectedNumber, setSelectedNumber] = useState(0);
   
    const HandleClick1 = (e: any) => {
        console.log('dodat jedan');
        setSelectedNumber(1);
    }

    const HandleClick2 = (e: any) => {
        console.log('dodat dva');
        setSelectedNumber(2);
    } 
    
    const HandleClick3 = (e: any) => {
        console.log('dodat tri');
        setSelectedNumber(3);
    } 

    return (
        <div>
        <h3>Ovde ce se povecavati vrednosti</h3>
        <button onClick={HandleClick1}>+1</button>
        <button onClick={HandleClick2}>+2</button>
        <button onClick={HandleClick3}>+3</button>
        <p>Izabrani broj je: {selectedNumber}</p>
        <Test1Matrix kolikoRedova1={8} kolikoKolona1={8} selectedNumber={selectedNumber} />
        </div>
    );
};

export default Test1Bockalica;