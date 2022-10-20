import Kockica from "./Kockica";
import MyFirstComponent from "./MyFirstComponent";
import NizKockica from "./NizKockica";
import Circles from "./Circles";
import Circlesniz from "./Circlesniz";
import Firstdiv from "./Firstdiv";
import image1 from "./lagreefitness-home-mega-x2.jpg"
import image2 from "./lf-manimg.jpg"
import Firstdivniz from "./Firstdivniz";
import Gymsniz from "./Gymsniz";
import Gymsniz2 from "./Gymsniz2";
import PametnaKockica from "./PametnaKockica";
import KockicaBoja from "./KockicaBoja";





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
];


const Vezbanje = () => {
  return (
    <div className="App">
      <MyFirstComponent />
      Hello I'am App
      <MyFirstComponent />
      <PametnaKockica />
      <PametnaKockica />
      <PametnaKockica />
      <KockicaBoja color="" />
      <KockicaBoja color="red" />
      <KockicaBoja color="green" />
      <KockicaBoja color="orange" />
      <KockicaBoja color="violet" />
      <KockicaBoja color="blue" />
      <Kockica broj={5} />
      <Kockica />
      <Kockica broj={6} />
      <Kockica nekitext="nesto" />
      <NizKockica niz={[1, 3, 9, 4, 6, 2]} />
      <NizKockica niz={[5, 5, 5]} />
      <NizKockica niz={[]} />
      <NizKockica niz={[8, 1, 6, 1, 1, 1, 9, 9, 9, 20]} />
      <Circles letter={"d"} />
      <Circles letter={"p"} nrsample={"82"} />
      <Circlesniz niz={[2, 8, 3, 9, 6]} />
      {/*
      <Firstdiv myimage={<img src={image1} />} mytitle="sometitle" mytext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod autem satis est, eo quicquid accessit, nimium est; Materiam vero rerum et copiam apud hos exilem, apud illos uberrimam reperiemus." />
      <Firstdiv myimage={<img src={image2} />} mytitle="Second Title" mytext="Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Duarum enim vitarum nobis erunt instituta capienda. " />
      <Firstdivniz niz={[2, 8, 7]} />
      */}
      <Gymsniz niz={gyms} />
      <Gymsniz2 niz={gyms} />
    </div>
  );
}

export default Vezbanje;