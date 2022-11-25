import { useState } from "react";

const Test1 = (props: any) => {
    const selectedNumber = props.selectedNumber; // const [value, setValue] = useState(pocetnaVrednost);
    const [zbir, setZbir] = useState(0);

    const HandleClick = () => {
        console.log('proba');
        // setValue(selectedNumber);
        setZbir(zbir + selectedNumber);
    };


    return (

        <div>

            <div className="testone" onClick={HandleClick}>{zbir}</div>
        </div>


    );
};

export default Test1;