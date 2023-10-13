import { actors } from "../data"
import NavBar from '../components/NavBar.js'
import PersonArticle from "../components/PersonArticle";

function Actors() {

  const actorsDisplay = actors.map(director => {
    return <PersonArticle key={director.name} {...director}/>
  })


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorsDisplay}
      </main>
    </>
  );
};

export default Actors;
