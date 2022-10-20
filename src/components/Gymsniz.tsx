
import Firstdiv from "./Firstdiv";

/*
const gyms = [

  {
      name: "Tina",
      city: "New York",
      imgUrl: "https://www.lagreefitness.com/img/lagreefitness-home-micro-x2.jpg"
  },
  {
      name: "Maria",
      city: "Denver",
      imgUrl: "https://www.lagreefitness.com/img/lagreefitness-mini-homethumb-x2.jpg"
  },
  {
      name: "Patricia",
      city: "Santa Monica",
      imgUrl: "https://www.lagreefitness.com/img/lagreefitness-home-minipro-x2.jpg"
  },
  {
      name: "Monica",
      city: "Tampa",
      imgUrl: "https://www.lagreefitness.com/img/mega-home-hover.jpg"
  }
]
*/


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