const KockicaBoja = (props:any) => {
  const color = props.color;
  
  return (
    <div className={"kockica " + color}></div>
  )
}

export default KockicaBoja;