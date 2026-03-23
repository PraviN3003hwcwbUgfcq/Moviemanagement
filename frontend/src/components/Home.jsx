import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:3000/show')
    .then((res) => setMovies(res.data))
    .catch((err) => console.log(err))
  },[])

  return (
    <div className="container py-5">
      
      <h2 className="text-center mb-5 fw-bold text-primary">
        🎬 Movie Collection
      </h2>

      <div className="row g-4">
        {movies.map((movie) => (
          
          <div className="col-sm-6 col-md-4 col-lg-3" key={movie._id}>
            
            <div className="card h-100 shadow-lg border-0 rounded-4">
              
              <img 
                src={movie.posterUrl} 
                className="card-img-top rounded-top-4"
                alt={movie.title}
                style={{ height: "350px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                
                <h5 className="card-title fw-bold text-dark">
                  {movie.title}
                </h5>

                <p className="mb-1 text-muted">
                  ⭐ <b>{movie.rating}</b>/10
                </p>

                <p className="mb-1">
                  🎭 {movie.genre}
                </p>

                <p className="mb-1">
                  ⏱ {movie.duration} mins
                </p>

                <p className="mb-3">
                  🌐 {movie.language}
                </p>

                <NavLink
                  className="btn btn-primary mt-auto w-100 rounded-pill"
                  to={`/show/${movie._id}`}
                >
                  Read More
                </NavLink>

              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Home;