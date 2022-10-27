import KockicaBojaPametna from "./KockicaBojaPametna";
import PametnaKockica from "./PametnaKockica";

const RedKockica = (props: any) => {
  const kolikoKolona = props.kolikoKolona;

  let jsxKockice = [];
  for (let i = 1; i <= kolikoKolona; i++) {
    jsxKockice.push(<KockicaBojaPametna key={i} />);
  }

  return (
    <div className="niz-kockica">
      {jsxKockice}
    </div>
  )
}

export default RedKockica;