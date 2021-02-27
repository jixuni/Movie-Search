import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = vote => {
  if (vote >= 7) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const defaultImage =
  "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <img
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>

      <div className="movie-over">
        <h2>Summary</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};
//testing

export default Movie;
