import PovecajSmanji from "./PovecajSmanji";

const RedKockica = (props: any) => {
  const kolikoKolona = props.kolikoKolona;

  let jsxKockice = [];
  for (let i = 1; i <= kolikoKolona; i++) {
    jsxKockice.push(<PovecajSmanji key={i} />);
  }

  return (
    <div className="red-povecajsmanji">
      {jsxKockice}
    </div>
  )
}

export default RedKockica;