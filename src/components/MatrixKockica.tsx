import PametnaKockica from "./PametnaKockica";
import RedKockica from "./RedKockica";

const MatrixKockica = (props: any) => {
  const kolikoRedova = props.kolikoRedova;
  const kolikoKolona = props. kolikoKolona;

  let jsxRedovi = [];
  for (let i = 1; i <= kolikoRedova; i++) {
    // ovde sklapamo jedan red
    jsxRedovi.push(<RedKockica kolikoKolona={kolikoKolona} />);
  }


  return (
    <div className="">ovde ce biti matrix
      {jsxRedovi}

    </div>
  )
}

export default MatrixKockica;