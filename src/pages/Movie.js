import { movies } from "../data"
import NavBar from '../components/NavBar.js'
import MovieInfo from "../components/MovieInfo"

function Movie() {

  const movieDisplay = movies.map(movie => {
    return <MovieInfo key={movie.title} {...movie} />
  })

  return (
    <>
      <header>
        <NavBar />  
      </header>
      <main>
        <div>
          {movieDisplay}
        </div>
      </main>
    </>
  );
};

export default Movie;
