import { useState } from "react";


const PovecajSmanji = () => {
  const [klikrezultat, setplus] = useState(0);
  /*
  to sto dobijem sa useState je atate (lokalni state od react komponente), 
  state dolazi u vidu dve promenjive jedna za citanje statea a druga za izmenu
  PRAVILA su da ak ose state zove nesto onda se u prethodnoj liniji kdoa pise [nesto, setNesto] nesto je ujedno naziv state i promenjiva za citanje a setNesto je funkcija kojom pisemo nesto drugo u state.


  */

  const pocetniRezultat = 0;
  const [rezultat, setRezultat] = useState(pocetniRezultat);



  const HandleClick = (e: any) => {
    console.log('jedan vise');
    setplus(klikrezultat + 1);
    setRezultat(rezultat + 1);
  }

  const HandleClick2 = (e: any) => {
    console.log('jedan manje');
    setRezultat(rezultat - 1);
  }

  return (
    <div className="plusminus-wrap">
      <div className="plusminus-box" onClick={HandleClick}>POVECAJ</div>
      <div className="plusminus-box" onClick={HandleClick2}>SMANJI</div>
      <div className="plusminus-box">{rezultat}</div>
    </div>
  );
}

export default PovecajSmanji;