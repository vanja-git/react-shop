import Firstdiv from "./Firstdiv";

const Firstdivniz = (props: any)=> {
  return (
    <div className="firstdiv-niz">
      {
        props.niz.map((myimage: any, mytitle: any, mytext:any, index: number)=>{
          return (
            <Firstdiv key={index} myimage={myimage} mytitle={mytitle} mytext={mytext} />
            
          );
        })
      }
    </div>
  );
};

export default Firstdivniz;