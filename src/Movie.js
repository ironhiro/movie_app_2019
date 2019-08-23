import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
 return (
  <div className="movie">
   <img src={poster} alt={title} title={title} />
   <h4 className="movie_title">{title}</h4>
   <h5 className="movie_year">{year}</h5>
   <p className="movie_summary">{summary}</p>
   <ul className="movie_genres">{genres.map((genre,index)=> 
      <li key={index} className="genre_list">{genre}</li>
     )}
   </ul>
  </div>
 );
}

Movie.propTypes ={
 id: PropTypes.number.isRequired,
 year: PropTypes.number.isRequired,
 title: PropTypes.string.isRequired,
 summary: PropTypes.string.isRequired,
 poster: PropTypes.string.isRequired,
 genres: PropTypes.arrayOf(PropTypes.string).isRequired
}; 

export default Movie;