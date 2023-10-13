const MovieInfo = ({ title, time, genres }) => {
    
    const genreDisplay = genres.map(genre => {
        return <span key={genre}>{genre}</span>
    })

    return (
    <div>
        <h1>{title}</h1>
        <p>{time}</p>
        {genreDisplay}
    </div>
  )
}

export default MovieInfo