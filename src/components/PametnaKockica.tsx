import { useState } from "react";

const PametnaKockica = () => {
  const [broj, setBroj] = useState(0);

  const HandleClick = (e: any)=> {
    console.log('desio se click');
    setBroj(broj + 1);
  };

  return (
    <div className="kockica kockica-pametna" onClick={HandleClick}>{broj}</div>
  )
}

export default PametnaKockica;