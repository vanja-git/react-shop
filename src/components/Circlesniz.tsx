import Circles from "./Circles";

const Circlesniz = (props: any)=> {
  return (
    <div className="circles-niz">
      {
        props.niz.map((letter: any, index: number)=>{
          return (
            <Circles key={index} letter={letter} />
            
          );
        })
      }
    </div>
  );
};

export default Circlesniz;