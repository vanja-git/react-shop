import Test1 from "./Test1";

const Test1Red = (props:any) => {
    const kolikoKolona1 = props.kolikoKolona1;

    let jsxSiveKockice = [];
    for (let i = 1; i <= kolikoKolona1; i++) {
        jsxSiveKockice.push(<Test1 key={i} selectedNumber={props.selectedNumber}  />);
    }

    return (
        <div className="red-sivekockice">
      {jsxSiveKockice}
    </div>
    )
}

export default Test1Red;