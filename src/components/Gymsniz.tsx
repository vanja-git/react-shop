import Firstdiv from "./Firstdiv";

const Gymsniz = (props: any) => {
  const gyms: any = props.niz;

  return (
    <div className="gyms-niz">
      {
        gyms.map((gym: any, index:number) => {
          return (
            <Firstdiv key={index} mytitle={gym.name} myimage={gym.imgUrl} mytext={"za sada isti tekst"} />
          )
        })
      }
    </div>
  );
};

export default Gymsniz;

/*
          <div className="gym-div">
            <h1>{gym.name}</h1>
            <p>City: {gym.city}</p>
            <img src={gym.imgUrl} alt={`${gym.name}`} width="200" />
            <hr />
          </div>
*/