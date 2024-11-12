import MoviesList from "./MoviesList";
import Title from "./Title";

const Section = (props) => {
  return (
    <div className="main">
      {props.movies.map((movie) => {
        return (
          <div className="section-cat">
            <Title movieTitle={movie.category} />
            <div className="movies-img">
              <MoviesList movieImg={movie.images} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
