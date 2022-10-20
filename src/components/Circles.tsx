const Circles = (props: any)=> {
  // let a = 8;
  return (
    <div className="circles">
      <div className="divone">{props.letter}</div> 
      <div className="divtwo">{props.nrsample}</div>
    </div>
  );
};

export default Circles;