import Kockica from "./Kockica";

const NizKockica = (props: any)=> {
  return (
    <div className="niz-kockica">
      {
        props.niz.map((broj: any, index: number)=>{
          return (
            <Kockica key={index} broj={broj} />
          );
        })
      }
    </div>
  );
};

export default NizKockica;