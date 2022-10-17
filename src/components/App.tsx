import Kockica from "./Kockica";
import MyFirstComponent from "./MyFirstComponent";
import NizKockica from "./NizKockica";


const App = () => {
  return (
    <div className="App">
      <MyFirstComponent />
      Hello I'am App
      <MyFirstComponent />
      <Kockica />
      <Kockica broj={5}/>
      <Kockica brqj={6}/>
      <Kockica nekitext="nesto" />
      <Kockica nekitext={"nesto"} nekidrugipodatak={123}josNesto={234} moze_i_ovako={789} />
      <Kockica nekiprop />
      <Kockica nekiprop={true} />
      <Kockica nekiprop={false} />
      <NizKockica niz={[1,3,9,4,6,2]} />
      <NizKockica niz={[5,5,5]} />
      <NizKockica niz={[]} />
      <NizKockica niz={[8,1,6,1,1,1,9,9,9,20]} />
    </div>
  );
}

export default App;
