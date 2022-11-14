import PametnaKockica from "./PametnaKockica";
import RedKockica from "./RedKockica";

const MatrixKockica = (props: any) => {
  const kolikoKolona = props.kolikoKolona;
  const kolikoRedova = props.kolikoRedova;

  let jsxRedovi = [];
  for (let i = 1; i <= kolikoRedova; i++) { // ovde sklapamo jedan red
    jsxRedovi.push(<RedKockica kolikoKolona={kolikoKolona} tipKockica={props.tipKockica} selectedColor={props.selectedColor} />);
  }


  return (
    <div className="">ovde ce biti matrix
      {jsxRedovi}

    </div>
  )
}

export default MatrixKockica;