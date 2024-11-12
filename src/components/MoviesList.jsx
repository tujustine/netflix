const MoviesList = (props) => {
  return (
    <>
      {props.movieImg.map((img) => {
        return <img src={img} />;
      })}
    </>
  );
};

export default MoviesList;
