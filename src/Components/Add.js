import { useState } from 'react'
import ResultCard from './ResultCard'

const Add = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([])

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value)
    fetch(`
          https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&
          language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (!data.errors) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  }
  return (
    <>
      <section className='mainSection'>
        <div className='sectionContent'>
          <div className='sectionTitle'>
            <h1>Welcome.</h1>
            <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
          </div>
          <div className='sectionSearch'>
            <form id='sectionForm'>
              <label htmlFor="sectionForm" >
                <input id='searchInput' value={query} onChange={handleChange} type="search"
                  placeholder='Search for a movie, tv show, person...'></input>
              </label>
              <input id='getInput' type="button" value="Search" />
            </form>
          </div>
        </div>
      </section>

      <div className="resultBar">
        {movies.map((movie,index) => {
          return (
            <ul key={index}>
              <li className='results' key={movie.id}>
                <ResultCard movie={movie} />
              </li>
            </ul>)
        })}
      </div>
    </>
  )
}

export default Add