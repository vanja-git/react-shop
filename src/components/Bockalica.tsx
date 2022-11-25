import {useState} from "react";
import MatrixKockica from "./MatrixKockica";

const Bockalica = () => {
    const [selectedColor, setSelectedColor] = useState('');  
    
 
    
    return (
        <div>
            <h3>Bockalica</h3>
                <button onClick={() => {setSelectedColor("red")} }>Red</button>
                <button onClick={() => {setSelectedColor("blue")} }>Blue</button>
                <button onClick={() => {setSelectedColor("green")} }>Green</button>
                <button onClick={() => {setSelectedColor("yellow")} }>Yellow</button>
                <p>Selected color is: {selectedColor}</p>
                <MatrixKockica kolikoRedova={8} kolikoKolona={8} tipKockica="bockalica" selectedColor={selectedColor} />
        </div>
    );
};

export default Bockalica;