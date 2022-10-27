import { useState } from "react";

const KockicaBojaPametna = (props:any) => {
  // const color = props.color;
  const pocetniRezultat = 0;
  const [rezultat, setRezultat] = useState(pocetniRezultat);

  const handleClick = ()=> {
    setRezultat(rezultat + 1);
  };

  let color = '';
  if (rezultat === 1) {
    color = 'purple';
  } else if (rezultat === 2) {
    color = 'blue';
  } else if (rezultat === 3) {
    color = 'green';
  }
  
  return (
    <div className={"kockica " + color} onClick={handleClick}>{rezultat}</div>
  )
}

export default KockicaBojaPametna;