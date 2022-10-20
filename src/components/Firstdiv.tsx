const Firstdiv = (props: any) => {
  console.log(props);
  let a = "sometexttoadd";

  const src = props.myimage;


  return (
    <div className="first-div">
      OVAJ
      <img src={src} />
      <div className="divtitle">{props.mytitle}</div>
      <div className="divtext">{props.mytext} {a}</div>
    </div>
  );
};

export default Firstdiv;