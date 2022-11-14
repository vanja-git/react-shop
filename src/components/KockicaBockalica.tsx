import { useState } from "react";

const KockicaBockalica = (props: any) => {
    const selectedColor = props.selectedColor;

    const [color, setColor] = useState("")

    const HandleClick = () => {
        console.log('klik na kockicu bockalicu');
        setColor(selectedColor);
    };

    return (
        <div
            className={"kockica " + color}
            onClick={HandleClick}
        ></div>
    );
};

export default KockicaBockalica;


/*

const f = ()=> {
    return 5;
}


let broj = f();


const izracunajObimIPovrsinu = (precnik)=> {
    let povrsina = 123;
    let obim = 25;
    return [obim, povrsina];
},

let [obim, povrsina] = izracunajObimIPovrsinu(10)

let privremeno = izracunajObimIPovrsinu(10)
let obim = privremo[0]
let povrsina = privremno[0]


let ff = ()=> {
    return {
        arezultat: 132,
        b: 4648,
        c: 846546,
        d: 468468
    }
}

let {b, d} = ff()

let temp = ff()
let b = temp.a;
let d = temp.d

*/
