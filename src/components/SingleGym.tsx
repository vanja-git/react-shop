const SingleGym = (props: any) => {
  const gym = props.gym;

  return (
    <div className="gym-details">
      <div className="persons-name">{gym.name}</div>
      <div className="persons-age">{gym.age}</div>
      <img src={gym.imgUrl} />
      <div className="persons-city">{gym.city}</div>
    </div>
  )
};

export default SingleGym;





