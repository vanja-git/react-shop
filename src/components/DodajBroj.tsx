import { useState } from "react";

const DodajBroj = () => {
  const [povecaj, setBroj] = useState(0);

  const HandleClick = (e: any) => {
    console.log('broj se povecao');
    setBroj(povecaj+5);
  }
  return (
    <div className="kockica kockica-pametna green" onClick={HandleClick}>{povecaj}</div>
  );
}

export default DodajBroj;