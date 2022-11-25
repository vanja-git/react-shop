import Test1Red from "./Test1Red";

const Test1Matrix = (props: any) => {
    const kolikoKolona1 = props.kolikoKolona1;
    const kolikoRedova1 = props.kolikoRedova1;

    let jsxRedovi1 = [];
    for (let i = 1; i <= kolikoRedova1; i++) { 
        jsxRedovi1.push(<Test1Red key={i} kolikoKolona1={kolikoKolona1} selectedNumber={props.selectedNumber} />)
}
return (
    <div className="">{jsxRedovi1}</div>
  )
}

export default Test1Matrix;