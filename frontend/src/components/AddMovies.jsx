import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMovies = () => {
  const [movie, setMovie] = useState({
    title: '',
    rating: '',
    genre: '',
    duration: '',
    language: '',
    posterUrl: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/add', movie)
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container py-5">

      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">

          <div className="card shadow-lg border-0 rounded-4">
            
            <div className="card-body p-4">
              
              <h3 className="text-center mb-4 fw-bold text-primary">
                🎬 Add Movie
              </h3>

              <form onSubmit={handleSubmit}>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Title"
                    required
                    onChange={(e) => setMovie({ ...movie, title: e.target.value })}
                  />
                  <label htmlFor="title">Title</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="rating"
                    placeholder="Rating"
                    required
                    onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
                  />
                  <label htmlFor="rating">Rating (out of 10)</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="genre"
                    placeholder="Genre"
                    required
                    onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
                  />
                  <label htmlFor="genre">Genre</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="duration"
                    placeholder="Duration"
                    required
                    onChange={(e) => setMovie({ ...movie, duration: e.target.value })}
                  />
                  <label htmlFor="duration">Duration (mins)</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="language"
                    placeholder="Language"
                    required
                    onChange={(e) => setMovie({ ...movie, language: e.target.value })}
                  />
                  <label htmlFor="language">Language</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="poster"
                    placeholder="Poster URL"
                    required
                    onChange={(e) => setMovie({ ...movie, posterUrl: e.target.value })}
                  />
                  <label htmlFor="poster">Poster URL</label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 rounded-pill py-2 fw-bold"
                >
                  ➕ Add Movie
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default AddMovies;