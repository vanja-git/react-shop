import { useState } from "react";

const ViseManjeBoja = () => {
  const pocetniRezultat = 0;
  const [rezultat, setRezultat] = useState(pocetniRezultat);


  const HandleClick = (e: any) => {
    console.log('jedan vise');
    setRezultat(rezultat + 1);
  }

  const HandleClick2 = (e: any) => {
    console.log('jedan manje');
    setRezultat(rezultat - 1);
  }


  let color = '';
  if (rezultat === 1) {
    color = 'purple';
  } else if (rezultat === 2) {
    color = 'blue';
  } else if (rezultat === 3) {
    color = 'green';
  }

  

  return (
    <div className="plusminus-wrap">
      <div className="plusminus-box" onClick={HandleClick}>Dodaj</div>
      <div className="plusminus-box" onClick={HandleClick2}>Oduzmi</div>
      <div className={"plusminus-box " + color}>{rezultat}</div>
    </div>
  );
}

export default ViseManjeBoja;