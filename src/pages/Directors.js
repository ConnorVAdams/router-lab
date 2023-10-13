import { directors } from "../data"
import NavBar from '../components/NavBar.js'
import PersonArticle from "../components/PersonArticle";

function Directors() {
  
  const directorsDisplay = directors.map(director => {
    return <PersonArticle key={director.name} {...director}/>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorsDisplay}
      </main>
    </>
  );
};

export default Directors;
