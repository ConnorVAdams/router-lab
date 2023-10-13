import { movies } from "../data"
import NavBar from '../components/NavBar.js'
import MovieCard from "../components/MovieCard";

function Home() {
  const movieDisplay = movies.map(movie => {
    return <MovieCard key={movie.title} id={movie.title} {...movie} />
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movieDisplay}
      </main>
    </>
  );
};

export default Home;
