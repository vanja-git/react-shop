import KockicaBockalica from "./KockicaBockalica";
import KockicaBojaPametna from "./KockicaBojaPametna";

const RedKockica = (props: any) => {
  const kolikoKolona = props.kolikoKolona;
  const tipKockica=props.tipKockica;

  let jsxKockice = [];
  for (let i = 1; i <= kolikoKolona; i++) {
    if (tipKockica==='bockalica') {
      jsxKockice.push(<KockicaBockalica key={i} selectedColor={props.selectedColor}/>);
    } else {
      // default tip kockica
      jsxKockice.push(<KockicaBojaPametna key={i} />);
    }
  }

  return (
    <div className="niz-kockica">
      {jsxKockice}
    </div>
  )
}

export default RedKockica;