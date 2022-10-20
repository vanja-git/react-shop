import SingleGym from "./SingleGym";

const Gymsniz2 = (props:any) => {
 const gyms:any=props.niz
  return (
    <div className="gyms-div">
      {
        gyms.map((gym:any, index:number) => {
          return (
            <SingleGym key={index} gym={gym} />
          )
        })
      }
    </div>
  )
}

export default Gymsniz2;