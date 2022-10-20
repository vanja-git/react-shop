const Kockica = (props: any)=> {
  let a = props.broj;
  return (
    <div className="kockica">{props.broj} {props.nekitext} {props.nekidrugipodatak} {a}</div>
  );
};

export default Kockica;