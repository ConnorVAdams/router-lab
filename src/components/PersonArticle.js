const DirectorArticle = ({ name, movies }) => {
  
    const filmographyDisplay = movies.map(movie => {
        return <li key={movie}>{movie}</li>
    })

    return (
    <article key={name}>
        <h2>{name}</h2>
        {filmographyDisplay}
    </article>
  )
}

export default DirectorArticle